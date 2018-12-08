import React from "react";

import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";
import Poppers from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import IconButton from "@material-ui/core/IconButton";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import Exit from "@material-ui/icons/PowerSettingsNew"
import Notifications from "@material-ui/icons/Notifications";

import { NavLink } from "react-router-dom";
import pageTopStyles from "./page-header-styles";
import withStyles from "@material-ui/core/styles/withStyles";

const MedalIcon = require('../../assets/app-icons/icon-medal-1.png');
const PersonIcon = require('../../assets/app-icons/icon-leader-up.png');

const dummyNotifications = [
    "Es hora de hacer tus ejercicios",
    "Recuerda esta siempre firme",
    "Para empezar calibra tu dispositivo"
];

const ExitButton = props =>
    <IconButton>
        <Exit className={props.exitIcon}/>
    </IconButton>;

const ProfileButton = props =>
    <NavLink to="./profile">
        {/*<IconButton>*/}
            {/*<Person className={props.icons}/>*/}
        {/*</IconButton>*/}
        <img className={props.profileIcon} src={PersonIcon} alt="img" />
    </NavLink>;

const ProfileInfo = props =>
    <div className={props.profileStyle}>
        <div style={{marginBottom:"-5px"}}>{props.profile.displayName}</div>
        <div><img className={props.medal} src={MedalIcon} alt="img"/> Bronce </div>
    </div>;

const CloseNotificationPopup = props =>
    <Hidden mdUp implementation="css">
        <p onClick={props.handleClose}> Notificaciones </p>
    </Hidden>;

const NotificationButton = props =>
    <IconButton
        buttonRef={props.buttonRef}
        onClick={props.handleToggle}
        aria-owns={props.open ? "menu-list-grow" : null}>
        <Notifications className={props.icons}/>
        <span className={props.notificationSpan}>{dummyNotifications.length}</span>
        <CloseNotificationPopup {...props}/>
    </IconButton>;

const NotificationListItems = props =>
    dummyNotifications.map(notification =>
        <MenuItem onClick={props.handleClose}>{notification}</MenuItem>
    );

const NotificationMenuList = props =>
    <MenuList role="menu">
        <NotificationListItems {...props}/>
    </MenuList>;

const NotificationClickAway = props =>
    <ClickAwayListener onClickAway={props.handleClose}>
        <NotificationMenuList {...props}/>
    </ClickAwayListener>;

const NotificationPaper = props =>
    <Paper>
        <NotificationClickAway {...props}/>
    </Paper>;

const NotificationGrow = props =>
    <Grow {...props.TransitionProps} id="menu-list-grow">
        <NotificationPaper {...props}/>
    </Grow>;

const NotificationPopup = props =>
    <Poppers open={props.open} anchorEl={props.anchorEl} transition disablePortal>
        {({ TransitionProps }) =>
            <NotificationGrow TransitionProps={TransitionProps} {...props}/>
        }
    </Poppers>;

class HeaderLinks extends React.Component {

    state = {
        open: false,
        profile: require('../../json/norealuser-1')
    };

    handleAnchor = node => {
        this.anchorEl = node;
    };

    handleToggle = () => {
        this.setState(state => ({ open: !state.open }));
    };

    handleClose = event => {
        if (this.anchorEl.contains(event.target))
            return;
        this.setState({ open: false });
    };

    render() {

        const { classes } = this.props;

        return (
            <div>

                {/*<NotificationButton*/}
                    {/*open={this.state.open}*/}
                    {/*buttonRef={this.handleAnchor}*/}
                    {/*handleClose={this.handleClose}*/}
                    {/*handleToggle={this.handleToggle}*/}
                    {/*{...this.props} {...classes}/>*/}

                {/*<NotificationPopup*/}
                    {/*open={this.state.open}*/}
                    {/*anchorEl={this.anchorEl}*/}
                    {/*buttonRef={this.handleAnchor}*/}
                    {/*handleClose={this.handleClose}*/}
                    {/*handleToggle={this.handleToggle}*/}
                    {/*{...this.props} {...classes}/>*/}

                <ProfileInfo profile={this.state.profile} {...this.props} {...classes}/>

                <ProfileButton {...this.props} {...classes}/>

                <ExitButton {...this.props} {...classes}/>
            </div>
        );
    }
}

export default withStyles(pageTopStyles)(HeaderLinks);
