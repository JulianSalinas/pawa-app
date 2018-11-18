const AWS = require('aws-sdk');
const config = require('../aws/virtual-device-1');

const DEVICE = 'virtual-device-1';
AWS.config.update({region:config.region});
const iotdata = new AWS.IotData({endpoint:config.host});

function runTest() {
    iotdata.getThingShadow({thingName: DEVICE}).promise()
        .then(getThingShadowSuccess)
        .catch(error => console.log('Error', error));
}

function getThingShadowSuccess(data) {
    const state = JSON.parse(data.payload.toString()).state;
    console.log('Data', state);
    setTimeout(runTest, 1000)
}

runTest();