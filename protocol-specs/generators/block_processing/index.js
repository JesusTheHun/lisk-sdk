const BaseGenerator = require('../../base_generator');
const utils = require('../../utils');

function generateTestCasesForValidBlock() {
	return {
		initialState: {
			chain: [],
		},
		input,
		output: {
			chain: [],
			accounts: [],
		},
	};
}

function generateTestCasesForInvalidBlock() {}

function validBlockSuite() {
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
