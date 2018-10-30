import './app.css';
import React from 'react';
import PresentationPage from "./components/single-scratchpad"

var Client = require('ibmiotf').IotfApplication;

var iotAppConfig = {
    "org" : "k9a29n",
    "id" : "a2g6k39sl6r5",
    "auth-method" : "apikey",
    "auth-key" : "a-k9a29n-sqxy9znluo",
    "auth-token" : "*R@RS3B*eLDuC_@53-"
} 

var appClient = new Client(iotAppConfig);

appClient.connect();
console.log("Successfully connected to our IoT service!");

// subscribe to input events 
appClient.on("connect", function () {
    console.log("subscribe to input events");
    appClient.subscribeToDeviceEvents("virtual-gyroscope-1");
});

appClient.on("deviceEvent", function(deviceType, deviceId, eventType, format, payload){
    console.log("deviceType", deviceType);
})

export default () => 

    <div className="flexible-content">
        <h1>
            Nu ma
        </h1>
        <PresentationPage/>
    </div>
