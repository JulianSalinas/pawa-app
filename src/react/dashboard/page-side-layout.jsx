import React from "react";
import { NavLink } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";

import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import sideLayoutStyle from "./page-side-styles";
import ButtonTwoStates from "../components/button-two-states";

const NavLogo = () =>
    <a className="logo-wrapper waves-effect">
        <img alt="Logo" className="img-fluid" src={require('../../assets/img-pawa-3.png')}/>
    </a>;

const LogoWrapper = props =>
    <div className={props.wrappedLogo}>
        <NavLogo/>
    </div>;

const DeviceButton = props =>
    <ListItem className={props.itemButton}>
        <ButtonTwoStates/>
    </ListItem>;

const SideMenuIcon = props =>
    typeof props.icon === "string" ?
        <img src={props.icon} alt="img" width="24" height="24" /> :
        <props.icon/>;

const SideMenuIconItem = props =>
    <ListItemIcon className={props.itemIcon}>
        <SideMenuIcon icon={props.icon}/>
    </ListItemIcon>;

const SideMenuLink = props =>
    <ListItem className={props.itemLink}>
        <SideMenuIconItem {...props}/>
        <ListItemText disableTypography={true} primary={props.name}/>
    </ListItem>;

const SideMenuItem = props =>
    <NavLink key={props.key}
             to={props.path}
             className={props.item}
             activeClassName={props.itemActive}>
        <SideMenuLink {...props}/>
    </NavLink>;

const SideMenuList = props =>
    props.routes.map((route, key) => route.redirect ? null :
        <SideMenuItem
            key={key}
            path={route.path}
            name={route.name}
            icon={route.icon} {...props}/>
    );

const SideMenuRoutes = props =>
    <List>
        <SideMenuList {...props}/>
        <DeviceButton {...props}/>
    </List>;

const SideMenuWrapper = props =>
    <div className={props.sidebar}>
        <LogoWrapper {...props}/>
        <SideMenuRoutes {...props}/>
    </div>;

const FixedNavDrawer = props =>
    // Add one level of curly braces like classes={{paper:props.paper}}
    <Drawer anchor="left" variant="permanent" open classes={{paper:props.fixedDrawer}}>
        <SideMenuWrapper {...props}/>
    </Drawer>;

const TempNavDrawer = props =>
    <Drawer
        anchor="right"
        variant="temporary"
        open={props.open}
        classes={{paper: props.tempDrawer}}
        onClose={props.handleToggle}
        ModalProps={{ keepMounted: true }}>
        <SideMenuWrapper {...props}/>
    </Drawer>;

const FixedNavDrawerWrapper = props =>
    <Hidden smDown implementation="css">
        <FixedNavDrawer {...props}/>
    </Hidden>;

const TempNavDrawerWrapper = props =>
    <Hidden mdUp implementation="css">
        <TempNavDrawer {...props}/>
    </Hidden>;

const SideLayout = props =>
    <div>
        <TempNavDrawerWrapper {...props} {...props.classes}/>
        <FixedNavDrawerWrapper {...props} {...props.classes}/>
    </div>;

export default withStyles(sideLayoutStyle)(SideLayout);
