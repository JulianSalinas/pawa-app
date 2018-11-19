import React, { Component } from 'react'

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
        <div>Mi perfil</div>
        <hr/>
        <UserInformation user={ props.user }/>
        <hr/>
    </div>;

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = { user: require('../../json/norealuser') };
    }

    render() {
        return <ProfileDashboard user={ this.state.user }/>;
    }

}