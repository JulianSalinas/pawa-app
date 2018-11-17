# requires: Nodejs/NPM, PowerShell
# Permission to run PS scripts (for this session only):
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process

# exit if cmdlet gives error
$ErrorActionPreference = "Stop"

# Check to see if root CA file exists, download if not
If (!(Test-Path ".\root-CA.crt")) {
    "`nDownloading AWS IoT Root CA certificate from AWS..."
    Invoke-WebRequest -Uri https://www.amazontrust.com/repository/AmazonRootCA1.pem -OutFile root-CA.crt
}

# install AWS Device SDK for NodeJS if not already installed
If (!(Test-Path ".\node_modules")) {
    "`nInstalling AWS SDK..."
    npm install aws-iot-device-sdk
}

"`nRunning pub/sub sample application..."
node .\node_modules\aws-iot-device-sdk\examples\device-example.js --host-name a1szaqlx86giyq-ats.iot.us-west-2.amazonaws.com 

--private-key .\virtual-device-1.private.key 
--client-certificate .\virtual-device-1.cert.pem 
--ca-certificate .\root-CA.crt 
--client-id=sdk-nodejs-f5441482-cd92-4128-94a8-d94d8ba53d41
