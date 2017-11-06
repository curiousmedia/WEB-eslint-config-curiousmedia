let expect = require('chai').expect;
let config = require('../');

describe("Config", function () {
	it("config is an object", function () {
		expect(config).to.be.a('object');
	});

	it("config matches eslintrc.json", function () {
		expect(config).to.equal(require('../eslintrc.json'));
	});
});