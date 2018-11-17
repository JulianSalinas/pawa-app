// The credentials must be in C:Users/<username>/.aws/credentials
// Consult https://docs.aws.amazon.com/es_es/sdk-for-javascript/v2/developer-guide

const AWS = require('aws-sdk');
AWS.config.update({ region: "us-west-2" });

const docClient = new AWS.DynamoDB.DocumentClient();
const params = {TableName: 'Tests', Item: {"year": 2012, "title": "Beto Gónzales"}};

function runTest(){
    docClient.put(params).promise()
        .then(() => console.log('Item inserted'))
        .catch(error => console.log('Error inserting item', error.stack));
}

runTest();
