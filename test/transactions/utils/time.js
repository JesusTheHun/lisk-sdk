/*
 * Copyright © 2017 Lisk Foundation
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
	getTimeFromBlockchainEpoch,
	getTimeWithOffset,
} from '../../../src/transactions/utils/time';

describe('time module', () => {
	const nowRealTime = 1464109220000;
	const nowEpochTime = 20;
	let clock;

	before(() => {
		clock = sinon.useFakeTimers(nowRealTime, 'Date');
	});

	after(() => {
		clock.restore();
	});

	describe('#getTimeFromBlockchainEpoch', () => {
		it('should return current time as number', () => {
			const time = getTimeFromBlockchainEpoch();

			time.should.be.equal(nowEpochTime);
		});

		it('should return epoch time for provided time as number, equal to 10', () => {
			const realTime = 1464109210001;
			const time = getTimeFromBlockchainEpoch(realTime);

			time.should.be.equal(10);
		});
	});

	describe('#getTimeWithOffset', () => {
		it('should get time with undefined offset', () => {
			const time = getTimeWithOffset();

			time.should.be.equal(nowEpochTime);
		});

		it('should get time with positive offset', () => {
			const offset = 3;
			const time = getTimeWithOffset(offset);

			time.should.be.equal(23);
		});

		it('should get time with negative offset', () => {
			const offset = -3;
			const time = getTimeWithOffset(offset);

			time.should.be.equal(17);
		});
	});
});
