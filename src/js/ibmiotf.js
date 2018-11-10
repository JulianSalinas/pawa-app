const IS_DEBUG = false;
const CONNECT = "connect";
const DEBUG_LEVEL = null;
export const DEVICE_EVENT = "deviceEvent";

console.log("Importing required modules");
const ibmiotf = require('ibmiotf');

console.log("Setting up connection");
const config = {
    org : "k9a29n",
    id : "a2g6k39sl6r5",
    "auth-key" : "a-k9a29n-sqxy9znluo",
    "auth-token" : "*R@RS3B*eLDuC_@53-"
};

export const appClient = new ibmiotf.IotfApplication(config);

if (IS_DEBUG){
    appClient.log.setLevel(DEBUG_LEVEL);
}

function onConnectCallback(){
    console.log("System connected to Pawa Iot Platform");
    appClient.subscribeToDeviceEvents();
}

appClient.on(CONNECT, onConnectCallback);

console.log("Trying to connect to Pawa Iot Platform");
appClient.connect();