/*
 * Copyright © 2018 Lisk Foundation
 *
 * See the LICENSE file at the top-level directory of this distribution
 * for licensing information.
 *
 * Unless otherwise agreed in a custom licensing agreement with the Lisk Foundation,
 * no part of this software, including this file, may be copied, modified,
 * propagated, or distributed except according to the terms contained in the
 * LICENSE file.
 *
 * Removal or modification of this copyright notice is prohibited.
 *
 */
import * as BigNum from '@liskhq/bignum';
import { getAddressFromPublicKey } from '@liskhq/lisk-cryptography';
import {
	BaseTransaction,
	StateStore,
	StateStorePrepare,
} from './base_transaction';
import { MAX_TRANSACTION_AMOUNT, TRANSFER_FEE } from './constants';
import { convertToAssetError, TransactionError } from './errors';
import { TransactionJSON } from './transaction_types';
import {
	validateAddress,
	validateTransferAmount,
	validator,
	verifyAmountBalance,
	verifyBalance,
} from './utils';

export interface EventTransactionAsset {
	readonly interval: number;
	readonly count: number;
}

export const eventAssetFormatSchema = {
	type: 'object',
	properties: {
		interval: {
			type: 'number',
		},
		count: {
			type: 'number',
		},
	},
};

export class EventTransaction extends BaseTransaction {
	public readonly asset: EventTransactionAsset;
	public static TYPE = 11;
	public static FEE = TRANSFER_FEE.toString();

	public constructor(rawTransaction: unknown) {
		super(rawTransaction);
		const tx = (typeof rawTransaction === 'object' && rawTransaction !== null
			? rawTransaction
			: {}) as Partial<TransactionJSON>;
		// Initializes to empty object if it doesn't exist
		this.asset = (tx.asset || {}) as EventTransactionAsset;
	}

	protected assetToBytes(): Buffer {
		const { interval, count } = this.asset;
		const hexNumbers = 16;

		const intervalBuffer = Buffer.from(interval.toString(hexNumbers), 'hex');
		const countBuffer = Buffer.from(count.toString(hexNumbers), 'hex');

		return Buffer.concat([
			new Uint8Array(intervalBuffer),
			new Uint8Array(countBuffer),
		]);
	}

	public async prepare(store: StateStorePrepare): Promise<void> {
		Promise.all([
			await store.account.cache([
				{
					address: this.senderId,
				},
				{
					address: this.recipientId,
				},
			]),
			await store.event.cache([
				{
					transactionId: this.id,
				},
			]),
		]);
	}

	// tslint:disable-next-line prefer-function-over-method
	protected verifyAgainstTransactions(
		_: ReadonlyArray<TransactionJSON>,
	): ReadonlyArray<TransactionError> {
		return [];
	}

	protected validateAsset(): ReadonlyArray<TransactionError> {
		validator.validate(eventAssetFormatSchema, this.asset);
		const errors = convertToAssetError(
			this.id,
			validator.errors,
		) as TransactionError[];

		if (!validateTransferAmount(this.amount.toString())) {
			errors.push(
				new TransactionError(
					'Amount must be a valid number in string format.',
					this.id,
					'.amount',
					this.amount.toString(),
				),
			);
		}

		if (!this.recipientId) {
			errors.push(
				new TransactionError(
					'`recipientId` must be provided.',
					this.id,
					'.recipientId',
				),
			);
		}

		try {
			validateAddress(this.recipientId);
		} catch (error) {
			errors.push(
				new TransactionError(
					error.message,
					this.id,
					'.recipientId',
					this.recipientId,
				),
			);
		}

		if (this.recipientPublicKey) {
			const calculatedAddress = getAddressFromPublicKey(
				this.recipientPublicKey,
			);
			if (this.recipientId !== calculatedAddress) {
				errors.push(
					new TransactionError(
						'recipientId does not match recipientPublicKey.',
						this.id,
						'.recipientId',
						this.recipientId,
						calculatedAddress,
					),
				);
			}
		}

		return errors;
	}

	protected applyAsset(store: StateStore): ReadonlyArray<TransactionError> {
		const errors: TransactionError[] = [];
		const sender = store.account.get(this.senderId);

		const balanceError = verifyAmountBalance(
			this.id,
			sender,
			this.amount,
			this.fee,
		);
		if (balanceError) {
			errors.push(balanceError);
		}

		const updatedSenderBalance = new BigNum(sender.balance).sub(this.amount);

		const updatedSender = {
			...sender,
			balance: updatedSenderBalance.toString(),
		};
		store.account.set(updatedSender.address, updatedSender);
		const recipient = store.account.getOrDefault(this.recipientId);

		const updatedRecipientBalance = new BigNum(recipient.balance).add(
			this.amount,
		);

		if (updatedRecipientBalance.gt(MAX_TRANSACTION_AMOUNT)) {
			errors.push(
				new TransactionError(
					'Invalid amount',
					this.id,
					'.amount',
					this.amount.toString(),
				),
			);
		}

		const updatedRecipient = {
			...recipient,
			balance: updatedRecipientBalance.toString(),
		};
		store.account.set(updatedRecipient.address, updatedRecipient);

		try {
			// Check if the event exists, if it does, don't do anything, if it doesn't create the entry
			store.event.get(this.id);
		} catch (e) {
			if (
				e.message === `event with transactionId = ${this.id} does not exist`
			) {
				// First time, so we are creating an entry in the events table
				const event = {
					transactionId: this.id,
					interval: this.asset.interval,
					count: this.asset.count,
				};
				store.event.set(this.id, event);
			}
			errors.push(e);
		}

		return errors;
	}

	protected undoAsset(store: StateStore): ReadonlyArray<TransactionError> {
		const errors: TransactionError[] = [];
		const sender = store.account.get(this.senderId);
		const updatedSenderBalance = new BigNum(sender.balance).add(this.amount);

		if (updatedSenderBalance.gt(MAX_TRANSACTION_AMOUNT)) {
			errors.push(
				new TransactionError(
					'Invalid amount',
					this.id,
					'.amount',
					this.amount.toString(),
				),
			);
		}

		const updatedSender = {
			...sender,
			balance: updatedSenderBalance.toString(),
		};
		store.account.set(updatedSender.address, updatedSender);
		const recipient = store.account.getOrDefault(this.recipientId);

		const balanceError = verifyBalance(this.id, recipient, this.amount);

		if (balanceError) {
			errors.push(balanceError);
		}

		const updatedRecipientBalance = new BigNum(recipient.balance).sub(
			this.amount,
		);

		const updatedRecipient = {
			...recipient,
			balance: updatedRecipientBalance.toString(),
		};

		store.account.set(updatedRecipient.address, updatedRecipient);

		// Check if the event exists, if it does, don't do anything, if it doesn't create the entry
		store.event.get(this.id);
		const revertEvent = {
			transactionId: this.id,
			count: 0,
			interval: 0,
		};
		store.event.set(this.id, revertEvent);

		return errors;
	}

	// tslint:disable:next-line: prefer-function-over-method no-any
	protected assetFromSync(raw: any): object | undefined {
		if (raw.interval || raw.count) {
			// This line will throw if there is an error

			return {
				interval: raw.interval,
				count: raw.count,
			};
		}

		return undefined;
	}
}
