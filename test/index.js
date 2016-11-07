var vows = require('vows');

var suite = vows.describe('User Save');

require('./post')(suite);

module.exports.users = suite;