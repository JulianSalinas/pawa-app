import React from "react";
import classNames from "classnames";

import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";
import Poppers from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import Exit from "@material-ui/icons/PowerSettingsNewSharp"
import Person from "@material-ui/icons/Person";
import Dashboard from "@material-ui/icons/Dashboard";
import Notifications from "@material-ui/icons/Notifications";

import Button from "./comp-button";
import headerLinksStyle from "./page-top-styles";
import withStyles from "@material-ui/core/styles/withStyles";
import {NavLink} from "react-router-dom";

const dummyNotifications = [
    "Es hora de hacer tus ejercicios",
    "Recuerda esta siempre firme",
    "Para empezar calibra tu dispositivo"
];

class HeaderLinks extends React.Component {

    state = {
        open: false
    };

    handleToggle = () => {
        this.setState(state => ({ open: !state.open }));
    };

    handleClose = event => {
        if (this.anchorEl.contains(event.target)) {
            return;
        }
        this.setState({ open: false });
    };

    render() {

        const { open } = this.state;
        const { classes } = this.props;

        return (
            <div className={classes.linksContainer}>

                <NavLink to="./stats">
                    <Button
                        aria-label="Mis estadísticas"
                        className={classes.buttonLink}
                        justIcon={window.innerWidth > 959}
                        simple={!(window.innerWidth > 959)}
                        color={window.innerWidth > 959 ? "transparent" : "white"}>
                        <Dashboard className={classes.icons}/>
                        <Hidden mdUp implementation="css">
                            <p className={classes.linkText}>Mis estadísticas</p>
                        </Hidden>
                    </Button>
                </NavLink>

                <Button
                    aria-haspopup="true"
                    onClick={this.handleToggle}
                    className={classes.buttonLink}
                    justIcon={window.innerWidth > 959}
                    simple={!(window.innerWidth > 959)}
                    aria-owns={open ? "menu-list-grow" : null}
                    buttonRef={node => { this.anchorEl = node; }}
                    color={window.innerWidth > 959 ? "transparent" : "white"}>
                    <Notifications className={classes.icons} />
                    <span className={classes.notifications}>{dummyNotifications.length}</span>
                    <Hidden mdUp implementation="css">
                        <p onClick={this.handleClick} className={classes.linkText}> Notificaciones </p>
                    </Hidden>
                </Button>

                <Poppers open={open} anchorEl={this.anchorEl} transition disablePortal>
                    {({ TransitionProps }) => (
                        <Grow {...TransitionProps}  id="menu-list-grow">
                            <Paper>
                            <ClickAwayListener onClickAway={this.handleClose}>
                            <MenuList role="menu">{ dummyNotifications.map(notification =>
                            <MenuItem onClick={this.handleClose} className={classes.dropdownItem}>
                                {notification}
                            </MenuItem>)}
                            </MenuList>
                            </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Poppers>

                <NavLink to="./profile">
                    <Button
                        aria-label="Mi perfil"
                        className={classes.buttonLink}
                        justIcon={window.innerWidth > 959}
                        simple={!(window.innerWidth > 959)}
                        color={window.innerWidth > 959 ? "transparent" : "white"}>
                        <Person className={classes.icons}/>
                        <Hidden mdUp implementation="css">
                            <p className={classes.linkText}>Mi perfil</p>
                        </Hidden>
                    </Button>
                </NavLink>

                <div className={classes.exitButtonWrapper}>
                    <Button color="danger" aria-label="edit" justIcon round>
                        <Exit className={classes.icons}/>
                    </Button>
                </div>

            </div>
        );
    }
}

export default withStyles(headerLinksStyle)(HeaderLinks);
