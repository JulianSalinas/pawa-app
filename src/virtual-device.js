const IS_DEBUG = false;
const CONNECT = "connect";
const DEBUG_LEVEL = "info";

console.log("Importing required modules");
var ibmiotf = require('ibmiotf');

console.log("Setting up device configuration");
var deviceConfig = {
    org: "k9a29n",
    type: "Gyroscope",
    id: "virtualDevice1",
    "auth-method": "token",
    "auth-token": "Um7R8HMXOaw8L-s2d4",
}

var deviceClient = new ibmiotf.IotfManagedDevice(deviceConfig);
deviceClient.on('connect', function(){
    var rc = deviceClient.manage(4000, false, true);
    console.log("rc =" + rc);
    deviceClient.publish('myevt', 'json', '{"hello":"world"}', 0);
    deviceClient.updateLocation(77.598838,12.96829);
    //deviceClient.disconnect();
});

deviceClient.on('error', function (argument) {
    console.log("It's a fucking error");
});

deviceClient.connect();