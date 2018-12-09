import React, { Component } from "react";

import styles from "./view-achievements-styles";
import withStyles from "@material-ui/core/styles/withStyles";

import Grid from "@material-ui/core/Grid/Grid";
import Subtitle from '../components/comp-subtitle'
import OutlinedSelect from "../components/comp-outlined-select";
import LeaderBoard from "../components/comp-leaderboard";
import RecentTrophies from "../components/comp-recent-trophies";

import Paper from "@material-ui/core/Paper/Paper";
import Divider from "@material-ui/core/Divider/Divider";
import Typography from "@material-ui/core/Typography/Typography";

import { Animation, LineSeries, Scale } from "@devexpress/dx-react-chart";
import { Chart, ArgumentAxis, ValueAxis, Legend, Title } from "@devexpress/dx-react-chart-material-ui";

const performValues = ["Personal", "Grupal"];
const intevalValues = ["Hoy", "Semanal", "Mensual"];
const Icon = require('../../assets/app-icons/icon-achivement-accent.png');

const AchievementsTitle = () =>
    <Grid item xs={12}>
        <Subtitle text="Logros" icon={Icon}/>
    </Grid>;

const AchievementsSelectsGrid = props =>
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
    </Grid>;

const AchievementsLayout = props =>
    <Grid container className={props.classes.root} spacing={24}>
        <AchievementsTitle {...props}/>
        <AchievementsSelectsGrid {...props}/>

        <Grid item xs={12}>
            <Grid container spacing={24}>

                <Grid item xs={12} md={5}>
                    <Paper className={props.classes.paper} elevation={0}>
                        <Grid container spacing={24}>
                            <Grid item xs={12}>
                                <Typography variant={"subtitle1"} color={"textSecondary"} gutterBottom>
                                    Tabla de líderes
                                </Typography>
                                <Divider variant={"middle"} light={true}/>
                            </Grid>
                            <Grid item xs={12}>
                                <LeaderBoard/>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={7}>
                    <Paper className={props.classes.paper} elevation={0}>
                        <Grid container spacing={24}>
                            <Grid item xs={12}>
                                <Typography variant={"subtitle1"} color={"textSecondary"} gutterBottom>
                                    Trofeos recientes
                                </Typography>
                                <Divider variant={"middle"} light={true}/>
                            </Grid>
                            <Grid item xs={12}>
                                <RecentTrophies/>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

            </Grid>
        </Grid>

        <Grid item xs={12}>
            <Paper className={props.classes.paper} elevation={0}>
                <Grid container spacing={24}>

                    <Grid item xs={12}>
                        <Typography variant={"subtitle1"} color={"textSecondary"} gutterBottom>
                            Resumen de actividad
                        </Typography>
                        <Divider variant={"middle"} light={true}/>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Grid container spacing={16} className={props.classes.brief}>
                            <Grid item xs={12}>
                                <Typography variant={"body1"} color={"textSecondary"} gutterBottom>
                                    Cantidad de puntos recientes
                                </Typography>
                                <Typography variant={"h4"} color={"textSecondary"} gutterBottom>
                                    37 pts
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant={"body1"} color={"textSecondary"} gutterBottom>
                                    Cantidad de puntos semanales
                                </Typography>
                                <Typography variant={"h4"} color={"textSecondary"} gutterBottom>
                                    150 pts
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant={"body1"} color={"textSecondary"} gutterBottom>
                                    Puntos para alcanzar al siguiente
                                </Typography>
                                <Typography variant={"h4"} color={"textSecondary"} gutterBottom>
                                    290 pts
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={9}>
                        <BriefChart {...props}/>
                    </Grid>

                </Grid>
            </Paper>
        </Grid>

    </Grid>;

const BriefChart = props =>
    <Chart data={props.data}>
        <ArgumentAxis/>
        <BriefChartValueAxis/>
        { BriefChartUserSeries(props.userSeries) }
        <Legend position="bottom" {...props}/>;
        <Title textComponent={() => BriefChartTitle(props)}/>
        <Animation/>
        <Scale/>
    </Chart>;

const BriefChartUserSeries = userSeries => userSeries.map((series, key) =>
    <LineSeries
        key={key}
        name={series.name}
        valueField={series.valueField}
        argumentField={series.argumentField}/>
);

const BriefChartValueAxis = () =>
    <ValueAxis min={10} max={90} labelComponent={BriefChartLabel}/>;

const BriefChartLabel = props =>
    <ValueAxis.Label {...props} text={`${props.text} pts`}/>;

const BriefChartTitle = props =>
    <Typography variant={"h5"}
                align={"center"}
                color={"textSecondary"}
                className={props.classes.briefChartTitle}>
        Puntos obtenidos diariamente
    </Typography>;

class AchievementsView extends Component {

    state = {
        data: require('../../json/demo-data-1.json'),
        userSeries: require('../../json/users-series')
    };

    render() {
        return <AchievementsLayout {...this.props} {...this.state}/>
    }

}

export default withStyles(styles)(AchievementsView);
