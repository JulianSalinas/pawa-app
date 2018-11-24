import React, { Component } from "react";
import { Progress } from 'react-sweet-progress';

function getBoundedIncrement(value){
    const n = Math.floor(Math.random() * 100);
    const sign = n >= 50 ? -1 : 1;
    const inc = sign * Math.floor(Math.random() * 10);
    return value + inc > 99 ? - inc : inc;
}

const ProgressWrapper = props =>
    <Progress type="circle"
              width={140}
              percent={props.percent}
              strokeWidth={12}/>;

class ProgressMetric extends Component {

    state = { percent: 98 };

    updateValue = () => {
        this.setState({
            percent: this.state.percent + getBoundedIncrement(this.state.percent)
        });
    };

    componentDidMount() {
        setInterval(this.updateValue, 1000);
    };

    render() {
        return <ProgressWrapper percent={this.state.percent}/>;
    }

}

export default ProgressMetric;
