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
 */

'use strict';

const Promise = require('bluebird');
const QueriesHelper = require('../../../common/integration/sql/queries_helper');
const localCommon = require('../../common');

// eslint-disable-next-line mocha/no-skipped-tests
describe.skip('UNSKIP ON LiskHQ/lisk-sdk/issues/4158 :: validateOwnChain', () => {
	let library;
	let Queries;
	let addTransactionsAndForgePromise;

	localCommon.beforeBlock('validate_own_chain_full_two_rounds', lib => {
		library = lib;
		Queries = new QueriesHelper(lib, lib.components.storage);

		addTransactionsAndForgePromise = Promise.promisify(
			localCommon.addTransactionsAndForge,
		);
	});

	describe('forge 3 rounds (303 blocks) with version = 0', () => {
		before(() => {
			library.modules.chain.blocksVerify.exceptions = {
				...library.modules.chain.exceptions,
				blockVersions: {
					0: {
						start: 1,
						end: 303,
					},
				},
			};

			// Not consider the genesis block
			return Promise.mapSeries([...Array(101 * 3 - 1)], async () => {
				return addTransactionsAndForgePromise(library, [], 0);
			});
		});

		it('blockchain should be at height 303', async () => {
			const lastBlock = library.modules.chain.lastBlock;
			return expect(lastBlock.height).to.eql(303);
		});

		it('all blocks should have version = 0', async () => {
			const version = 0;

			return Queries.getAllBlocks().then(rows => {
				_.each(rows, row => {
					expect(row.version).to.be.equal(version);
				});
			});
		});

		describe('increase block version = 1 and exceptions for height = 101', () => {
			let validateOwnChainError = null;

			before(async () => {
				// Set proper exceptions for blocks versions
				library.modules.chain.blocksVerify.exceptions = {
					...library.modules.chain.exceptions,
					blockVersions: {
						0: {
							start: 1,
							end: 101,
						},
					},
				};

				try {
					await library.modules.chain.blocksVerify.requireBlockRewind(
						library.modules.chain.lastBlock,
					);
					library.modules.chain.resetBlockHeaderCache();
					library.modules.chain._lastBlock = await library.modules.chain.blocksProcess.recoverInvalidOwnChain(
						library.modules.chain.lastBlock,
						() => {},
					);
				} catch (error) {
					validateOwnChainError = error;
				}
			});

			it('there should be no error during chain validation', async () => {
				return expect(validateOwnChainError).to.be.eql(null);
			});

			it('blockchain should be at height 101', async () => {
				const lastBlock = library.modules.chain.lastBlock;
				return expect(lastBlock.height).to.eql(101);
			});

			it('remaining blocks have version = 0', async () => {
				return Queries.getAllBlocks().then(rows => {
					_.each(rows, row => {
						expect(row.version).to.be.equal(0);
					});
				});
			});

			describe('forge 5 more blocks', () => {
				before(() => {
					return Promise.mapSeries([...Array(5)], async () => {
						return addTransactionsAndForgePromise(library, [], 0);
					});
				});

				it('blockchain should be at height 106', async () => {
					const lastBlock = library.modules.chain.lastBlock;
					return expect(lastBlock.height).to.eql(106);
				});

				it('last 5 blocks should have version = 1', async () => {
					return Queries.getAllBlocks().then(rows => {
						_.each(rows, row => {
							if (row.height > 101) {
								expect(row.version).to.be.equal(1);
							}
						});
					});
				});
			});
		});
	});
});
