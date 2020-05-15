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


const randomstring = require('randomstring');
const { transfer } = require('@liskhq/lisk-transactions');
const {
	getKeys,
	getAddressFromPublicKey,
} = require('@liskhq/lisk-cryptography');
const accountFixtures = require('../fixtures/accounts');
const {
	getNetworkIdentifier,
	devnetNetworkIdentifier,
} = require('./network_identifier');

const networkIdentifier = global.__testContext
	? getNetworkIdentifier(global.__testContext.config.genesisBlock)
	: devnetNetworkIdentifier;

const random = {};

// Returns a random number between min (inclusive) and max (exclusive)
random.number = function(min, max) {
	// eslint-disable-next-line no-param-reassign
	min = Math.ceil(min);
	// eslint-disable-next-line no-param-reassign
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
};

// Returns a random username of 16 characters
random.username = function() {
	const randomLetter = randomstring.generate({
		length: 1,
		charset: 'alphabetic',
		capitalization: 'lowercase',
	});
	const custom = 'abcdefghijklmnopqrstuvwxyz0123456789!@$&_.';
	const username = randomstring.generate({
		length: 15,
		charset: custom,
	});

	return randomLetter.concat(username);
};

// Returns a random delegate name of 20 characters
random.delegateName = function() {
	const randomLetter = randomstring.generate({
		length: 1,
		charset: 'alphabetic',
		capitalization: 'lowercase',
	});
	const custom = 'abcdefghijklmnopqrstuvwxyz0123456789!@$&_.';
	const username = randomstring.generate({
		length: 19,
		charset: custom,
	});

	return randomLetter.concat(username);
};

// Returns a random application name of 32 characteres
random.applicationName = function() {
	const custom =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	return randomstring.generate({
		length: random.number(5, 32),
		charset: custom,
	});
};

// Returns a random string of a given size
random.dataField = function(bytes) {
	return randomstring.generate({
		length: bytes,
		charset: 'alphanumeric',
	});
};

// Test random application
random.application = function() {
	const application = {
		category: random.number(0, 9),
		name: random.applicationName(),
		description: 'Blockchain based home monitoring tool',
		tags: 'monitoring temperature power sidechain',
		type: random.number(0, 2),
		link: `https://${random.applicationName()}.zip`,
		icon:
			'https://raw.githubusercontent.com/MaxKK/blockDataDapp/master/icon.png',
	};

	return application;
};

// Test applications
random.guestbookDapp = random.application();
random.blockDataDapp = random.application();

// Returns a basic random account
random.account = function(nonDelegate) {
	const account = {
		balance: '0',
	};

	account.passphrase = random.password();
	account.keypair = getKeys(account.passphrase);
	account.username = nonDelegate ? '' : random.delegateName();
	account.publicKey = getKeys(account.passphrase).publicKey;
	account.address = getAddressFromPublicKey(account.publicKey);

	return account;
};

// Returns an random basic transfer transaction to send 1 LSK from genesis account to a random account
random.transaction = function(nonce = '0') {
	return transfer({
		networkIdentifier,
		nonce,
		fee: '10000000',
		amount: '10000000',
		passphrase: accountFixtures.genesis.passphrase,
		recipientId: random.account().address,
	});
};

// Returns a random password
random.password = function() {
	return Math.random()
		.toString(36)
		.substring(7);
};

const convertToBigInt = transactions =>
	transactions.forEach(transaction => {
		// eslint-disable-next-line no-param-reassign
		transaction.amount = BigInt(transaction.amount);
		// eslint-disable-next-line no-param-reassign
		transaction.fee = BigInt(transaction.fee);
	});

random.convertToBigInt = convertToBigInt;

module.exports = random;
