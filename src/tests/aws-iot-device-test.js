const awsIot = require('aws-iot-device-sdk');

const config = require('../aws/virtual-device-1');
const device = awsIot.device(config);

device.on('connect', function() {
    console.log('connect');
    device.subscribe('topic_1');
    device.publish('topic_2', JSON.stringify({ test_data: 1}));
});

device.on('close', function() {
    console.log('disconnected', arguments);
});

device.on('error', function() {
    console.log('error', arguments);
});

device.on('reconnect', function() {
    console.log('reconnecting', arguments);
});

device.on('message', function(topic, payload) {
    console.log('message', topic, payload.toString());
});

device.on('timeout', function(thingName, clientToken) {
    console.log('received timeout');
});