let awsIot = require('aws-iot-device-sdk');

//
// Replace the values of '<YourUniqueClientIdentifier>' and '<YourCustomEndpoint>'
// with a unique client identifier and custom host endpoint provided in AWS IoT.
// NOTE: client identifiers must be unique within your AWS account; if a client attempts
// to connect with a client identifier which is already in use, the existing
// connection will be terminated.
//
const config = require('./json/awsconfig');
// console.log('config', config);
let thingShadows = awsIot.thingShadow(config);

//
// This will print a console message when the connection to AWS IoT
// completes.
//
// thingShadows.on('connect', function() {
//     console.log('Connected to AWS IoT');
// });