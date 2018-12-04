import React, { Component } from "react";

import styles from "./view-exercises-styles";
import withStyles from "@material-ui/core/styles/withStyles";

import Grid from "@material-ui/core/Grid/Grid";
import Subtitle from '../components/comp-subtitle'
import OutlinedSelect from "../components/comp-outlined-select";
import LeaderBoard from "../components/comp-leaderboard";
import RecentTrophies from "../components/comp-recent-trophies";

import Fab from '@material-ui/core/Fab';
import Paper from "@material-ui/core/Paper/Paper";
import Divider from "@material-ui/core/Divider/Divider";
import Typography from "@material-ui/core/Typography/Typography";
import PerformMeter from "../components/comp-performance-face";
import TurnedButton from "../components/button-two-states";
import Button from "@material-ui/core/Button/Button";
import ThemedButton from "../components/button-random";

import ArrowRight from "@material-ui/icons/ArrowRight"
import ArrowLeft from "@material-ui/icons/ArrowLeft"
import Play from "@material-ui/icons/PlayCircleFilledWhite"


const Icon = require('../../assets/icon-achivement-accent.png');

const ExercisesTitle = () =>
    <Grid item xs={12}>
        <Subtitle text="Ejercicios" icon={Icon}/>
    </Grid>;

const ExercisesRecommended = props =>
    <Grid item xs={12} md={3}>
        {/*<Paper className={props.classes.recommendedVideos} elevation={0}>*/}
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <Typography variant={"subtitle1"} color={"textSecondary"} gutterBottom>
                        Recomendados
                    </Typography>
                    <Divider variant={"middle"} light={true}/>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={16}>
                        {
                            props.recommendedVideos.map((video, key) => {
                                return (
                                    <Grid key={key} item xs={6} md={12}>
                                        {/*<img className={props.classes.videoThumbnail}*/}
                                        {/*src={`https://img.youtube.com/vi/${video}/mqdefault.jpg`}/>*/}
                                        <div className={props.classes.videoThumbnail} style={{
                                            backgroundImage: `url(${video})`,
                                            backgroundSize: 'cover'
                                        }}>
                                            <Play className={props.classes.videoThumbnailPlay}/>
                                        </div>
                                    </Grid>
                                );
                            })
                        }
                    </Grid>
                </Grid>
            </Grid>
        {/*</Paper>*/}
    </Grid>;

const ExercisesMainVideo = props =>
    <Grid item xs={12}>
        <Paper className={props.classes.mainVideoContainer} elevation={0}>
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <iframe
                        className={props.classes.mainVideo}
                        frameborder="0"
                        src={`https://www.youtube.com/embed/${props.currentVideo}`}
                        allowFullScreen/>
                </Grid>
            </Grid>
        </Paper>
    </Grid>;

const ExercisesMainControls = props =>
    <Grid item xs={12}>
        <Grid container spacing={0}>
            <Grid item>
                <Fab variant="extended" className={props.classes.previousButton}>
                    <ArrowLeft className={props.classes.previousButtonIcon} />
                    Anterior
                </Fab>
            </Grid>
            <Grid item className={props.classes.buttonDivider}/>
            <Grid item>
                <Fab variant="extended" className={props.classes.nextButton}>
                    Siguiente
                    <ArrowRight className={props.classes.nextButtonIcon} />
                </Fab>
            </Grid>
        </Grid>
    </Grid>;

const ExercisesLayout = props =>
    <Grid container className={props.classes.root} spacing={24}>
        <ExercisesTitle {...props}/>
        <Grid item xs={12}>
            <Grid container spacing={24}>

                <Grid item xs={12} md={9}>
                    <Grid container spacing={24}>
                        <ExercisesMainVideo {...props}/>
                        <ExercisesMainControls {...props}/>
                    </Grid>
                </Grid>

                <ExercisesRecommended {...props}/>

                <Grid item xs={12}>
                    {/*<Paper className={props.classes.recommendedVideos} elevation={0}>*/}
                        <Grid container spacing={24}>
                            <Grid item xs={12}>
                                <Typography variant={"subtitle1"} color={"textSecondary"} gutterBottom>
                                    Más ejercicios
                                </Typography>
                                <Divider variant={"middle"} light={true}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container spacing={16}>
                                    {
                                        props.moreVideos.map((video, key) => {
                                            return (
                                                <Grid key={key} item xs={3}>
                                                    <div className={props.classes.videoThumbnail}>
                                                        <Play className={props.classes.videoThumbnailPlay}/>
                                                    </div>
                                                </Grid>
                                            );
                                        })
                                    }
                                </Grid>
                            </Grid>
                        </Grid>
                    {/*</Paper>*/}
                </Grid>

            </Grid>
        </Grid>
    </Grid>;

class ExercisesView extends Component {

    state = {
        currentVideo: "ja_OfA2aoeA",
        recommendedVideos: [
            "http://www.jlstms.com/data/wallpapers/17/im58075405.png",
            "http://www.jlstms.com/data/wallpapers/17/im57837440.png",
            "http://www.jlstms.com/data/wallpapers/17/im58983464.jpg"
        ],
        moreVideos : [
            "wcXyoQFRSzk", "RJE-CvV-kSA", "jSrgvUg7fg4", "OzC9h-vkqZs",
            "jSrgvUg7fg4", "OzC9h-vkqZs", "wcXyoQFRSzk", "RJE-CvV-kSA"
        ]
    };

    render() {
        return <ExercisesLayout
            currentVideo={this.state.currentVideo}
            recommendedVideos={this.state.recommendedVideos}
            moreVideos={this.state.moreVideos}
            {...this.props}/>
    }

}

export default withStyles(styles)(ExercisesView);
