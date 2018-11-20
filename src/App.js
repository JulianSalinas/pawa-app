import React, { Component } from 'react';
import Dashboard from './react/dashboard/dashboard-layout'

const InitialPage = props =>
    <div className='flexible-content'>
        <Dashboard user={ props.user }/>
    </div>;

export default class App extends Component {

    constructor(props){
        super(props);
        this.state = { user: require('./json/norealuser') }
    }

    render() {
        return <InitialPage user={ this.state.user }/>;
    }

}