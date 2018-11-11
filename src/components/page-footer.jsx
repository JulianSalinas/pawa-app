import React from "react";
import footerStyle from "./page-footer-styles";
import withStyles from "@material-ui/core/styles/withStyles";

const Footer = props => {

    const { classes, year, company } = props;

    return (
        <footer className={classes.footer}>
            <div className={classes.container}>
              <span> &copy; { year + " "}
              <a href="https://github.com/JulianSalinas/pawa-app" className={classes.a}>
                  {company}
              </a>, creando hábitos saludables
              </span>
            </div>
        </footer>
    );

};

export default withStyles(footerStyle)(Footer);
