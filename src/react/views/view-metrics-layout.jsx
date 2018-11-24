import React from "react";
import styles from "./view-metrics-styles";
import withStyles from "@material-ui/core/styles/withStyles";

import Subtitle from '../components/comp-subtitle'
import ManSitting from "../components/comp-man-sitting";
import PerformMeter from '../components/comp-performance-face'
import OutlinedSelect from "../components/comp-outlined-select";

const performValues = ["Personal", "Grupal"];
const intevalValues = ["Hoy", "Semanal", "Mensual"];
const Icon = require('../../assets/icon-metrics-accent.png');

class Dashboard extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Subtitle text="Estadísticas" icon={Icon}/>
                <hr/>
                <PerformMeter value={50}/>
                <form className={classes.root} autoComplete="on">
                    <OutlinedSelect label={"Rendimiento"} values={performValues}/>
                    <OutlinedSelect label={"Intervalo"} values={intevalValues}/>
                </form>
                <ManSitting/>
            </div>
        );
    }
}

export default withStyles(styles)(Dashboard);
