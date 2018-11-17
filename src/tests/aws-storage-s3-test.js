// The credentials must be in C:Users/<username>/.aws/credentials
// Consult https://docs.aws.amazon.com/es_es/sdk-for-javascript/v2/developer-guide

const AWS = require('aws-sdk');
const uuid = require('uuid');

let bucketName;
const keyName = uuid.v4() + '.txt';
const fileContent = 'Hello World!';

function runTest(){
    const listBucketsPromise = new AWS.S3().listBuckets().promise();
    listBucketsPromise.then(listBucketsSuccess).catch(listBucketsFailure);
}

function listBucketsSuccess(data){
    const buckets = data.Buckets.filter(bucket => bucket.Name.startsWith("test"));
    buckets.length === 0 ? createTestBucket() : createTestFile(buckets[0].Name);
}

function listBucketsFailure(error){
    console.log('Error listing buckets', error.stack);
}

function createTestBucket() {
    bucketName = 'tests-' + uuid.v4();
    const bucketPromise = new AWS.S3().createBucket({Bucket: bucketName}).promise();
    bucketPromise.then(bucketCreationSuccess).catch(bucketCreationError);
}

function bucketCreationSuccess(data) {
    console.log('Location of bucket', data);
    createTestFile(bucketName);
}

function bucketCreationError(error){
    console.error(error, error.stack);
}

function createTestFile(bucketName) {
    let objectParams = {Bucket: bucketName, Key: keyName, Body: fileContent};
    new AWS.S3().putObject(objectParams).promise()
        .then(() => console.log('File created', data))
        .catch(() => console.log('File creation failure', data));
}

runTest();