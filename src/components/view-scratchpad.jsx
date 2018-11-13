import React, { Component } from 'react'

import Clock from './comp-clock'
import Gauge from './comp-gauge';
import ThemedButton from './comp-button-themed'
import { appClient, DEVICE_EVENT} from '../js/ibmiotf'
import { Col, Row } from 'mdbreact';

const logo = require('../assets/pawa-1.png');

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

const StartButton = () =>
    <div style={centerStyle}>
        <ThemedButton/>
    </div>;

const BottomClock = () =>
    <div style={centerStyle}>
        <Clock/>
    </div>;

const Fragment = props =>
    <div>
        <Head/>
        <hr/>
        <StartButton/>
        <MetersLayout position={props.position}/>
        <BottomClock/>
    </div>;

const getIncrement = (x1, x2) => {
    return (x1 === x2) ? 0 : (x1 > x2) ? 1 : -1;
};

export default class Scratchpad extends Component {

    state = {
        user: require('../json/norealuser'),
        deviceId: null,
        deviceType: null,
        position:{ x: 15, y: 16 },
        animatedPosition: { x: 15, y: 16 }
    };

    deviceEventCallback = (deviceType, deviceId, eventType, format, payload) => {
        console.log('payload', payload.toString());
        this.setState({ position: JSON.parse(payload).position });
    };

    update = () => {
        this.setState({
            animatedPosition: {
                x:this.state.animatedPosition.x + getIncrement(this.state.position.x, this.state.animatedPosition.x),
                y:this.state.animatedPosition.y + getIncrement(this.state.position.y, this.state.animatedPosition.y),
            }
        })
    };

    componentDidMount(){
        appClient.on(DEVICE_EVENT, this.deviceEventCallback);
        setInterval(this.update, 150);
    }

    render(){
        return <Fragment user={ this.state.user }
                         error={ this.state.error }
                         signOut={ this.state.signOut }
                         position={ this.state.animatedPosition }/>;
    }

}

