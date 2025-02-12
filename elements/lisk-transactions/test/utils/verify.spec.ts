/*
 * Copyright © 2019 Lisk Foundation
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
import {
	verifySenderPublicKey,
	verifyBalance,
	verifySecondSignature,
	verifyMultiSignatures,
} from '../../src/utils';
import * as validator from '../../src/utils/sign_and_validate';
import { TransactionError, TransactionPendingError } from '../../src/errors';
import { MultisignatureStatus } from '../../src/base_transaction';

describe('#verify', () => {
	const defaultId = '4838520211125422557';

	describe('#verifySenderPublicKey', () => {
		it('should return undefined when sender public key and public key is the same', async () => {
			const publicKey = 'sender-public-key';
			expect(
				verifySenderPublicKey(defaultId, { publicKey } as any, publicKey),
			).toBeUndefined();
		});

		it('should return TransactionError when sender public key and account public key is not the same', async () => {
			const publicKey = 'sender-public-key';
			const result = verifySenderPublicKey(
				defaultId,
				{ publicKey } as any,
				'different public key',
			);
			expect(result).toBeInstanceOf(TransactionError);
			expect(result).toHaveProperty('dataPath', '.senderPublicKey');
		});
	});

	describe('#verifyBalance', () => {
		const defaultAccount = { balance: '1000000000' } as any;
		it('should return undefined when sender has exact amount', async () => {
			expect(
				verifyBalance(defaultId, defaultAccount, BigInt('1000000000')),
			).toBeUndefined();
		});

		it('should return undefined when sender has enoguh balance', async () => {
			expect(
				verifyBalance(defaultId, defaultAccount, BigInt('100')),
			).toBeUndefined();
		});

		it('should return TransactionError when sender does not have enoguh balance', async () => {
			const result = verifyBalance(
				defaultId,
				defaultAccount,
				BigInt('1000000001'),
			);
			expect(result).toBeInstanceOf(TransactionError);
			expect(result).toHaveProperty('dataPath', '.balance');
		});
	});

	describe('#verifySecondSignature', () => {
		const defaultPublicKey = 'default-public-key';
		const defaultAccount = {
			balance: '1000000000',
			secondPublicKey: defaultPublicKey,
		} as any;
		const defaultSignSignature = 'default-sign-signature';
		const fakeTransactionBuffer = Buffer.from(
			'fake transaction buffer',
			'utf8',
		);
		const successResult = { valid: true, error: undefined };
		const failResult = { valid: false, error: new TransactionError('fail') };

		beforeEach(async () => {
			jest.spyOn(validator, 'validateSignature').mockReturnValue(successResult);
		});

		it('should return TransactionError when sender does not have second signature but signSignature is provided', async () => {
			const { secondPublicKey, ...invalidAccount } = defaultAccount;
			const result = verifySecondSignature(
				defaultId,
				invalidAccount,
				defaultSignSignature,
				fakeTransactionBuffer,
			);
			expect(result).toBeInstanceOf(TransactionError);
			expect(result).toHaveProperty('dataPath', '.signSignature');
		});

		it('should return undefined when sender does not have second public key and signSignature is not provided', async () => {
			const { secondPublicKey, ...invalidAccount } = defaultAccount;
			expect(
				verifySecondSignature(
					defaultId,
					invalidAccount,
					undefined,
					fakeTransactionBuffer,
				),
			).toBeUndefined();
		});

		it('should call validateSignature with currect arguments', async () => {
			verifySecondSignature(
				defaultId,
				defaultAccount,
				defaultSignSignature,
				fakeTransactionBuffer,
			);
			expect(validator.validateSignature).toHaveBeenCalledWith(
				defaultPublicKey,
				defaultSignSignature,
				fakeTransactionBuffer,
				defaultId,
			);
		});

		it('should return undefined when valid', async () => {
			expect(
				verifySecondSignature(
					defaultId,
					defaultAccount,
					defaultSignSignature,
					fakeTransactionBuffer,
				),
			).toBeUndefined();
		});

		it('should return error from validateSignature when not valid', async () => {
			(validator.validateSignature as any).mockReturnValue(failResult);
			expect(
				verifySecondSignature(
					defaultId,
					defaultAccount,
					defaultSignSignature,
					fakeTransactionBuffer,
				),
			).toBe(failResult.error);
		});

		it('should return TransactionError when sender have second public key but signSignature is not provided', async () => {
			const result = verifySecondSignature(
				defaultId,
				defaultAccount,
				undefined,
				fakeTransactionBuffer,
			);
			expect(result).toBeInstanceOf(TransactionError);
			expect(result).toHaveProperty('dataPath', '.signSignature');
		});
	});

	describe('#verifyMultiSignatures', () => {
		const defaultAccount = {
			address: '123L',
			membersPublicKeys: [
				'c465d74511c2bfd136cf9764172acd3c1514fa7ad76475e03bc91cf679757a5a',
				'c465d74511c2bfd136cf9764172acd3c1514fa7ad76475e03bc91cf679757a5b',
				'c465d74511c2bfd136cf9764172acd3c1514fa7ad76475e03bc91cf679757a5c',
			],
			multiMin: 3,
		};
		const signatures = [
			'00ef8fcf4e1815def245ad32d0d0e3e86993a4029c41e8ca1dc2674c9794d31cefc2226ac539dea8049c7085fdcb29768389b96104ac05a0ddabfb8b523af409',
			'00ef8fcf4e1815def245ad32d0d0e3e86993a4029c41e8ca1dc2674c9794d31cefc2226ac539dea8049c7085fdcb29768389b96104ac05a0ddabfb8b523af400',
			'00ef8fcf4e1815def245ad32d0d0e3e86993a4029c41e8ca1dc2674c9794d31cefc2226ac539dea8049c7085fdcb29768389b96104ac05a0ddabfb8b523af401',
		];
		const successResult = { valid: true, errors: [] };
		const pendingResult = {
			valid: false,
			errors: [new TransactionPendingError('fail')],
		};
		const failResult = { valid: false, errors: [new TransactionError('fail')] };
		const fakeTransactionBuffer = Buffer.from(
			'fake transaction buffer',
			'utf8',
		);

		beforeEach(async () => {
			jest
				.spyOn(validator, 'validateMultisignatures')
				.mockReturnValue(successResult);
		});

		it('should return FAIL status with error if sender is not multi-signature account but signatures are provided', async () => {
			const { status, errors } = verifyMultiSignatures(
				defaultId,
				{} as any,
				signatures,
				fakeTransactionBuffer,
			);
			expect(status).toBe(MultisignatureStatus.FAIL);
			expect(errors).toHaveLength(1);
			expect(errors[0].dataPath).toBe('.signatures');
		});

		it('should return NONMULTISIGNATURE status without error if sender is not multi-signature account and signatures are not provided', async () => {
			const { status, errors } = verifyMultiSignatures(
				defaultId,
				{} as any,
				[],
				fakeTransactionBuffer,
			);
			expect(status).toBe(MultisignatureStatus.NONMULTISIGNATURE);
			expect(Object.keys(errors)).toHaveLength(0);
		});

		it('should call validateMultisignature with correct argument', async () => {
			verifyMultiSignatures(
				defaultId,
				defaultAccount as any,
				signatures,
				fakeTransactionBuffer,
			);
			expect(validator.validateMultisignatures).toHaveBeenCalledWith(
				defaultAccount.membersPublicKeys,
				signatures,
				defaultAccount.multiMin,
				fakeTransactionBuffer,
				defaultId,
			);
		});

		it('should return READY status without error if transaction is valid', async () => {
			const { status, errors } = verifyMultiSignatures(
				defaultId,
				defaultAccount as any,
				signatures,
				fakeTransactionBuffer,
			);
			expect(status).toBe(MultisignatureStatus.READY);
			expect(Object.keys(errors)).toHaveLength(0);
		});

		it('should return PENDING status with pending error if only error is the pending error', async () => {
			(validator.validateMultisignatures as any).mockReturnValue(pendingResult);
			const { status, errors } = verifyMultiSignatures(
				defaultId,
				defaultAccount as any,
				signatures,
				fakeTransactionBuffer,
			);
			expect(status).toBe(MultisignatureStatus.PENDING);
			expect(errors).toHaveLength(1);
			expect(errors[0]).toBeInstanceOf(TransactionPendingError);
		});

		it('should return FAIL status with errors', async () => {
			(validator.validateMultisignatures as any).mockReturnValue(failResult);
			const { status, errors } = verifyMultiSignatures(
				defaultId,
				defaultAccount as any,
				signatures,
				fakeTransactionBuffer,
			);
			expect(status).toBe(MultisignatureStatus.FAIL);
			expect(errors).toEqual(failResult.errors);
		});
	});
});
