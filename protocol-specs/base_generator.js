const fs = require('fs');
const path = require('path');

module.exports = {
	runGenerator: (generatorName, suiteCreators) => {
		// eslint-disable-next-line no-restricted-syntax
		for (const suite of suiteCreators) {
			const suiteResult = suite();

			const dirPath = path.join(
				__dirname,
				`./generator_outputs/${suiteResult.runner}`,
			); // TODO: remove hard path and maybe expose it to a CLI

			if (!fs.existsSync(dirPath)) {
				fs.mkdirSync(dirPath);
			}

			const fullPath = `${dirPath}/${suiteResult.handler}.json`;

			fs.writeFileSync(fullPath, JSON.stringify(suiteResult, null, 2));
		}
	},
};
