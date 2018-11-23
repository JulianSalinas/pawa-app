import React from "react";
import styles from "./view-metrics-styles";
import withStyles from "@material-ui/core/styles/withStyles";

import Subtitle from '../components/comp-subtitle'
const Icon = require('../../assets/icon-exercises-accent.png');

class Dashboard extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Subtitle text="Ejercicios" icon={Icon}/>
                <hr/>
            </div>
        );
    }
}

export default withStyles(styles)(Dashboard);