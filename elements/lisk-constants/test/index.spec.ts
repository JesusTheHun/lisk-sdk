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
	EPOCH_TIME,
	EPOCH_TIME_SECONDS,
	EPOCH_TIME_MILLISECONDS,
	MAX_ADDRESS_NUMBER,
	MAX_TRANSACTION_ID,
	MAX_TRANSACTION_AMOUNT,
	TESTNET_NETHASH,
	MAINNET_NETHASH,
	SIGNED_MESSAGE_PREFIX,
} from '../src';

describe('lisk-constants', () => {
	it('EPOCH_TIME should be a Date instance', () => {
		return expect(EPOCH_TIME).toBeInstanceOf(Date);
	});

	it('EPOCH_TIME_SECONDS should be an integer', () => {
		return expect(typeof EPOCH_TIME_SECONDS).toBe('number');
	});

	it('EPOCH_TIME_MILLISECONDS should be an integer', () => {
		return expect(typeof EPOCH_TIME_MILLISECONDS).toBe('number');
	});

	it('MAX_ADDRESS_NUMBER should be a string', () => {
		return expect(MAX_ADDRESS_NUMBER).toBeString();
	});

	it('MAX_TRANSACTION_ID should be a string', () => {
		return expect(MAX_TRANSACTION_ID).toBeString();
	});

	it('MAX_TRANSACTION_AMOUNT should be a string', () => {
		return expect(MAX_TRANSACTION_AMOUNT).toBeString();
	});

	it('TESTNET_NETHASH should be a string', () => {
		return expect(TESTNET_NETHASH).toBeString();
	});

	it('MAINNET_NETHASH should be a string', () => {
		return expect(MAINNET_NETHASH).toBeString();
	});

	it('SIGNED_MESSAGE_PREFIX should be a string', () => {
		return expect(SIGNED_MESSAGE_PREFIX).toBeString();
	});
});
