const BaseGenerator = require('../../base_generator');

function generateTestCasesForValidBlock() {}

function generateTestCasesForInvalidBlock() {}

function validBlockSuite(configPath) {
	return {
		title: 'Valid block processing',
		summary: '',
		config: 'mainnet',
		runner: 'block_processing',
		handler: 'valid_block_processing',
		testCases: generateTestCasesForValidBlock(),
	};
}

function invalidBlockSuite() {
	return {
		title: 'Invalid block processing',
		summary: '',
		config: 'mainnet',
		runner: 'block_processing',
		handler: 'invalid_block_processing',
		testCases: generateTestCasesForInvalidBlock(),
	};
}

module.exports = BaseGenerator.runGenerator('block_processing', [
	validBlockSuite,
	invalidBlockSuite,
]);
