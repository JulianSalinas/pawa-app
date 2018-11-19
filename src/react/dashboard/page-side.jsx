import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// @material-ui/core react
import withStyles from "@material-ui/core/styles/withStyles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import sidebarStyle from "./page-side-styles";
import TurnedButton from "../components/button-two-states";

const NavLogo = () =>
    <a className="logo-wrapper waves-effect">
        <img alt="Logo" className="img-fluid" src={require('../../assets/pawa-2.png')}/>
    </a>;

class Sidebar extends Component {

    render() {

        const {classes, color, logo, image, company, routes} = this.props;

        let links = (
            <List className={classes.list}>
                {routes.map((prop, key) => {
                if (prop.redirect) return null;
                return (
                    <NavLink to={prop.path}
                             className={classes.item}
                             activeClassName={classes.activeItem} key={key}>

                        <ListItem className={classes.itemLink}>

                            <ListItemIcon className={classes.itemIcon}>
                                <prop.icon/>
                            </ListItemIcon>

                            <ListItemText
                                primary={prop.sidebarName}
                                className={classes.itemText}
                                disableTypography={true}/>

                        </ListItem>

                    </NavLink>
                );
            })}
                <NavLink to={"/calibrate"} className={classes.itemButton}>
                    <TurnedButton/>
                </NavLink>

            </List>
        );

        let brand = (
            <div className={classes.logo}>
                <NavLogo/>
                <div className={classes.company}>
                    {this.props.company}
                </div>
            </div>
        );

        return (
            <div>
                <Hidden mdUp implementation="css">
                    <Drawer
                        variant="temporary"
                        anchor="right"
                        open={this.props.open}
                        classes={{paper: classes.drawerPaper}}
                        onClose={this.props.handleToggle}
                        ModalProps={{ keepMounted: true }}>
                        {brand}
                        <div className={classes.sidebarWrapper}>
                            {/*<HeaderLinks/>*/}
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
                    <Drawer anchor="left" variant="permanent" open classes={{paper: classes.drawerPaper }}>
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
