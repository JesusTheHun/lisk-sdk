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

function addressFromPubKeySuite(configPath) {
	return {
		title: 'Address generation',
		summary: 'Address generation from a public key',
		config: 'mainnet',
		runner: 'block_processing',
		handler: 'valid_block_processing',
		testCases: generateTestCasesForAddressFromPubKey(),
	};
}
module.exports = BaseGenerator.runGenerator('address_generation', [
	addressFromPubKeySuite,
]);
