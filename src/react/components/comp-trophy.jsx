import React from 'react';
import Typography from "@material-ui/core/Typography/Typography";

import styles from "./comp-trophy-styles";
import withStyles from "@material-ui/core/es/styles/withStyles";
import Avatar from "@material-ui/core/Avatar/Avatar";

function getTrophyImage(owned){
    return owned ?
        require('../../assets/app-icons/icon-trophy.png'):
        require('../../assets/app-icons/icon-trophy.png');
}

const TrophyImage = props =>
    <Avatar src={props.icon} className={props.classes.bigAvatar}/>;

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
