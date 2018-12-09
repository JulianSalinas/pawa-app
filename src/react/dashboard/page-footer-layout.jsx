import React from "react";

import styles from "./page-footer-styles";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography/Typography";

const year = 2018;
const company = "Pawa";

const FooterSpan = props =>
    <Typography variant={"inherit"} align={"center"}> &copy; { year + " "}
        <a className={props.classes.a}> {company} </a>, creando hábitos saludables
    </Typography>;

const FooterWrapper = props =>
    <footer className={props.classes.footer}>
        <FooterSpan {...props}/>
    </footer>;

const Footer = props =>
    <FooterWrapper {...props}/>;

export default withStyles(styles)(Footer);
