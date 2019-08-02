const fs = require('fs');
const { join: pathJoin } = require('path');
const { execSync } = require('child_process');

const generators = fs.readdirSync('./generators');

// eslint-disable-next-line no-restricted-syntax
for (const aGenerator of generators) {
	const path = pathJoin(__dirname, './generators', aGenerator, 'index.js');
	console.log(`Executing generator '${aGenerator}' in path '${path}'`);
	execSync(`node ${path}`);
}
console.log();
console.log(
	`All specs available in ${pathJoin(__dirname, './generator_outputs/')}`,
);
