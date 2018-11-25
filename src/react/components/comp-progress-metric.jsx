import React, { Component } from "react";
import { Progress } from 'react-sweet-progress';
import { primaryColor } from "../dashboard/commons-styles";

function getBoundedIncrement(value){
    const n = Math.floor(Math.random() * 100);
    const sign = n >= 50 ? -1 : 1;
    const inc = sign * Math.floor(Math.random() * 10);
    return value + inc > 99 ? - inc : inc;
}

const ProgressLabelStyle = {
    marginTop: "10px",
    textAlign: "center",
    display: "block-inline"
};

const ProgressIconStyle = {
    width: "20px",
    height: "20px",
    marginRight: "10px"
};

const ProgressTheme =  {
    color: primaryColor,
    trailColor: '#ededed'
};

const ProgressIcon = props =>
    typeof props.icon === "string" ?
        <img style={ProgressIconStyle} src={props.icon} alt="img"/> :
        <props.icon/>;

const ProgressLabel = props =>
    <div style={ProgressLabelStyle}>
        <ProgressIcon icon={require('../../assets/icon-check.png')}/>
        {props.label}
    </div>;

const ProgressChart = props =>
    <Progress type="circle"
              width={140}
              strokeWidth={12}
              status="default"
              percent={props.percent}
              theme={{default: ProgressTheme}}/>;

const ProgressWrapper = props =>
    <div>
        <ProgressChart {...props}/>
        <ProgressLabel {...props}/>
    </div>;

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
        return <ProgressWrapper percent={this.state.percent} {...this.props}/>;
    }

}

export default ProgressMetric;
