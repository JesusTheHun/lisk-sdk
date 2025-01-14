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

import { Queue } from '../../src/queue';
import { Transaction } from '../../src/transaction_pool';
import * as transactionObjects from '../../fixtures/transactions.json';
import { wrapTransaction } from '../utils/add_transaction_functions';

const transactions = transactionObjects.map(wrapTransaction);

describe('Queue', () => {
	let queue: Queue;

	beforeEach(async () => {
		queue = new Queue();
	});

	describe('#enqueueOne', () => {
		it('should add transaction to the queue', async () => {
			const transaction = transactions[0];
			queue.enqueueOne(transaction);
			expect(queue.transactions).toEqual(expect.arrayContaining([transaction]));
		});

		it('should add transaction to the queue index', async () => {
			const transaction = transactions[0];
			queue.enqueueOne(transaction);
			expect(queue.index[transaction.id]).toEqual(transaction);
		});
	});

	describe('#enqueueMany', () => {
		it('should add transactions to the queue', async () => {
			queue.enqueueMany(transactions);
			transactions.forEach((transaction: Transaction) =>
				expect(queue.transactions).toEqual(
					expect.arrayContaining([transaction]),
				),
			);
		});

		it('should add transactions to the queue index', async () => {
			queue.enqueueMany(transactions);
			transactions.forEach((transaction: Transaction) =>
				expect(queue.index[transaction.id]).toBe(transaction),
			);
		});
	});

	describe('#exists', () => {
		it('should return true if transaction exists in queue', async () => {
			const transaction = transactions[0];
			queue.enqueueOne(transaction);
			expect(queue.exists(transaction.id)).toBe(true);
		});

		it('should return false if transaction does not exist in queue', async () => {
			const transaction = transactions[0];
			expect(queue.exists(transaction.id)).toBe(false);
		});
	});

	describe('#removeFor', () => {
		const alwaysReturnFalse = () => () => false;
		const checkIdsExists = (
			ids: ReadonlyArray<string>,
		): ((transaction: Transaction) => boolean) => {
			return (transaction: Transaction) => ids.includes(transaction.id);
		};

		beforeEach(async () => {
			queue.enqueueMany(transactions);
		});

		it('should not remove any transactions if the condition fails for all transactions', async () => {
			const deletedTransactions = queue.removeFor(alwaysReturnFalse());
			expect(deletedTransactions).toHaveLength(0);
			expect(queue.transactions).toEqual(transactions);
		});

		it('should return removed transactions which pass condition', async () => {
			const [
				toRemoveTransaction1,
				toRemoveTransaction2,
				...tokeepTransactions
			] = transactions;
			const condition = checkIdsExists([
				toRemoveTransaction1.id,
				toRemoveTransaction2.id,
			]);

			const removedTransactions = queue.removeFor(condition);
			expect(removedTransactions).toEqual([
				toRemoveTransaction1,
				toRemoveTransaction2,
			]);
			expect(queue.transactions).toEqual(tokeepTransactions);
		});

		it('should remove transactions which pass condition', async () => {
			const [
				toRemoveTransaction1,
				toRemoveTransaction2,
				...tokeepTransactions
			] = transactions;
			const condition = checkIdsExists([
				toRemoveTransaction1.id,
				toRemoveTransaction2.id,
			]);

			queue.removeFor(condition);
			expect(queue.transactions).toEqual(tokeepTransactions);
		});

		it('should remove queue index for transactions which pass condition', async () => {
			const [
				toRemoveTransaction1,
				toRemoveTransaction2,
				...tokeepTransactions
			] = transactions;
			const condition = checkIdsExists([
				toRemoveTransaction1.id,
				toRemoveTransaction2.id,
			]);

			queue.removeFor(condition);
			expect(queue.index[toRemoveTransaction1.id]).not.toBeDefined();
			expect(queue.index[toRemoveTransaction2.id]).not.toBeDefined();
			expect(queue.transactions).toEqual(tokeepTransactions);
		});
	});

	describe('#peekUntil', () => {
		const returnTrueUntilLimit = (limit: number) => {
			let currentValue = 0;

			return () => currentValue++ < limit;
		};

		beforeEach(async () => {
			queue.enqueueMany(transactions);
		});

		it('should not return any transactions if the condition fails for first transaction', async () => {
			const peekedTransactions = queue.peekUntil(returnTrueUntilLimit(0));
			expect(peekedTransactions).toHaveLength(0);
		});

		it('should return transactions which pass condition', async () => {
			const [secondToLastTransaciton, lastTransaction] = transactions.slice(
				transactions.length - 2,
				transactions.length,
			);
			const condition = returnTrueUntilLimit(2);

			const peekedTransactions = queue.peekUntil(condition);
			expect(peekedTransactions).toEqual([
				lastTransaction,
				secondToLastTransaciton,
			]);
		});
	});

	describe('#dequeueUntil', () => {
		const returnTrueUntilLimit = (limit: number) => {
			let currentValue = 0;

			return () => currentValue++ < limit;
		};

		beforeEach(async () => {
			queue.enqueueMany(transactions);
		});

		it('should not dequeue any transactions if the condition fails for first transaction', async () => {
			const dequeuedTransactions = queue.dequeueUntil(returnTrueUntilLimit(0));
			expect(dequeuedTransactions).toHaveLength(0);
			expect(queue.transactions).toEqual(transactions);
		});

		it('should return dequeued transactions which pass condition', async () => {
			const [secondToLastTransaciton, lastTransaction] = transactions.slice(
				transactions.length - 2,
				transactions.length,
			);
			const condition = returnTrueUntilLimit(2);

			const dequeuedTransactions = queue.dequeueUntil(condition);
			expect(dequeuedTransactions).toEqual([
				lastTransaction,
				secondToLastTransaciton,
			]);
		});

		it('should dequeue 2 transactions', async () => {
			const condition = returnTrueUntilLimit(2);

			queue.dequeueUntil(condition);
			expect(queue.transactions).toEqual(
				transactions.slice(0, transactions.length - 2),
			);
		});

		it('should remove queue index for transactions which pass condition', async () => {
			const [secondToLastTransaciton, lastTransaction] = transactions.slice(
				transactions.length - 2,
				transactions.length,
			);
			const condition = returnTrueUntilLimit(2);

			queue.dequeueUntil(condition);
			expect(queue.index[lastTransaction.id]).not.toBeDefined();
			expect(queue.index[secondToLastTransaciton.id]).not.toBeDefined();
		});
	});

	describe('#size', () => {
		it('should return 0 if the queue is empty', async () => {
			expect(queue.size()).toBe(0);
		});

		it('should return the number of elements in the queue', async () => {
			queue.enqueueMany(transactions);
			expect(queue.size()).toBe(transactions.length);
		});
	});
});
