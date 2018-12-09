import React from "react";

import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid/Grid";
import Poppers from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Avatar from "@material-ui/core/Avatar/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography/Typography";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import styles from "./page-header-styles";
import withStyles from "@material-ui/core/styles/withStyles";

const profileActions = [ "Cerrar sesión", "Cambiar contraseña"];
const medalIcon = require('../../assets/app-icons/icon-medal-1.png');

const ProfileMedal = props =>
    <Typography  variant={"body2"} align={"right"} color={"textSecondary"}>
        <img className={props.classes.medal} src={medalIcon} alt="img"/> Bronce
    </Typography>;

const ProfileName = props =>
    <Typography variant={"body1"} align={"right"} color={"textSecondary"}>
        {props.currentUser.displayName}
    </Typography>;

const ProfileInfo = props =>
    <Grid container alignItems={"center"} className={props.classes.profile}>
        <Grid item xs={12}>
            <ProfileName {...props}/>
            <ProfileMedal {...props}/>
        </Grid>
    </Grid>;

const ProfileImage = props =>
    <IconButton
        buttonRef={props.buttonRef}
        onClick={props.handleToggle}
        aria-owns={props.open ? "menu-list-grow" : null}>
        <Avatar className={props.classes.avatar}
                src={props.currentUser.photoURL} alt="img" />
        <CloseNotificationPopup {...props}/>
    </IconButton>;

const CloseNotificationPopup = props =>
    <Hidden mdUp implementation="css">
        <p onClick={props.handleClose}> Notificaciones </p>
    </Hidden>;

const NotificationListItems = props => profileActions.map(notification =>
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
            <Grid container spacing={8}>

                <Grid item>
                    <ProfileInfo {...this.props} {...this.state}/>
                </Grid>

                <Grid item>
                    <ProfileImage
                        open={this.state.open}
                        buttonRef={this.handleAnchor}
                        handleClose={this.handleClose}
                        handleToggle={this.handleToggle}
                        {...this.props} {...this.state}/>
                    <NotificationPopup
                        open={this.state.open}
                        anchorEl={this.anchorEl}
                        buttonRef={this.handleAnchor}
                        handleClose={this.handleClose}
                        handleToggle={this.handleToggle}
                        {...this.props}/>
                </Grid>

            </Grid>
        );
    }
}

export default withStyles(styles)(HeaderLinks);
