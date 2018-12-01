import React, { Component } from "react";

import styles from "./view-metrics-styles";
import withStyles from "@material-ui/core/styles/withStyles";

import Subtitle from '../components/comp-subtitle'
import ManSitting from "../components/comp-man-sitting";
import Progress from "../components/comp-progress-metric";
import PerformMeter from '../components/comp-performance-face'
import OutlinedSelect from "../components/comp-outlined-select";

import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import Divider from "@material-ui/core/Divider/Divider";
import Typography from "@material-ui/core/Typography/Typography";

const performValues = ["Personal", "Grupal"];
const intevalValues = ["Hoy", "Semanal", "Mensual"];
const chartsValues = ["Tiempo", "Pausas activas", "Postura"];
const Icon = require('../../assets/icon-metrics-accent.png');

const MetricsTitle = () =>
    <Grid item xs={12}>
        <Subtitle text="Estadísticas" icon={Icon}/>
    </Grid>;

const MetricsSelectsGrid = props =>
    <Grid item xs={12}>
        <Grid container>
            <Grid item xs={12}>
                <Paper className={props.classes.paper} elevation={0}>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            <Typography variant={"subtitle1"} color={"textSecondary"} gutterBottom>
                                Parámetros
                            </Typography>
                            <Divider variant={"middle"} light={true}/>
                        </Grid>
                        <Grid item>
                            <OutlinedSelect label={"Rendimiento"} values={performValues}/>
                        </Grid>
                        <Grid item>
                            <OutlinedSelect label={"Intervalo"} values={intevalValues}/>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    </Grid>;

const MetricsPositionGrid = props =>
    <Grid item xs={12} md={4}>
        <Paper className={props.classes.paperPosition} elevation={0}>
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <Typography variant={"subtitle1"} className={props.classes.paperPositionText} gutterBottom>
                        Tu posición actual
                    </Typography>
                    <Divider variant={"middle"} light={true}/>
                </Grid>
                <Grid item xs={12}>
                    <div className={props.classes.paperPositionContent}>
                        <ManSitting/>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant={"h4"} align={"center"} className={props.classes.paperPositionText}>
                        87 Grados
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    </Grid>;

const MetricsPerformanceGrid = props =>
    <Grid item xs={12}>
        <Paper className={props.classes.paper} elevation={0}>
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <Typography variant={"subtitle1"} color={"textSecondary"} gutterBottom>
                        Rendimiento
                    </Typography>
                    <Divider variant={"middle"} light={true}/>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant={"h5"} color={"textSecondary"}>
                        ¡Excelente!
                    </Typography>
                    <PerformMeter value={90}/>
                </Grid>
            </Grid>
        </Paper>
    </Grid>;

const MetricsProgressGrid = props =>
    <Grid item xs={12}>
        <Paper className={props.classes.paper} elevation={0}>
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <Typography variant={"subtitle1"} color={"textSecondary"} gutterBottom>
                        Progreso
                    </Typography>
                    <Divider variant={"middle"} light={true}/>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justify={"space-evenly"} spacing={32}>
                        {chartsValues.map(value => (
                            <Grid key={value} item>
                                <Progress label={value}/>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    </Grid>;

const MetricsLayout = props =>
    <Grid container className={props.classes.root} spacing={24}>
        <MetricsTitle {...props}/>
        <MetricsSelectsGrid {...props}/>
        <Grid item xs={12}>
            <Grid container spacing={24}>
                <MetricsPositionGrid {...props}/>
                <Grid item xs={12} md={8}>
                    <Grid container spacing={24}>
                        <MetricsPerformanceGrid {...props}/>
                        <MetricsProgressGrid {...props}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid>;

class MetricsView extends Component {

    render() {
        return <MetricsLayout {...this.props}/>
    }

}

export default withStyles(styles)(MetricsView);
