let fs = require('fs');
let path = require('path');
let projectRoot = require('path').resolve('../../../');

files = fs.readdirSync(projectRoot);
let re = new RegExp(/\.eslintrc$|\.eslintrc\./);
let configExists = false;
files.forEach((file) => {
	if(re.exec(file)) {
		configExists = true;
	}
});

//Package.json
let packageExists = false;
let packageFile = path.join(projectRoot, 'package.json');
if(fs.existsSync(packageFile)) {
	let packageData = require(packageFile);

	if(typeof packageData === 'object' && packageData.hasOwnProperty('eslintConfig')) {
		packageExists = true;
	}
}

//Prompt is necessary
if(!configExists && !packageExists) {
	console.log('Eslint configuration not found. Copying .eslintrc to root.');
	fs.createReadStream('.eslintrc').on('error', function() {
		console.error('Unable to read .eslintrc');
	}).pipe(fs.createWriteStream(path.join(projectRoot, '.eslintrc')).on('error', function() {
		console.error('Unable to write .eslintrc');
	}));
}