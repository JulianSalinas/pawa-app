import React, { Component } from 'react';
import MainPage from './components/page-main'
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

const hist = createBrowserHistory();
const index = [{ path: "/", component: MainPage }];

const InitialPage = props =>
    <div className='flexible-content'>
        <Router history={hist}>
            <Switch>
                {index.map((prop, key) => {
                    return <Route path={prop.path} component={prop.component} key={key} />;
                })}
            </Switch>
        </Router>
    </div>;

export default class App extends Component {

    constructor(props){
        super(props);
        this.state = { user: require('./json/norealuser') }
    }

    render() {
        return <InitialPage user={ this.state.user }/>;
    }

};