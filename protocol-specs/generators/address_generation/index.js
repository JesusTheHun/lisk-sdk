const { getAddressFromPublicKey } = require('@liskhq/lisk-cryptography');
const BaseGenerator = require('../../base_generator');

const PUBLIC_KEY =
	'968ba2fa993ea9dc27ed740da0daf49eddd740dbd7cb1cb4fc5db3a20baf341b';

// TODO: Possibly add more public keys

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

BaseGenerator.runGenerator('address_generation', [addressFromPubKeySuite]);
