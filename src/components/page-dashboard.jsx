import React, { Component } from "react";

import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import dashboardTheme from "./page-dashboard-theme";
import withStyles from "@material-ui/core/styles/withStyles";

import Sidebar from "./page-side";
import Header from "./page-header";
import Footer from "./page-footer";

import logo from "../assets/logo-1.png";
import image from "../assets/material-1.png";
import routes from './page-dashboard-routes'
import { Redirect, Route, Switch } from "react-router-dom";

const DashboardRoutes = () =>
    <Switch> {routes.map((prop, key) => prop.redirect ?
        <Redirect from={prop.path} to={prop.to} key={key}/> :
        <Route path={prop.path} component={prop.component} key={key}/>)}
    </Switch>;

const DashboardSidebar = props =>
    <Sidebar
        routes={routes}
        logo={props.logo}
        image={props.sideImage}
        company={props.company}
        open={props.mobileOpen}
        color={props.accentColor}
        handleToggle={props.handleToggle}
        {...props} />;

const DashboardHeader = props =>
    <Header
        routes={routes}
        handleToggle={props.handleToggle} {...props} />;

const DashboardFooter = props =>
    <Footer
        year={props.year}
        company={props.company}/>;

const DashboardContent = props =>
    <div className={props.content}>
        <div className={props.container}>
            <DashboardRoutes/>
        </div>
    </div>;

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            year: 2018,
            logo: logo,
            company: "Pawa",
            sideImage: image,
            mobileOpen: false,
            activeRoute: null,
            accentColor: "purple",
            currentUser: require('../json/norealuser'),
        };
    }

    handleToggle = () => {
        this.setState({ mobileOpen: !this.state.mobileOpen });
    };

    resizeFunction = () => {
        if (window.innerWidth >= 960)
            this.setState({ mobileOpen: false });
    };

    componentDidMount() {
        if (navigator.platform.indexOf("Win") > -1)
            new PerfectScrollbar(this.refs.mainPanel);
        window.addEventListener("resize", this.resizeFunction);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resizeFunction);
    }

    render() {
        const { classes, ...rest } = this.props;
        return (
            <div className={classes.wrapper}>
                <DashboardSidebar
                    logo={this.state.logo}
                    image={this.state.sideImage}
                    company={this.state.company}
                    open={this.state.mobileOpen}
                    color={this.state.accentColor}
                    handleToggle={this.handleToggle}
                    {...rest} />
                <div className={classes.mainPanel} ref="mainPanel">
                    <DashboardHeader handleToggle={this.handleToggle} {...rest} />
                    <DashboardContent container={classes.container} content={classes.content}/>
                    <DashboardFooter year={this.state.year} company={this.state.company}/>
                </div>
            </div>
        );
    }
}

export default withStyles(dashboardTheme)(Dashboard);

