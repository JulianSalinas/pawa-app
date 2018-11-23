import React, { Component } from 'react';

const imgStyle = {
    width: "50%",
    height: "50%"
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

function getRandom(){
    return Math.floor(Math.random() * 101);
}

const PerformMeterImage = props =>
    <div>
        <img style={imgStyle} src={getImage(props.value)}/>
    </div>;

const getIncrement = (x1, x2) => {
    return (x1 === x2) ? 0 : (x1 > x2) ? 10 : -10;
};

class PerformMeter extends Component {

    constructor(props){
        super(props);
        this.state = {
            value: props.value,
            animatedValue: 100
        };
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
        setInterval(this.updateValue, 1000);
        setInterval(this.updateAnimation, 200);
    };

    render() {
        return <PerformMeterImage value={this.state.animatedValue}/>
    }

}

export default PerformMeter;