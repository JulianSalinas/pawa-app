import React from 'react';

import styles from './comp-subtitle-styles'
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography/Typography";

const Icon = props =>
    typeof props.icon === "string" ?
        <img className={props.classes.icon} src={props.icon} alt="img" />:
        <props.icon className={props.classes.icon}/>;

const Subtitle = props =>
    <div>
        <Icon {...props} alt="img" />
        <Typography variant={"h4"} className={props.classes.subtitle}>{props.text}</Typography>
    </div>;

export default withStyles(styles)(Subtitle);
