import { CONNECT, DISCONNECT } from './virtual-constants';
import { IS_DEBUG, DEBUG_LEVEL } from './virtual-constants';

console.log('Importing required modules');
const ibmiotf = require('ibmiotf');

console.log('Setting up connection');
const config = require('../json/ibmconfig').service;
export const appClient = new ibmiotf.IotfApplication(config);
if (IS_DEBUG) appClient.log.setLevel(DEBUG_LEVEL);

function onConnectCallback(){
    appClient.subscribeToDeviceEvents();
    console.log('System connected to Pawa Iot Platform');
}

function onDisconnectCallback() {
    appClient.unsubscribeToDeviceEvents();
    console.log('System disconnected from Pawa Iot Platform');
}

appClient.on(CONNECT, onConnectCallback);
appClient.on(DISCONNECT, onDisconnectCallback);