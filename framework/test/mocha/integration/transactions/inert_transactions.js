const async = require('async');
const expect = require('chai').expect;
const {
	transfer,
	registerDelegate,
	castVotes,
} = require('@liskhq/lisk-transactions');
const localCommon = require('../common');
const accountFixtures = require('../../../fixtures/accounts');
const randomUtil = require('../../../utils/random');
const { getNetworkIdentifier } = require('../../../utils/network_identifier');

const networkIdentifier = getNetworkIdentifier(
	__testContext.config.genesisBlock,
);

describe('inert transactions', () => {
	let library;
	const senderAccount = accountFixtures.genesis;
	const recipientAccount = randomUtil.account();
	const transferInertTransaction = transfer({
		networkIdentifier,
		recipientId: recipientAccount.address,
		amount: (1000000000 * 100).toString(),
		passphrase: senderAccount.passphrase,
	});

	const voteInertTransaction = castVotes({
		networkIdentifier,
		passphrase: recipientAccount.passphrase,
		votes: [`${accountFixtures.existingDelegate.publicKey}`],
	});

	const delegateInertTransaction = registerDelegate({
		networkIdentifier,
		passphrase: recipientAccount.passphrase,
		username: recipientAccount.username,
	});

	localCommon.beforeBlock('inert_transactions', lib => {
		library = lib;
		library.modules.chain.exceptions = {
			...library.modules.chain.exceptions,
			inertTransactions: [
				transferInertTransaction.id,
				voteInertTransaction.id,
				delegateInertTransaction.id,
			],
		};
	});

	describe('send funds to account', () => {
		before(done => {
			const transferTransaction = transfer({
				networkIdentifier,
				recipientId: recipientAccount.address,
				amount: (5000000000 * 100).toString(),
				passphrase: senderAccount.passphrase,
			});
			localCommon.addTransactionsAndForge(library, [transferTransaction], done);
		});

		describe('getting account before inert transaction', () => {
			let beforeBlockSenderMemAccount;
			let beforeBlockRecipientMemAccount;

			before('get sender and recipient accounts', done => {
				async.parallel(
					[
						async () => {
							beforeBlockSenderMemAccount = await library.components.storage.entities.Account.getOne(
								{ address: senderAccount.address },
							);
						},
						async () => {
							beforeBlockRecipientMemAccount = await library.components.storage.entities.Account.getOne(
								{ address: recipientAccount.address },
							);
						},
					],
					done,
				);
			});

			describe('when forging block with inert type 0 transaction', () => {
				const inertTransaction = transferInertTransaction;

				before(done => {
					localCommon.addTransactionsAndForge(
						library,
						[inertTransaction],
						done,
					);
				});

				describe('details of the accounts', () => {
					let afterBlockSenderMemAccount;
					let afterBlockRecipientMemAccount;

					before('get sender and recipient accounts', done => {
						async.parallel(
							[
								async () => {
									afterBlockSenderMemAccount = await library.components.storage.entities.Account.getOne(
										{ address: senderAccount.address },
									);
								},
								async () => {
									afterBlockRecipientMemAccount = await library.components.storage.entities.Account.getOne(
										{ address: recipientAccount.address },
									);
								},
							],
							done,
						);
					});

					it('should not update balance field of sender account', async () => {
						return expect(beforeBlockSenderMemAccount.balance).to.equal(
							afterBlockSenderMemAccount.balance,
						);
					});

					it('should not update balance field of recipient account', async () => {
						return expect(beforeBlockRecipientMemAccount.balance).to.equal(
							afterBlockRecipientMemAccount.balance,
						);
					});
				});

				describe('transactions table', () => {
					let transactionFromDatabase;

					before('get transaction from database', done => {
						localCommon.getTransactionFromModule(
							library,
							{
								id: inertTransaction.id,
							},
							(err, res) => {
								expect(err).to.not.exist;
								transactionFromDatabase = res.transactions[0];
								done();
							},
						);
					});

					it('should save transaction in the database', async () => {
						expect(transactionFromDatabase).to.be.an('Object');
						return expect(transactionFromDatabase.id).to.equal(
							inertTransaction.id,
						);
					});
				});

				describe('after deleting block', () => {
					let afterDeleteSenderMemAccount;
					let afterDeleteRecipientMemAccount;

					before('deleting block', done => {
						localCommon.deleteLastBlock(library, done);
					});

					describe('details of the account', () => {
						before('get sender and recipient accounts', done => {
							async.parallel(
								[
									async () => {
										afterDeleteSenderMemAccount = await library.components.storage.entities.Account.getOne(
											{ address: senderAccount.address },
										);
									},
									async () => {
										afterDeleteRecipientMemAccount = await library.components.storage.entities.Account.getOne(
											{ address: recipientAccount.address },
										);
									},
								],
								done,
							);
						});

						it('should not update balance field of sender account', async () => {
							return expect(afterDeleteSenderMemAccount.balance).to.equal(
								beforeBlockSenderMemAccount.balance,
							);
						});

						it('should not update balance field of recipient account', async () => {
							return expect(afterDeleteRecipientMemAccount.balance).to.equal(
								beforeBlockRecipientMemAccount.balance,
							);
						});
					});

					describe('transactions table', () => {
						let transactionsFilteredById;

						before('get transaction from database', done => {
							localCommon.getTransactionFromModule(
								library,
								{
									id: inertTransaction.id,
								},
								(err, res) => {
									expect(err).to.not.exist;
									transactionsFilteredById = res.transactions;
									done();
								},
							);
						});

						it('should delete transaction from the database', async () => {
							expect(transactionsFilteredById).to.be.an('Array');
							return expect(transactionsFilteredById).to.have.length(0);
						});
					});
				});
			});

			describe('when forging block with inert type 2 transaction', () => {
				const inertTransaction = delegateInertTransaction;
				before(done => {
					localCommon.addTransactionsAndForge(
						library,
						[inertTransaction],
						done,
					);
				});

				describe('details of the accounts', () => {
					let afterBlockRecipientMemAccount;

					before('get recipient account', async () => {
						afterBlockRecipientMemAccount = await library.components.storage.entities.Account.getOne(
							{ address: recipientAccount.address },
						);
					});

					it('should not update u_balance field of recipient account', async () => {
						return expect(beforeBlockRecipientMemAccount.u_balance).to.equal(
							afterBlockRecipientMemAccount.u_balance,
						);
					});

					it('should not update balance field of recipient account', async () => {
						return expect(beforeBlockRecipientMemAccount.balance).to.equal(
							afterBlockRecipientMemAccount.balance,
						);
					});

					it('should not have username property set', async () => {
						return expect(afterBlockRecipientMemAccount.username).to.not.exist;
					});

					it('should have isDelegate set to false', async () => {
						return expect(afterBlockRecipientMemAccount.isDelegate).to.equal(
							false,
						);
					});
				});

				describe('transactions table', () => {
					let transactionFromDatabase;

					before('get transaction from database', done => {
						localCommon.getTransactionFromModule(
							library,
							{
								id: inertTransaction.id,
							},
							(err, res) => {
								expect(err).to.not.exist;
								transactionFromDatabase = res.transactions[0];
								done();
							},
						);
					});

					it('should save transaction in the database', async () => {
						expect(transactionFromDatabase).to.be.an('Object');
						return expect(transactionFromDatabase.id).to.equal(
							inertTransaction.id,
						);
					});
				});

				describe('after deleting block', () => {
					let afterDeleteRecipientMemAccount;

					before('deleting block', done => {
						localCommon.deleteLastBlock(library, done);
					});

					describe('details of the accounts', () => {
						before('get recipient account', async () => {
							afterDeleteRecipientMemAccount = await library.components.storage.entities.Account.getOne(
								{ address: recipientAccount.address },
							);
						});

						it('should not update u_balance field of recipient account', async () => {
							return expect(afterDeleteRecipientMemAccount.u_balance).to.equal(
								beforeBlockRecipientMemAccount.u_balance,
							);
						});

						it('should not update balance field of recipient account', async () => {
							return expect(afterDeleteRecipientMemAccount.balance).to.equal(
								beforeBlockRecipientMemAccount.balance,
							);
						});

						it('should not have username property set', async () => {
							return expect(afterDeleteRecipientMemAccount.username).to.not
								.exist;
						});

						it('should have isDelegate set to false', async () => {
							return expect(afterDeleteRecipientMemAccount.isDelegate).to.equal(
								false,
							);
						});
					});

					describe('transactions table', () => {
						let transactionsFilteredById;

						before('get transaction from database', done => {
							localCommon.getTransactionFromModule(
								library,
								{
									id: inertTransaction.id,
								},
								(err, res) => {
									expect(err).to.not.exist;
									transactionsFilteredById = res.transactions;
									done();
								},
							);
						});

						it('should delete transaction from the database', async () => {
							expect(transactionsFilteredById).to.be.an('Array');
							return expect(transactionsFilteredById).to.have.length(0);
						});
					});
				});
			});

			describe('when forging block with inert type 3 transaction', () => {
				const inertTransaction = voteInertTransaction;

				before(done => {
					localCommon.addTransactionsAndForge(
						library,
						[inertTransaction],
						done,
					);
				});

				describe('details of the accounts', () => {
					let afterBlockRecipientMemAccount;

					before('get recipient account', async () => {
						afterBlockRecipientMemAccount = await library.components.storage.entities.Account.getOne(
							{ address: recipientAccount.address },
						);
					});

					it('should not update balance field of recipient account', async () => {
						return expect(beforeBlockRecipientMemAccount.balance).to.equal(
							afterBlockRecipientMemAccount.balance,
						);
					});

					it('should not update delegates array for account', async () => {
						return expect(beforeBlockRecipientMemAccount.delegates).to.eql(
							afterBlockRecipientMemAccount.delegates,
						);
					});
				});

				describe('transactions table', () => {
					let transactionFromDatabase;

					before('get transaction from database', done => {
						localCommon.getTransactionFromModule(
							library,
							{
								id: inertTransaction.id,
							},
							(err, res) => {
								expect(err).to.not.exist;
								transactionFromDatabase = res.transactions[0];
								done();
							},
						);
					});

					it('should save transaction in the database', async () => {
						expect(transactionFromDatabase).to.be.an('Object');
						return expect(transactionFromDatabase.id).to.equal(
							inertTransaction.id,
						);
					});
				});

				describe('after deleting block', () => {
					before('deleting block', done => {
						localCommon.deleteLastBlock(library, done);
					});

					describe('details of the accounts', () => {
						let afterDeleteRecipientMemAccount;

						before('get recipient account', async () => {
							afterDeleteRecipientMemAccount = await library.components.storage.entities.Account.getOne(
								{ address: recipientAccount.address },
							);
						});

						it('should not update u_balance field of recipient account', async () => {
							return expect(afterDeleteRecipientMemAccount.u_balance).to.equal(
								beforeBlockRecipientMemAccount.u_balance,
							);
						});

						it('should not update balance field of recipient account', async () => {
							return expect(afterDeleteRecipientMemAccount.balance).to.equal(
								beforeBlockRecipientMemAccount.balance,
							);
						});

						it('should not update delegates array for account', async () => {
							return expect(afterDeleteRecipientMemAccount.delegates).to.eql(
								beforeBlockRecipientMemAccount.delegates,
							);
						});
					});

					describe('transactions table', () => {
						let transactionsFilteredById;

						before('get transaction from database', done => {
							localCommon.getTransactionFromModule(
								library,
								{
									id: inertTransaction.id,
								},
								(err, res) => {
									expect(err).to.not.exist;
									transactionsFilteredById = res.transactions;
									done();
								},
							);
						});

						it('should delete transaction from the database', async () => {
							expect(transactionsFilteredById).to.be.an('Array');
							return expect(transactionsFilteredById).to.have.length(0);
						});
					});
				});
			});
		});
	});
});
