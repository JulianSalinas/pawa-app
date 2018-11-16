const ibmiotf = require('ibmiotf');

console.log('Setting up device connection');
export const deviceConfig = require('../json/ibmconfig').device;
export const deviceClient  = new ibmiotf.IotfManagedDevice(deviceConfig);