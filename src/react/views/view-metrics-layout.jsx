import React from "react";
import styles from "./view-metrics-styles";
import withStyles from "@material-ui/core/styles/withStyles";

import Subtitle from '../components/comp-subtitle'
import PerformMeter from '../components/comp-perform-meter'

const Icon = require('../../assets/icon-metrics-accent.png');

class Dashboard extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Subtitle text="Estadísticas" icon={Icon}/>
                <hr/>
                <PerformMeter value={50}/>
            </div>
        );
    }
}

export default withStyles(styles)(Dashboard);
