const { getRandomPosition } = require('../js/utils-random');

const TOPIC = 'test_topic';
const AWS = require('aws-sdk');
const config = require('../aws/virtual-device-1');
AWS.config.update({region:config.region});

const iotdata = new AWS.IotData({endpoint:config.host});

function runTest() {
    iotdata.publish(genRandomParams()).promise()
        .then(data => console.log('Response', data))
        .catch(error => console.log('Error', error));
}

function genRandomData() {
    return { position: getRandomPosition() };
}

function genRandomParams() {
    return { topic: TOPIC, payload: JSON.stringify(genRandomData()) }
}

runTest();