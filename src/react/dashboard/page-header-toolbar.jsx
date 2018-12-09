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
import Avatar from "@material-ui/core/Avatar/Avatar";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";

const MedalIcon = require('../../assets/app-icons/icon-medal-1.png');

const dummyNotifications = [
    "Es hora de hacer tus ejercicios",
    "Recuerda esta siempre firme",
    "Para empezar calibra tu dispositivo"
];

const ExitButton = props =>
    <IconButton>
        <Exit className={props.classes.exitIcon}/>
    </IconButton>;

const ProfileImage = props =>
    <NavLink to="./profile">
        <Avatar className={props.classes.avatar} src={props.currentUser.photoURL} alt="img" />
    </NavLink>;

const CloseNotificationPopup = props =>
    <Hidden mdUp implementation="css">
        <p onClick={props.handleClose}> Notificaciones </p>
    </Hidden>;

const NotificationButton = props =>
    <IconButton
        buttonRef={props.buttonRef}
        onClick={props.handleToggle}
        aria-owns={props.open ? "menu-list-grow" : null}>
        <Notifications className={props.classes.icon}/>
        <span className={props.classes.notificationSpan}>{dummyNotifications.length}</span>
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
        currentUser: require('../../json/norealuser-2')
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

        return (
            <Grid container spacing={16} className={this.props.classes.toolbarLinks}>

                <Grid item>
                    <Grid container justify={"flex-end"} className={this.props.classes.profileInfo}>
                        <Grid item xs={12}>
                            <Typography align={"right"}>{this.state.currentUser.displayName}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography align={"right"}>
                                <img className={this.props.classes.medal} src={MedalIcon} alt="img"/> Bronce
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                {/*<Grid item>*/}
                    {/*<NotificationButton*/}
                        {/*open={this.state.open}*/}
                        {/*buttonRef={this.handleAnchor}*/}
                        {/*handleClose={this.handleClose}*/}
                        {/*handleToggle={this.handleToggle}*/}
                        {/*{...this.props}/>*/}
                    {/*<NotificationPopup*/}
                        {/*open={this.state.open}*/}
                        {/*anchorEl={this.anchorEl}*/}
                        {/*buttonRef={this.handleAnchor}*/}
                        {/*handleClose={this.handleClose}*/}
                        {/*handleToggle={this.handleToggle}*/}
                        {/*{...this.props}/>*/}
                {/*</Grid>*/}

                <Grid item>
                    <Grid container alignItems={"center"} className={this.props.classes.profileImage}>
                        <Grid item>
                            <ProfileImage {...this.props} {...this.state}/>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        );
    }
}

export default withStyles(pageTopStyles)(HeaderLinks);
