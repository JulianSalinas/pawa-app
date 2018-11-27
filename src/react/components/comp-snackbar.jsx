import React from "react";

import Close from "@material-ui/icons/Close";
import Snack from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";

import styles from "./comp-snackbar-styles.jsx";
import withStyles from "@material-ui/core/styles/withStyles";

function getAnchorOrigin(){
    return { vertical: "bottom", horizontal: "right" };
}

function getContentProps(classes) {
    return { classes: { root: classes.root, message: classes.message } };
}

const SnackbarCloseButton = props =>
    <IconButton
        key="close"
        aria-label="Close"
        onClick={() => props.closeNotification()}>
        <Close className={props.classes.close} />
    </IconButton>;

const SnackbarMessage = props =>
    <div>
        {props.icon !== undefined ? <props.icon className={props.classes.icon} /> : null}
        <span className={props.classes.message}>{props.message}</span>
    </div>;

const SnackWrapper = props =>
    <Snack
        open={props.open}
        action={props.action}
        anchorOrigin={getAnchorOrigin()}
        ContentProps={getContentProps(props.classes)}
        message={<SnackbarMessage {...props}/>}/>;

const Snackbar = props => {
    let close = [<SnackbarCloseButton {...props}/>];
    let action = props.close !== undefined ? close : null;
    return <SnackWrapper action={action} {...props}/>;
};

export default withStyles(styles)(Snackbar);
