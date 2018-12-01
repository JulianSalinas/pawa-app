import React, { Component } from "react";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";

import styles from "./comp-leaderboard-styles";
import withStyles from "@material-ui/core/es/styles/withStyles";

import Avatar from "@material-ui/core/Avatar/Avatar";
const MedalIcon = require('../../assets/icon-medal-1.png');

const LeaderBoardPosition = props =>
    <Grid item xs={2}>
        <div className={props.classes.position}>
            <Typography variant={"h5"} color={"inherit"}>
                {props.position}
            </Typography>
        </div>
    </Grid>;

const LeaderBoardAvatar = props =>
    <Grid item xs={2}>
        <Grid container justify={"center"} alignItems={"center"}>
            <Grid item>
                <Avatar src={props.profile.photoURL} className={props.classes.bigAvatar}/>
            </Grid>
        </Grid>
    </Grid>;

const LeaderBoardName = props =>
    <Grid item xs={8}>
        <div className={props.classes.name}>
            <Typography variant={"body1"} color={"inherit"}>
                {props.profile.displayName}
            </Typography>
        </div>
    </Grid>;

const LeaderBoardItemLeft = props =>
    <Grid item xs={8}>
        <Grid container spacing={16}>
            <LeaderBoardPosition {...props}/>
            <LeaderBoardAvatar {...props}/>
            <LeaderBoardName {...props}/>
        </Grid>
    </Grid>;

const LeaderBoardItemRight = props =>
    <Grid item xs={4}>
        <div className={props.classes.points}>
            <img src={MedalIcon} className={props.classes.medal}/>
            <Typography variant={"h5"} color={"inherit"}>
                {`${props.points} pts`}
            </Typography>
        </div>
    </Grid>;

const LeaderBoardItem = props =>
    <Grid item xs={12} className={props.isHost ? props.classes.host : props.classes.neighbor}>
        <Grid container spacing={16}>
            <LeaderBoardItemLeft {...props}/>
            <LeaderBoardItemRight {...props}/>
        </Grid>
    </Grid>;

const LeaderBoardTable = props =>
    <Grid container spacing={24}>
        <LeaderBoardItem
            isHost={false}
            points={855}
            position={4}
            profile={require('../../json/norealuser-1')}{...props}/>
        <LeaderBoardItem
            isHost={true}
            points={565}
            position={5}
            profile={require('../../json/norealuser-2')} {...props}/>
        <LeaderBoardItem
            isHost={false}
            points={412}
            position={6}
            profile={require('../../json/norealuser-3')} {...props}/>
    </Grid>;

const LeaderBoard = props =>
    <LeaderBoardTable {...props}/>;

export default withStyles(styles)(LeaderBoard);
