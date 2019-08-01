const fs = require('fs');
const path = require('path');

module.exports = {
	runGenerator: (generatorName, suiteCreators) => {
		for (const suite of suiteCreators) {
			const suiteResult = suite();

			const dirPath = path.join(
				__dirname,
				`../generator_outputs/${suiteResult.runner}`,
			); // TODO: remove hard path

			if (!fs.existsSync(dirPath)) {
				fs.mkdirSync(dirPath);
			}

			const fullPath = `${dirPath}/${suiteResult.handler}.json`;

			fs.writeFileSync(fullPath, JSON.stringify(suiteResult, null, 2));
		}
	},
};
