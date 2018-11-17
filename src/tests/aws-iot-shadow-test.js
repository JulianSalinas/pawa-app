const awsIot = require('aws-iot-device-sdk');

const config = require('../../aws/virtual-device-1');
const shadow = awsIot.thingShadow(config);

shadow.on('connect', function() {
    console.log('connect');
    shadow.subscribe('topic_1');
    shadow.publish('topic_2', JSON.stringify({ test_data: 1}));
});

shadow.on('close', function() {
    console.log('disconnected', arguments);
});

shadow.on('error', function() {
    console.log('error', arguments);
});

shadow.on('reconnect', function() {
    console.log('reconnecting', arguments);
});

shadow.on('message', function(topic, payload) {
    console.log('message', topic, payload.toString());
});

shadow.on('timeout', function(thingName, clientToken) {
    console.log('received timeout');
});