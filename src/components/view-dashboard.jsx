import React, { Component } from 'react'

let UserImageStyle = {
    width: '50px',
    height: '50px'
};

let UserInformation = props =>
    <div>
        <text> { props.user.displayName } </text>
        <text> { props.user.email } </text>
        <img style={UserImageStyle} src={ props.user.photoURL } />
    </div>;

let DefaultDashBoard = props =>
    <div>
        <div>Hola soy el dashboard</div>
        <hr/>
        <UserInformation user={ props.user }/>
    </div>;

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = { user: require('../json/norealuser') };
    }

    render() {
        return <DefaultDashBoard user={ this.state.user }/>;
    }

}