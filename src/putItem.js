var AWS = require('./awsFactory').getAWS();

var dynamoDb = new AWS.DynamoDB.DocumentClient();
//var docClient = new dynamoDb();

module.exports = function (item, tableName, cb) {
	var params = {
		"TableName": tableName,
		"Item": item
	};

	dynamoDb.put(params, cb);
};