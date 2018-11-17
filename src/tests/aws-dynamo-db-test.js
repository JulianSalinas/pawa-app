// The credentials must be in C:Users/<username>/.aws/credentials
// Consult https://docs.aws.amazon.com/es_es/sdk-for-javascript/v2/developer-guide

const AWS = require('aws-sdk');
AWS.config.update({ region: "us-west-2" });

const dynamodb = new AWS.DynamoDB();
const params = require('../json/norealtable');

function runTest(){
    const listTablesPromise = dynamodb.listTables().promise();
    listTablesPromise.then(listTablesSuccess).catch(listTablesFailure);
}

function listTablesSuccess(data){
    console.log('Table list', data.TableNames);
    data.TableNames.includes(params.TableName) ?
        console.log('Table ' + params.TableName + ' already exists') : createTestTable()
}

function listTablesFailure(error){
    console.log('Error listing tables', error.stack);
}

function createTestTable() {
    dynamodb.createTable(params).promise()
        .then(console.log('Table created', data))
        .catch(console.log('Error creating table', error.stack));
}

runTest();
