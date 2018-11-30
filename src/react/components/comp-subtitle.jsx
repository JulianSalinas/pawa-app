import React from 'react';

const icon = {
    width: "45px",
    height: "45px",
    marginRight: "25px",
    color: "#66b5bc",
    display: "inline-block",
    verticalAlign: "middle"
};

const subtitle =  {
    fontSize: "28pt",
    fontWeight: "300",
    color: "#66b5bc",
    display: "inline-block",
    verticalAlign: "middle"
};

const Icon = props =>
    typeof props.icon === "string" ?
        <img style={icon} src={props.icon} alt="img" />:
        <props.icon style={icon}/>;

const Subtitle = props =>
    <div>
        <Icon {...props} alt="img" />
        <div style={subtitle}>{props.text}</div>
    </div>;

export default Subtitle;
