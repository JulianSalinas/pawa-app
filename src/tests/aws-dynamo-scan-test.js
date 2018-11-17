// The credentials must be in C:Users/<username>/.aws/credentials
// Consult https://docs.aws.amazon.com/es_es/sdk-for-javascript/v2/developer-guide

const AWS = require('aws-sdk');
AWS.config.update({ region: "us-west-2" });

const docClient = new AWS.DynamoDB.DocumentClient();
const params = { TableName : "Tests" };

function runTest(){
    docClient.scan(params).promise()
        .then(data => console.log('Retrieved data', data.Items))
        .catch(error => console.log('Error retriving data', error.stack));
}

runTest();
