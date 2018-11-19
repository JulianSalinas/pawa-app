import React, { Component } from 'react'

import Clock from '../components/comp-clock'
import Gauge from '../components/comp-gauge';
import DemoButton from "../components/button-two-states";

import { Col, Row } from 'mdbreact';
import { appClient } from '../../js/virtual-service'
import { deviceClient } from '../../js/virtual-device'
import { CONNECT, DISCONNECT, DEVICE_EVENT, DEVICE_EVENT_SEND_POSITION } from '../../js/virtual-constants'
import {getRandomPosition} from "../../js/utils-random";

const logo = require('../../assets/pawa-1.png');

const centerStyle = {
    textAlign:'center',
    marginBottom: '1vw'
};

const titleStyle = {
    color:'#777',
    textAlign:'center',
    fontFamily:'Roboto',
    fontWeight:'300'
};

const titleLogoStyle = {
    textAlign:'center',
    padding:'1%'
};

const headStyle = {
    textAlign:'center',
    margin:'1vw'
};

const Title = () =>
    <h1 style={titleStyle}>
        The Pawa of Pudu
    </h1>;

const Logo = () =>
    <div style={titleLogoStyle}>
        <img height={150} width={150} alt='Pawa Logo' className='img-fluid' src={logo}/>
    </div>;

const Head = () =>
    <div style={headStyle}>
        <Logo/>
        <Title/>
    </div>;

const Meter = props =>
    <Col md='4' className='mb-3'>
        <div style={{ backgroundColor:props.color }}>
            <Gauge label={props.label} value={props.value}/>
        </div>
    </Col>;

const PositionMeters = props =>
    <Row>
        <Col md='2'/>
        <Meter label={'Ángulo X'} value={props.position.x}/>
        <Meter label={'Ángulo Y'} value={props.position.y}/>
    </Row>;

const MetersLayout = props =>
    <div className='container-fluid'>
        <div style={centerStyle}>
            <PositionMeters position={props.position}/>
        </div>
    </div>;

const StartButton = props =>
    <div style={centerStyle}>
        <DemoButton onClick={ () => props.isConnected ?
            deviceClient.disconnect() :
            deviceClient.connect() }/>
    </div>;

const BottomClock = () =>
    <div style={centerStyle}>
        <Clock/>
    </div>;

const Fragment = props =>
    <div>
        <Head/>
        <hr/>
        <StartButton isConnected={props.isConnected}/>
        <MetersLayout position={props.position}/>
        <BottomClock/>
    </div>;

const getIncrement = (x1, x2) => {
    return (x1 === x2) ? 0 : (x1 > x2) ? 1 : -1;
};



// deviceClient.on(ERROR, function (argument) {
//     console.log('An error occur while connecting device');
//     console.log(argument);
// });

appClient.connect();

export default class Scratchpad extends Component {

    state = {
        firstTime: true,
        deviceId: null,
        deviceType: null,
        isConnected: false,
        position:{ x: 15, y: 16 },
        animatedPosition: { x: 15, y: 16 },
        user: require('../../json/norealuser')
    };

    deviceEventCallback = (deviceType, deviceId, eventType, format, payload) => {
        console.log('payload', payload.toString());
        this.setState({
            deviceId: deviceId,
            deviceType: deviceType,
            position: JSON.parse(payload).position
        });
    };

    deviceConnectedCallback = () => {
        let deviceId = deviceClient.manage(4000, false, true);
        console.log('Device connected!');
        console.log('DevideId: ' + deviceId);
        this.setState({ isConnected: true });
        this.publicationInterval = setInterval(this.publishInformationFromVirtualDevice, 3000);
    };

    deviceDisconnectedCallback = () => {
        console.log('Device disconnected!');
        this.setState({ isConnected: false });
        clearInterval(this.publicationInterval)
    };

    deviceReconnectedCallback = () => {
        console.log('Device reconnected!');
    };

    publishInformationFromVirtualDevice = () => {
        deviceClient.publish(DEVICE_EVENT_SEND_POSITION, JSON, { position: getRandomPosition() }, 0);
        console.log('Sending information');
    };

    updateAnimatedPosition = () => {
        const realX = this.state.position.x;
        const realY = this.state.position.y;
        const animatedX = this.state.animatedPosition.x;
        const animatedY = this.state.animatedPosition.y;
        this.setState({ animatedPosition: {
            x:animatedX + getIncrement(realX, animatedX),
            y:animatedY + getIncrement(realY, animatedY)
        }})
    };

    componentDidMount(){
        appClient.on(DEVICE_EVENT, this.deviceEventCallback);
        deviceClient.on(CONNECT, this.deviceConnectedCallback);
        deviceClient.on(DISCONNECT, this.deviceDisconnectedCallback);
        deviceClient.on('reconnect', this.deviceReconnectedCallback);
        this.setState({ firstTime: false});
        this.animationInterval = setInterval(this.updateAnimatedPosition, 150);
    }

    componentWillUnmount() {
        // appClient.disconnect();
        if (this.state.isConnected) deviceClient.disconnect();
        clearInterval(this.animationInterval);
        clearInterval(this.publicationInterval);
    }

    render(){
        return <Fragment user={ this.state.user }
                         error={ this.state.error }
                         signOut={ this.state.signOut }
                         isConnected={ this.state.isConnected }
                         position={ this.state.animatedPosition }/>;
    }

}

