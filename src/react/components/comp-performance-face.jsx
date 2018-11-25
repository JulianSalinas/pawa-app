import React, { Component } from 'react';
import {primaryColor} from "../dashboard/commons-styles";

const imgStyle = {
    width: "100%",
    height: "100%"
};

function ceilOf(n){
    let value = Math.ceil(n / 10) * 10;
    if (value < 0 ) value = 0;
    return value;
}

function getImage(value){
    let x = ceilOf(value);
    return require(`../../assets/perform-meter/${x.toString()}.png`);
}

function getMessage(value){
    if (value <= 40)
        return "¡Tienes que mejorar!";
    else if (value <= 70)
        return "¡Aún puedes mejorar!";
    else if (value <= 80)
        return "¡Bien!";
    else
        return "¡Excelente!";
}

function getRandom(){
    return Math.floor(Math.random() * 101);
}

const PerformMeterImage = props =>
    <div>
        <img style={imgStyle} src={getImage(props.value)}/>
        <div style={{
            color: "#999",
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: "4vw",
            marginTop: "2vh",
            fontSize: "20pt",
            fontWeight: "500",
            verticalAlign: "middle"
        }}>
            <div>
                <div>
                    {props.value + "%"}
                </div>
                <div>
                    {getMessage(props.value)}
                </div>
            </div>
        </div>
    </div>;

const getIncrement = (value, animatedValue) => {
    return (value === animatedValue) ? 0 : (value > animatedValue) ? 10 : -10;
};

class PerformMeter extends Component {

    constructor(props){
        super(props);
        this.state = { value: props.value, animatedValue: props.value };
    }

    updateValue = () => {
        this.setState({ value: ceilOf(getRandom()) });
    };

    updateAnimation = () => {
        const { value , animatedValue} = this.state;
        const increment = getIncrement(value, animatedValue);
        this.setState({ animatedValue: animatedValue + increment });
    };

    componentDidMount() {
        setInterval(this.updateValue, 3000);
        setInterval(this.updateAnimation, 500);
    };

    render() {
        return <PerformMeterImage value={this.state.animatedValue}/>
    }

}

export default PerformMeter;