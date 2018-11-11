import React, { Component } from 'react'

import Clock from './comp-clock'
import Gauge from './comp-gauge';
import ThemedButton from './comp-button-themed'
import { appClient, DEVICE_EVENT} from '../js/ibmiotf'
import { Card, Col, Row, View, Mask, CardImage, CardBody, CardTitle, CardText, CardFooter, Button, Fa } from 'mdbreact';



const logo = require('../assets/logo-1.png');

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

const Title = props =>
    <h1 style={titleStyle}>
        The Pawa of Pudu
    </h1>;

const Logo = props =>
    <div style={titleLogoStyle}>
        <img height={150} width={150} alt='Pawa Logo' className='img-fluid' src={logo}/>
    </div>;

const Head = props =>
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
        <Meter label={'EJE X'} value={props.position.x}/>
        <Meter label={'EJE Y'} value={props.position.y}/>
    </Row>;

const MetersLayout = props =>
    <div className='container-fluid'>
        <div style={centerStyle}>
            <PositionMeters position={props.position}/>
        </div>
    </div>;

const StartButton = props =>
    <div style={centerStyle}>
        <ThemedButton/>
    </div>;

const BottomClock = props =>
    <div style={centerStyle}>
        <Clock/>
    </div>;

const UserInfo = props =>
    <div style={centerStyle}>
        <text>{ props.user.displayName }</text>
        <text>{ props.user.email }</text>
        <text>{ props.user.photoURL }</text>
    </div>;

const Fragment = props => {

    const { signOut } = props;

    return (
        <div>
            <Head/>
            <hr/>
            <StartButton/>
            <MetersLayout position={props.position}/>
            <BottomClock/>
            <hr/>
            <UserInfo user={props.user}/>
            <button onClick={ signOut }>Log out</button>
        </div>
    );
};

export default class Scratchpad extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            error: props.error,
            signOut: props.signOut,
            deviceId: null, deviceType: null, position:{ x: 15, y: 16}
        };
    }

    deviceEventCallback = (deviceType, deviceId, eventType, format, payload) => {
        console.log('payload', payload.toString());
        this.setState({ position: JSON.parse(payload).position });
    };

    componentDidMount(){
        appClient.on(DEVICE_EVENT, this.deviceEventCallback);
    }

    render(){
        return <Fragment user={ this.state.user }
                         error={ this.state.error }
                         signOut={ this.state.signOut }
                         position={ this.state.position }/>;
    }

}
