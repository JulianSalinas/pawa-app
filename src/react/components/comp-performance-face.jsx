import React, { Component } from 'react';
import Typography from "@material-ui/core/Typography/Typography";

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
        <Typography variant={"h5"} color={"textSecondary"} gutterBottom>
            {`${props.value}+ ${getMessage(props.value)}`}
        </Typography>
        <img style={imgStyle} src={getImage(props.value)}/>
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