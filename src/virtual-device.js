const JSON = "json";
const ERROR = "error";
const CONNECT = "connect";
const DEVICE_EVENT_SEND_POSITION = "sendPosition";

console.log("Importing required modules");
const ibmiotf = require('ibmiotf');
import { getRandomPosition } from "./utils-random"

console.log("Setting up connection");
const deviceConfig = {
    org: "k9a29n",
    "domain": "internetofthings.ibmcloud.com",
    "type": "Gyroscope",
    "id": "virtualDevice1",
    "auth-method": "token",
    "auth-token": "Um7R8HMXOaw8L-s2d4",
};

const deviceClient = new ibmiotf.IotfManagedDevice(deviceConfig);

deviceClient.on(CONNECT, function(){
    let deviceId = deviceClient.manage(4000, false, true);
    console.log("DevideId" + deviceId);
    deviceClient.publish(DEVICE_EVENT_SEND_POSITION, JSON, getRandomPosition(), 0);
    //deviceClient.disconnect();
});

deviceClient.on(ERROR, function (argument) {
    console.log("An error occur");
    console.log(argument);
});

deviceClient.connect();
