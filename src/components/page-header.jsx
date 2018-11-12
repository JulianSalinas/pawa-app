import React from "react";

import Menu from "@material-ui/icons/Menu";
import Hidden from "@material-ui/core/Hidden";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";

import HeaderLinks from "./page-top";
import headerStyle from "./page-header-styles";
import withStyles from "@material-ui/core/styles/withStyles";

const HiddenHeaderLinks = () =>
    <Hidden smDown implementation="css">
        <HeaderLinks/>
    </Hidden>;

const HamburgerMenu = props =>
    <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={props.handleToggle}>
        <Menu/>
    </IconButton>;

const HiddenHamburgerMenu = props =>
    <Hidden mdUp implementation="css">
        <HamburgerMenu handleToggle={props.handleToggle}/>
    </Hidden>;

const ToolbarHeader = props =>
    <AppBar className={props.appBar}>
        <Toolbar className={props.container}>
            <HiddenHeaderLinks/>
            <HiddenHamburgerMenu handleToggle={props.handleToggle}/>
        </Toolbar>
    </AppBar>;

const Header = ({ classes, ...props }) =>
    <ToolbarHeader appBar={classes.appBar}
                   container={classes.container}
                   handleToggle={props.handleToggle}/>;

export default withStyles(headerStyle)(Header);
