const JSON = 'json';
const ERROR = 'error';
export const CONNECT = 'connect';
export const DISCONNECT = 'disconnect';
export const DEVICE_EVENT_SEND_POSITION = 'sendPosition';

console.log('Importing required modules');
const ibmiotf = require('ibmiotf');
const getRandomPosition = require('./utils-random').getRandomPosition;

console.log('Setting up connection');
export const deviceConfig = require('../json/ibmiot').device;
export const deviceClient  = new ibmiotf.IotfManagedDevice(deviceConfig);

// deviceClient.on(CONNECT, function(){
//     let deviceId = deviceClient.manage(4000, false, true);
//     console.log('Device connected!');
//     console.log('DevideId: ' + deviceId);
//     setInterval(() => {
//         deviceClient.publish(DEVICE_EVENT_SEND_POSITION, JSON, { position: getRandomPosition() }, 0);
//         console.log('Sending information');
//     }, 1000);
//     //deviceClient.disconnect();
// });
//
// deviceClient.on(ERROR, function (argument) {
//     console.log('An error occur while connecting device');
//     console.log(argument);
// });
