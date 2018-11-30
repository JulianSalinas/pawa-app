import React from "react";

import styles from "./page-footer-styles";
import withStyles from "@material-ui/core/styles/withStyles";

const year = 2018;
const company = "Pawa";

const FooterSpan = props =>
    <span> &copy; { year + " "}
        <a className={props.classes.a}> {company} </a>, creando hábitos saludables
    </span>;

const FooterWrapper = props =>
    <footer className={props.classes.footer}>
        <FooterSpan {...props}/>
    </footer>;

const Footer = props =>
    <FooterWrapper {...props}/>;

export default withStyles(styles)(Footer);
