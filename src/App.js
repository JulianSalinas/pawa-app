
import React, { Component } from 'react';
import { auth, database } from "./js/firebase"
import Login from "./components/single-login"
import Dashboard from "./components/single-scratchpad"

const InitialPage = props =>
    <div className="flexible-content">
        { props.user ? <Dashboard user={ props.user } signOut={ props.signOut }/> : <Login/> }
    </div>;

export default class App extends Component {

    constructor(props){
        super(props);
        this.state = { user: null }
    }

    signOut = () => auth.signOut();

    signIn = user => {
        database.ref("pawa").child("users").child(user.uid).set(user);
        this.setState({ user: user });
    };

    componentDidMount() {
        auth.onAuthStateChanged(this.signIn);
    }

    render() {
        return <InitialPage user={ this.state.user } signOut={ this.signOut }/>;
    }

};