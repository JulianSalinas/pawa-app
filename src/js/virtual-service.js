const IS_DEBUG = false;
const CONNECT = 'connect';
const DEBUG_LEVEL = null;
const DEVICE_EVENT = 'deviceEvent';

console.log('Importing required modules');
const ibmiotf = require('ibmiotf');

console.log('Setting up connection');
const config = require('../json/ibmiot').service;
const appClient = new ibmiotf.IotfApplication(config);
if (IS_DEBUG) appClient.log.setLevel(DEBUG_LEVEL);

function onConnectCallback(){
    console.log('System connected to Pawa Iot Platform');
    appClient.subscribeToDeviceEvents();
}

appClient.on(CONNECT, onConnectCallback);
console.log('Trying to connect to Pawa Iot Platform');
appClient.connect();

appClient.on(DEVICE_EVENT, function (deviceType, deviceId, eventType, format, payload) {
    console.log('Receiving message from');
    console.log('DeviceId:', deviceId);
    console.log('Payload:', payload.toString());
});