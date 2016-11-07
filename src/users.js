'use strict';

var putItemIntoUsers = require('./putItem.js');

function success(event, cb) {
	return cb(null, {
		message: 'success'
	});
}

module.exports.post = function(event, content, cb) {

	putItemIntoUsers(JSON.parse(event.body), 'users', function(err, data) {
		if (err) {
			console.log(err, err.stack);
			return cb('Unexpected Error');
		} else {
			return success(event, cb);
		}
	});

};