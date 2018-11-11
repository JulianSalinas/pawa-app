import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import dashboardTheme from "./page-dashboard-theme";
import withStyles from "@material-ui/core/styles/withStyles";

import Header from "./page-header";
import Footer from "./page-footer";
import Sidebar from "./page-side";
import Routes from "./page-dashboard-routes";

import logo from "../assets/logo-1.png";
import image from "../assets/anime-2.jpg";

const getRoute = (prop, key) => {
    return prop.redirect ?
        <Redirect from={prop.path} to={prop.to} key={key} /> :
        <Route path={prop.path} component={prop.component} key={key} />;
};

const SwitchRoutes = () =>
    <Switch> { Routes.map((prop, key) => getRoute(prop, key))} </Switch>;

const DashboardSidebar = props =>
    <Sidebar
        routes={Routes}
        logo={logo}
        logoText={"Pawa"}
        image={image}
        handleDrawerToggle={props.handleDrawerToggle}
        open={props.mobileOpen}
        color="blue"/>;

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = { activeRoute: null, mobileOpen: false };
    }

    handleDrawerToggle = () => {
        this.setState({ mobileOpen: !this.state.mobileOpen });
    };

    resizeFunction = () => {
        if (window.innerWidth >= 960)
            this.setState({ mobileOpen: false });
    };

    componentDidMount() {
        if (navigator.platform.indexOf("Win") > -1) {
            new PerfectScrollbar(this.refs.mainPanel);
        }
        window.addEventListener("resize", this.resizeFunction);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resizeFunction);
    }

    render() {

        const { classes, ...rest } = this.props;

        return (
            <div className={classes.wrapper}>
                <DashboardSidebar handleDrawerToggle={this.handleDrawerToggle} mobileOpen={this.state.mobile}/>
                <div className={classes.mainPanel} ref="mainPanel">
                    <Header routes={Routes} handleDrawerToggle={this.handleDrawerToggle} {...rest}/>
                    <div className={classes.content}>
                        <div className={classes.container}><SwitchRoutes/></div>
                    </div>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default withStyles(dashboardTheme)(Dashboard);

