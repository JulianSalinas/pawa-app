import React from 'react';
import Typography from "@material-ui/core/Typography/Typography";

import styles from "./comp-trophy-styles";
import withStyles from "@material-ui/core/es/styles/withStyles";

function getTrophyImage(owned){
    return owned ?
        require('../../assets/icon-trophy.png'):
        require('../../assets/icon-trophy.png');
}

const TrophyImage = ({ classes, ...props }) =>
    typeof props.icon === "string" ?
        <img className={classes.icon} src={props.icon} alt="img" />:
        <props.icon className={classes.icon}/>;

const TrophyText = props =>
    <div className={props.classes.text}>
        <Typography align="center" variant="body1">
        {props.name}
        </Typography>
    </div>;

const TrophyWrapper = props =>
    <div className={props.classes.trophy}>
        <TrophyImage icon={getTrophyImage(props.owned)} {...props} alt="img" />
        <TrophyText {...props}/>
    </div>;

const Trophy = props => {
    let owned = props.owned || true;
    return <TrophyWrapper owned={owned} {...props}/>
};

export default withStyles(styles)(Trophy);
