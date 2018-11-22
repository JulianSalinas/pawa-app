import React from "react";

import Menu from "@material-ui/icons/Menu";
import Hidden from "@material-ui/core/Hidden";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";

import HeaderToolbar from "./page-header-toolbar";
import headerStyles from "./page-header-styles";
import withStyles from "@material-ui/core/styles/withStyles";

const HeaderToolbarWrapper = () =>
    <Hidden smDown implementation="css">
        <HeaderToolbar/>
    </Hidden>;

const HamburgerMenu = props =>
    <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={props.handleToggle}>
        <Menu/>
    </IconButton>;

const HamburgerMenuWrapper = props =>
    <Hidden mdUp implementation="css">
        <HamburgerMenu handleToggle={props.handleToggle}/>
    </Hidden>;

const HeaderToolbarContainerWrapper = props =>
    <Toolbar className={props.toolbar}>
        <HeaderToolbarWrapper {...props}/>
        <HamburgerMenuWrapper {...props}/>
    </Toolbar>;

const HeaderAppBarWrapper = props =>
    <AppBar className={props.appbar}>
        <HeaderToolbarContainerWrapper {...props}/>
    </AppBar>;

const HeaderLayout = ({ classes, ...props }) =>
    <HeaderAppBarWrapper {...props} {...classes}/>;

export default withStyles(headerStyles)(HeaderLayout);
