var vows 			= require('vows'),
	assert			= require('assert'),
	lambdaWrapper	= require('lambda-wrapper');

var usersPostHandler = require('../src/users.js');
var handler = lambdaWrapper.wrap(usersPostHandler, {
	handler: 'post'
});

module.exports = function (suite) {
	suite.addBatch({
		'post user': {
			topic: function() {
				handler.run({
					http_method: 'post',
					body: {
						email: 'ivanderbu2@gmail.com',
						first_name: 'Ivan',
						last_name: 'Radunovic'
					}
				}, this.callback);
			},
			"runs": function (err, result) {
				assert.deepEqual(result, {
					method: 'post',
					message: 'success'
				});
			}
		}
	})
}