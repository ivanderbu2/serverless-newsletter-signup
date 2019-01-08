# Newsletter Signup API in Serverless

## Post Method

Saves user details into DynamoDB table. The only required value is `email`.

```
curl --data-binary='{"email": "user@example.com"}' https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/users
```
