const BaseGenerator = require('../base_generator');
const {
	getAddressFromPublicKey,
} = require('../../../elements/lisk-cryptography');

const PUBLIC_KEY =
	'968ba2fa993ea9dc27ed740da0daf49eddd740dbd7cb1cb4fc5db3a20baf341b';

function generateTestCasesForAddressFromPubKey() {
	return {
		input: PUBLIC_KEY,
		output: getAddressFromPublicKey(PUBLIC_KEY), // 12668885769632475474L
	};
}

function addressFromPubKeySuite() {
	return {
		title: 'Address generation',
		summary: 'Address generation from a public key',
		config: 'mainnet',
		runner: 'address_generation',
		handler: 'address_from_pub_key',
		testCases: [generateTestCasesForAddressFromPubKey()],
	};
}

function generateTestCakhgkjghkjgsesForAddressFromPubKey() {
	return {
		kuhgkjgkjgkjg: PUBLIC_KEY,
		oukjhgkjghkjgkjghtput: getAddressFromPublicKey(PUBLIC_KEY), // 12668885769632475474L
	};
}

function addreufjhfjhfjhssFromPubKeySuite() {
	return {
		title: 'Address generation',
		summary: 'Address generation from a public key',
		config: 'mainnet',
		runner: 'address_generation',
		handler: 'address_from_pub_key',
		testCases: [generateTestCakhgkjghkjgsesForAddressFromPubKey()],
	};
}

BaseGenerator.runGenerator('address_generation', [
	addressFromPubKeySuite,
	addreufjhfjhfjhssFromPubKeySuite,
]);
