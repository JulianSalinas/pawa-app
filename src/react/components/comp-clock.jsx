import React, { Component } from 'react';
import { getCurrentDateString, getCurrentTimeString } from '../../js/utils-time'

const clockStyle = {
    color:'#777',
    textAlign:'center',
    fontFamily:'Roboto',
    fontSize: 24,
    fontWeight:'300'
};

const ClockFragment = props =>
    <div>
        <h1 style={clockStyle}>
            {props.date} {props.time}
        </h1>
    </div>;

export default class Clock extends Component {

    state = {
            time: getCurrentTimeString(),
            date: getCurrentDateString()
    };

    updateTime = () => {
        this.setState({
            date: getCurrentDateString(),
            time: getCurrentTimeString()
        });
    };

    componentDidMount() {
        setInterval(this.updateTime, 1000);
    };

    render() {
        return <ClockFragment date={this.state.date} time={this.state.time}/>
    }

}