import './single-scratchpad.css';
import React, { Component } from 'react'
import ThemedButton from "./comp-themed-button"

import { appClient, DEVICE_EVENT} from "../ibmiotf"
import { Card, Col, Row, View, Mask, CardImage, CardBody, CardTitle, CardText, CardFooter, Button, Fa } from 'mdbreact';
import src1 from '../assets/nature-1.jpg';

const logo = require("../assets/logo-1.png");

const centerStyle = {
    textAlign:"center",
    marginBottom: "1vw"
};

const titleStyle = {
    color:"#777",
    textAlign:"center",
    fontFamily:"Roboto",
    fontWeight:"300"
};

const titleLogoStyle = {
    textAlign:"center",
    padding:"1%"
};

const headStyle = {
    textAlign:"center",
    margin:"1vw"
};

const Title = props =>
    <h1 style={titleStyle}>
        The Pawa of Pudu
    </h1>;

const Logo = props =>
    <div style={titleLogoStyle}>
        <img height={150} width={150} alt="Pawa Logo" className="img-fluid" src={logo}/>
    </div>;

const Head = props =>
    <div style={headStyle}>
        <Logo/>
        <Title/>
    </div>;

const Meter = props =>
    <Col style={centerStyle}>
        <div style={centerStyle}>
            <h1>{props.value}</h1>
        </div>
    </Col>;

const Fragment = props =>
    <div>
        <Head/>
        <hr/>
        <div style={centerStyle}>
            <ThemedButton/>
        </div>

        <div style={{backgroundColor:"#c5fffc"}}>
            {props.value}
        </div>

        <div style={{backgroundColor:"#ff5f95"}}>
            {props.value}
        </div>

        <div className="container-fluid">
            <Row className="mb-4">
                <Col xl="3" md="6" className="mb-3">
                    <Card color="primary-color" className="classic-admin-card">
                        <CardBody>
                            <div className="pull-right">
                                <Fa icon="money"/>
                            </div>
                            <p className="white-text">SALES</p>
                            <h4><strong>$2000</strong></h4>
                        </CardBody>
                        <div className="progress">
                            <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg grey darken-3" role="progressbar" style={{width: "25%"}}></div>
                        </div>
                        <CardBody>
                            <p>Better than last week (25%)</p>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl="3" md="6" className="mb-3">
                    <Card color="warning-color" className="classic-admin-card">
                        <CardBody>
                            <div className="pull-right">
                                <Fa icon="line-chart"/>
                            </div>
                            <p className="white-text">SUBSCRIPTIONS</p>
                            <h4><strong>200</strong></h4>
                        </CardBody>
                        <div className="progress">
                            <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg grey darken-3" role="progressbar" style={{width: "25%"}}></div>
                        </div>
                        <CardBody>
                            <p>Worse than last week (25%)</p>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl="3" md="6" className="mb-3">
                    <Card color="primary-color" className="classic-admin-card">
                        <CardBody>
                            <div className="pull-right">
                                <Fa icon="pie-chart"/>
                            </div>
                            <p className="white-text">TRAFFIC</p>
                            <h4><strong>20000</strong></h4>
                        </CardBody>
                        <div className="progress">
                            <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="75" className="progress-bar bg grey darken-3" role="progressbar" style={{width: "75%"}}></div>
                        </div>
                        <CardBody>
                            <p>Better than last week (75%)</p>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl="3" md="6" className="mb-3">
                    <Card color="red accent-2" className="classic-admin-card">
                        <CardBody>
                            <div className="pull-right">
                                <Fa icon="bar-chart"/>
                            </div>
                            <p className="white-text">ORGANIC TRAFFIC</p>
                            <h4><strong>2000</strong></h4>
                        </CardBody>
                        <div className="progress">
                            <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg grey darken-3" role="progressbar" style={{width: "25%"}}></div>
                        </div>
                        <CardBody>
                            <p>Better than last week (75%)</p>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>

    </div>;


class LaClase extends Component {

    constructor(props) {
        super(props);
        this.state = {
            deviceId: null,
            deviceType: null,
            position:{ x: 15, y: 16}
        };
    }

    deviceEventCallback = (deviceType, deviceId, eventType, format, payload) => {
        console.log("payload", payload.toString());
        this.setState({ position: JSON.parse(payload).position });
    };

    componentDidMount(){
        appClient.on(DEVICE_EVENT, this.deviceEventCallback);
    }

    render(){
        return <Fragment value={this.state.position.x}/>;
    }

}

export default LaClase;

