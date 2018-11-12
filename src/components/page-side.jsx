import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
// core components
import HeaderLinks from "./page-top";

import sidebarStyle from "./page-side-styles";


class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeRoute: props.activeRoute || "/dashboard"
        };
    }

    changeRoute = path => {
        this.setState({ activeRoute: path });
        return path;
    };

    componentWillReceiveProps(nextProps, nextContext) {
        const updateActiveItem = nextProps.activeRoute && nextProps.activeRoute !== this.state.activeRoute;
        if (updateActiveItem) {
            this.setState({ activeRoute: nextProps.activeRoute })
        }
        console.log("activeRoute", this.state.activeRoute);
    }

    render() {

        const {classes, color, logo, image, company, routes} = this.props;

        let links = (
            <List className={classes.list}> {routes.map((prop, key) => {

                if (prop.redirect)
                    return null;

                let calibrate = " ";
                let listItemClasses;

                if (prop.path === "/calibrate") {
                    calibrate = classes.activePro + " ";
                    listItemClasses = classNames({[" " + classes[color]]: true });
                }

                else {
                    listItemClasses = classNames({
                        [" " + classes[color]]: prop.path === this.state.activeRoute
                    });
                }

                const whiteFontClasses = classNames({
                    [" " + classes.whiteFont]: prop.path === this.state.activeRoute
                });

                return (
                    <NavLink to={prop.path} className={calibrate + classes.item} activeClassName="active" key={key}>
                        <ListItem className={classes.itemLink + listItemClasses}>
                            <ListItemIcon className={classes.itemIcon + whiteFontClasses}>
                                <prop.icon/>
                            </ListItemIcon>
                            <ListItemText
                                primary={prop.sidebarName}
                                className={classes.itemText + whiteFontClasses}
                                disableTypography={true}/>
                        </ListItem>
                    </NavLink>
                );

            })}
            </List>
        );


        let brand = (
            <div className={classes.logo}>
                <a href="https://github.com/JulianSalinas/pawa-app" className={classes.logoLink}>
                    <div className={classes.logoImage}>
                        <img src={logo} alt="logo" className={classes.img}/>
                    </div>
                    {company}
                </a>
            </div>
        );

        return (
            <div>
                <Hidden mdUp implementation="css">
                    <Drawer
                        variant="temporary"
                        anchor="right"
                        open={this.props.open}
                        classes={{
                            paper: classes.drawerPaper
                        }}
                        onClose={this.props.handleToggle}
                        ModalProps={{
                            keepMounted: true // Better open performance on mobile.
                        }}
                    >
                        {brand}
                        <div className={classes.sidebarWrapper}>
                            <HeaderLinks/>
                            {links}
                        </div>
                        {image !== undefined ? (
                            <div
                                className={classes.background}
                                style={{backgroundImage: "url(" + image + ")"}}
                            />
                        ) : null}
                    </Drawer>
                </Hidden>
                <Hidden smDown implementation="css">
                    <Drawer
                        anchor="left"
                        variant="permanent"
                        open
                        classes={{
                            paper: classes.drawerPaper
                        }}
                    >
                        {brand}
                        <div className={classes.sidebarWrapper}>{links}</div>
                        {image !== undefined ? (
                            <div
                                className={classes.background}
                                style={{backgroundImage: "url(" + image + ")"}}
                            />
                        ) : null}
                    </Drawer>
                </Hidden>
            </div>
        );
    }
}

export default withStyles(sidebarStyle)(Sidebar);
