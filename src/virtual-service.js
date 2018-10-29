// ########################################################################
// ########################################################################
// ########################################################################

const IS_DEBUG = false;
const CONNECT = "connect";
const DEBUG_LEVEL = "info";

console.log("Importing required modules");
var ibmiotf = require('ibmiotf');

console.log("Setting up connection");
var config = {
    org : "k9a29n",
    id : "a2g6k39sl6r5",
    "auth-key" : "a-k9a29n-sqxy9znluo",
    "auth-token" : "*R@RS3B*eLDuC_@53-"
} 

var appClient = new ibmiotf.IotfApplication(config);

if (IS_DEBUG){
    appClient.log.setLevel(DEBUG_LEVEL);
}

function onConnect(){
    console.log("System connected to Pawa Iot Platform");
    appClient.subscribeToDeviceEvents();
    bindVirtualDevice(); 
}

appClient.on(CONNECT, onConnect);

console.log("Trying to connect to Pawa Iot Platform");
appClient.connect();

appClient.on("deviceEvent", function (deviceType, deviceId, eventType, format, payload) {
    console.log("Device Event from :: "+deviceType+" : "+deviceId+" of event "+eventType+" with payload : "+payload);
});

// ########################################################################
// ########################################################################
// ########################################################################

function bindVirtualDevice(){

    var deviceConfig = {
        org: "k9a29n",
        "domain": "internetofthings.ibmcloud.com",
        "type": "Gyroscope",
        "id": "virtualDevice1",
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

} 