var AWS = null;
var mockAWS = null

module.exports.getAWS = function() {

	if(process.env.IS_UNIT_TEST) {
		if(!mockAWS) mockAWS = require('mock-aws');

		console.log('Returning mock AWS SDK');
		mockAWS.mock('DynamoDB', 'putItem', {});
		return mockAWS;
	}

	if(!AWS) AWS = require('aws-sdk');

	return AWS;
}