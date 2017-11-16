let fs = require('fs');
let prompt = require('prompt');
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
	let schema = {
		properties: {
			copy: {
				pattern: /^[YyNn]+$/,
				message: 'Please answer "y" or "n".',
				description: `No .eslintrc was found in project root (${projectRoot}). Would you like it to be copied to root?`,
				default: "y",
				required: true
			}
		}
	};

	prompt.start();

	prompt.get(schema, function (err, result) {
		switch(result.copy) {
			case "Y":
			case "y":
				fs.createReadStream('.eslintrc').on('error', function() {
					console.error('Unable to read .eslintrc');
				}).pipe(fs.createWriteStream(path.join(projectRoot, '.eslintrc')).on('error', function() {
					console.error('Unable to write .eslintrc');
				}));
				break;
		}
	});
}