// import React, { Component } from 'react';
//
// import Footer from './page-footer';
// import PageRoutes from './page-routes';
// import TopNavigation from './page-top';
// import SideNavigation from './page-side';
//
// export default class MainPage extends Component {
//
//     constructor(props){
//         super(props);
//         this.state = { user: require('../json/norealuser') }
//     }
//
//     render() {
//         return (
//             <div className='flexible-content'>
//                 <TopNavigation/>
//                 <SideNavigation/>
//                 <main id='content' className='p-5'><PageRoutes/></main>
//                 <Footer/>
//             </div>
//         );
//     }
//
// }

/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "./page-header";
import Footer from "./page-footer";
import Sidebar from "./page-side";

import routes from "./page-routes";

import dashboardStyle from "./page-main-styles";

import image from "../assets/anime-2.jpg";
import logo from "../assets/logo-1.png";

const switchRoutes = (
    <Switch>
        {routes.map((prop, key) => {
            if (prop.redirect)
                return <Redirect from={prop.path} to={prop.to} key={key} />;
            return <Route path={prop.path} component={prop.component} key={key} />;
        })}
    </Switch>
);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileOpen: false
        };
        this.resizeFunction = this.resizeFunction.bind(this);
    }
    handleDrawerToggle = () => {
        this.setState({ mobileOpen: !this.state.mobileOpen });
    };
    getRoute() {
        return this.props.location.pathname !== "/maps";
    }
    resizeFunction() {
        if (window.innerWidth >= 960) {
            this.setState({ mobileOpen: false });
        }
    }
    componentDidMount() {
        if (navigator.platform.indexOf("Win") > -1) {
            const ps = new PerfectScrollbar(this.refs.mainPanel);
        }
        window.addEventListener("resize", this.resizeFunction);
    }
    componentDidUpdate(e) {
        if (e.history.location.pathname !== e.location.pathname) {
            this.refs.mainPanel.scrollTop = 0;
            if (this.state.mobileOpen) {
                this.setState({ mobileOpen: false });
            }
        }
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.resizeFunction);
    }
    render() {
        const { classes, ...rest } = this.props;
        return (
            <div className={classes.wrapper}>
                <Sidebar/>
                <div className={classes.mainPanel} ref="mainPanel">

                    <Header
                        routes={routes}
                        handleDrawerToggle={this.handleDrawerToggle}
                        {...rest}
                    />

                    {this.getRoute() ? (
                        <div className={classes.content}>
                            <div className={classes.container}>{switchRoutes}</div>
                        </div>
                    ) : (
                        <div className={classes.map}>{switchRoutes}</div>
                    )}

                    {this.getRoute() ? <Footer /> : null}

                </div>

            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(App);

