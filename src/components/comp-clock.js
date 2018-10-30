import React from "react";

import { Component } from "react";
import { Button } from "mdbreact"
import { getCurrentDateString, getCurrentTimeString } from "../utils-time"

class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: getCurrentTimeString(),
            date: getCurrentDateString()
        }
    }

    componentDidMount = () => {
        setInterval(() => { this.setState({ 
            date: getCurrentDateString(),
            time: getCurrentTimeString() }); 
        }, 1000);
    }

    render() {
        return (
            <div className="clock-text">
                <h1>{this.state.date} {this.state.time}</h1>
                <Button color="primary">Primary</Button>
                <Button color="unique">Unique</Button>
            </div>
        )
    }
}

export default Clock;