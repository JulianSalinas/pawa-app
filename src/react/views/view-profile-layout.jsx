import React, { Component } from 'react'
import styles from "./view-metrics-styles";
import withStyles from "@material-ui/core/styles/withStyles";

import Subtitle from '../components/comp-subtitle'
const Icon = require('../../assets/icon-profile-accent.png');

let UserImageStyle = {
    width: '75px',
    height: '75px'
};

let UserInformation = props =>
    <div>
        <img style={UserImageStyle} src={props.user.photoURL} alt={props.user.displayName}/>
        <hr/>
        {props.user.displayName}
        <hr/>
        {props.user.email}
    </div>;

let ProfileDashboard = props =>
    <div>
        <Subtitle text="Perfil" icon={Icon}/>
        <hr/>
        <UserInformation user={ props.user }/>
        <hr/>
    </div>;

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = { user: require('../../json/norealuser-1') };
    }

    render() {
        return <ProfileDashboard user={ this.state.user }/>;
    }

}

export default withStyles(styles)(Dashboard);