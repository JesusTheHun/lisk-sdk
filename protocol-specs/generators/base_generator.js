module.exports = {
	runGenerator: (generatorName, suiteCreators) => {
		for (suite of suiteCreators) {
			output(suite);
		}
	},
};
