import React, { Component } from "react";

import styles from "./view-achievements-styles";
import withStyles from "@material-ui/core/styles/withStyles";

import Subtitle from '../components/comp-subtitle'
import Grid from "@material-ui/core/Grid/Grid";
import OutlinedSelect from "../components/comp-outlined-select";
import LeaderBoard from "../components/comp-leaderboard";
import RecentTrophies from "../components/comp-recent-trophies";

import Paper from "@material-ui/core/Paper/Paper";
import Trophy from "../components/comp-trophy";
import Typography from "@material-ui/core/Typography/Typography";
import FormLabel from "@material-ui/core/FormLabel/FormLabel";
import Divider from "@material-ui/core/Divider/Divider";
import PerformMeter from "../components/comp-performance-face";

const performValues = ["Personal", "Grupal"];
const intevalValues = ["Hoy", "Semanal", "Mensual"];
const Icon = require('../../assets/icon-achivement-accent.png');


const sectionText =  {
    fontSize: "20pt",
    fontWeight: "300",
    color: "#66b5bc",
    verticalAlign: "middle"
};

const stanceTrophies = [
    '10 minutos', '30 minutos', '1 hora', '2 horas',
    '4 horas', '5 horas', '6 horas', '8 horas'
];

const pauseTrophies = [
    '1 pausa', '2 pausas', '3 pausas', '4 pausas'
];

const TrophiesMapping = props => props.trophies.map((trophyName, key) =>
    <Grid item>
        <Trophy key={key} name={trophyName} owned={true}/>
    </Grid>
);

const TrophiesContainer = props =>
    <Grid container className={props.classes.trophies} justify="flex-start" spacing={32}>
        <TrophiesMapping {...props}/>
    </Grid>;

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
    {/*<div>*/}

        {/*<div style={{margin: "25px 0px"}}/>*/}
        {/*<div style={sectionText}>{"Leaderboard"}</div>*/}
        {/*<div style={{margin: "50px 0px"}}/>*/}

        {/*<LeaderBoard/>*/}

        {/*<div style={{margin: "50px 0px"}}/>*/}
        {/*<div style={sectionText}>{"Mi colección"}</div>*/}
        {/*<div style={{margin: "50px 0px"}}/>*/}


        {/*<Typography variant="h6" color="primary">Postura</Typography>*/}
        {/*<div style={{margin: "50px 0px"}}/>*/}
        {/*<TrophiesContainer trophies={stanceTrophies} {...this.props}/>*/}
        {/*<div style={{margin: "50px 0px"}}/>*/}
        {/*<Typography variant="h6" color="primary">Pausas activas</Typography>*/}
        {/*<div style={{margin: "50px 0px"}}/>*/}
        {/*<TrophiesContainer trophies={pauseTrophies} {...this.props}/>*/}

    {/*</div>;*/}

class AchievementsView extends React.Component {

    render() {
        return <AchievementsLayout {...this.props}/>
    }

}

export default withStyles(styles)(AchievementsView);
