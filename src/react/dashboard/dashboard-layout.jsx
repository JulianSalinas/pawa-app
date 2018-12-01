import React, { Component } from "react";

import Sidebar from "./page-side-layout";
import Header from "./page-header-layout";
import Footer from "./page-footer-layout";
import PerfectScrollbar from "perfect-scrollbar";

import routes from './dashboard-routes'
import { Redirect, Route, Switch } from "react-router-dom";

import theme from "./dashboard-theme"
import styles from "./dashboard-styles";
import withStyles from "@material-ui/core/styles/withStyles";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";

const DashboardSwitch = () => routes.map((prop, key) => prop.redirect ?
    <Redirect from={prop.path} to={prop.to} key={key}/> :
    <Route path={prop.path} component={prop.component} key={key}/>
);

const DashboardRoutes = () =>
    <Switch>
        <DashboardSwitch/>
    </Switch>;

const DashboardSidebar = props =>
    <Sidebar routes={routes} {...props} />;

const DashboardHeader = props =>
    <div>
        <Header routes={routes} {...props} />
    </div>;

const DashboardFooter = props =>
    <Footer {...props}/>;

const DashboardBody = props =>
    <div className={props.classes.body}>
        <DashboardRoutes/>
    </div>;

const DashboardLayout = props =>
    <div className={props.classes.layout} >
        <DashboardSidebar {...props} />
        {props.children}
    </div>;

const DashboardWrapper = props =>
    <MuiThemeProvider theme={theme}>
        <DashboardLayout {...props}/>
    </MuiThemeProvider>;

class Dashboard extends Component {

    state = {
        open: false,
        currentUser: require('../../json/norealuser'),
    };

    handleToggle = () => {
        this.setState({ open: !this.state.open });
    };

    resizeFunction = () => {
        if (window.innerWidth >= 960)
            this.setState({ open: false });
    };

    componentDidMount() {
        if (navigator.platform.indexOf("Win") > -1)
            new PerfectScrollbar(this.refs.panel);
        window.addEventListener("resize", this.resizeFunction);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resizeFunction);
    }

    bindPanel() {
        return (
            <div className={this.props.classes.panel} ref="panel">
                {/*<DashboardHeader {...this.props} handleToggle={this.handleToggle} />*/}
                <DashboardBody {...this.props}/>
                {/*<DashboardFooter {...this.props}/>*/}
            </div>
        );
    }

    render() {
        return (
            <DashboardWrapper {...this.props} {...this.state} handleToggle={this.handleToggle}>
                {this.bindPanel()}
            </DashboardWrapper>
        );
    }
}

export default withStyles(styles)(Dashboard);

