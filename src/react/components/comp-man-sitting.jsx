import React, { Component } from 'react';

const imgStyle = {
    width: "326px",
    height: "400px",
    padding: "30px",
    backgroundColor: "#dddddd"
};

function ceilOf(n){
    let value = Math.ceil(n / 10) * 10;
    if (value < 0 ) value = 0;
    return value;
}

function getImage(value){
    // let x = ceilOf(value);
    let x = 100;
    return require(`../../assets/man-sitting/${x.toString()}.svg`);
}

function getRandom(){
    return Math.floor(Math.random() * 101);
}

const ManSittingImage = props =>
    <div>
        <img style={imgStyle} src={getImage(props.value)}/>
    </div>;

const getIncrement = (value, animatedValue) => {
    return (value === animatedValue) ? 0 : (value > animatedValue) ? 10 : -10;
};

class ManSitting extends Component {

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
        // setInterval(this.updateValue, 3000);
        // setInterval(this.updateAnimation, 500);
    };

    render() {
        return <ManSittingImage value={this.state.animatedValue}/>
    }

}

export default ManSitting;