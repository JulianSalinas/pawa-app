import React, { Component } from "react";

import Grid from "@material-ui/core/Grid/Grid";
import Avatar from "@material-ui/core/Avatar/Avatar";
import ArrowUpward from "@material-ui/icons/ArrowUpward"
import Typography from "@material-ui/core/Typography/Typography";

import styles from "./comp-recent-trophies-styles";
import withStyles from "@material-ui/core/es/styles/withStyles";

const TrophyIcon = require('../../assets/app-icons/icon-trophy.png');

const TrophyImage = props =>
    <Grid item xs={2}>
        <Grid container justify={"center"} alignItems={"center"}>
            <Grid item>
                <Avatar src={TrophyIcon} className={props.classes.bigAvatar}/>
            </Grid>
        </Grid>
    </Grid>;

const TrophyDescription = props =>
    <Grid item xs={10}>
        <div className={props.classes.description}>
            <Typography variant={"body1"} color={"inherit"}>
                {props.description}
            </Typography>
        </div>
    </Grid>;

const TrophyItemLeft = props =>
    <Grid item xs={9}>
        <Grid container spacing={16}>
            <TrophyImage {...props}/>
            <TrophyDescription {...props}/>
        </Grid>
    </Grid>;

const TrophyItemRight = props =>
    <Grid item xs={3}>
        <div className={props.classes.points}>
            <ArrowUpward color={"primary"} fontSize={"small"} className={props.classes.plusArrow}/>
            <Typography variant={"h5"} color={"inherit"}>
                {`${props.points} pts`}
            </Typography>
        </div>
    </Grid>;

const Trophy = props =>
    <Grid item xs={12} className={props.rowNumber % 2 === 1 ? props.classes.evenRow : props.classes.oddRow}>
        <Grid container spacing={16}>
            <TrophyItemLeft {...props}/>
            <TrophyItemRight {...props}/>
        </Grid>
    </Grid>;

const TrophiesTable = props =>
    <Grid container spacing={24}>
        <Trophy
            rowNumber={1}
            points={15}
            description={"Obtenido al usar la plataforma por 5 días consecutivos"}
            {...props}/>
        <Trophy
            rowNumber={2}
            points={10}
            description={"Obtenido al realizar tu 4° pausa activa"}
            {...props}/>
        <Trophy
            rowNumber={3}
            points={12}
            description={"Obtenido al mantener la postura por 4 horas mientras el dispositvo estuvo encendido"}
            {...props}/>
    </Grid>;

const RecentTrophies = props =>
    <TrophiesTable {...props}/>;

export default withStyles(styles)(RecentTrophies);
