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

const performValues = ["Personal", "Grupal"];
const intevalValues = ["Hoy", "Semanal", "Mensual"];
const Icon = require('../../assets/app-icons/icon-achivement-accent.png');

const AchievementsTitle = () =>
    <Grid item xs={12}>
        <Subtitle text="Logros" icon={Icon}/>
    </Grid>;

const AchievementsSelectsGrid = props =>
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

    </Grid>;

class AchievementsView extends Component {

    render() {
        return <AchievementsLayout {...this.props}/>
    }

}

export default withStyles(styles)(AchievementsView);
