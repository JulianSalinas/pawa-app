import React, { Component } from "react";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";

import styles from "./comp-leaderboard-styles";
import withStyles from "@material-ui/core/es/styles/withStyles";
import Avatar from "@material-ui/core/Avatar/Avatar";

const MedalIcon = require('../../assets/icon-medal-1.png');

const ProfileIconStyle = {
    width: "80px",
    height: "80px"
};

const ProfileDisplayNameStyle = {
    display: "flex",
    fontSize: "20px", // 16
    fontWeight: "300", // 400
    alignSelf: "flex-center",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    // textAlign: "center",
    // verticalAlign: "center",
};

const profileStyle =  {
    display: "inline-block",
    verticalAlign: "middle",
    textDecoration: "none"
};

const medalIcon = {
    width: "15px",
    height: "15px",
    marginRight: "5px"
};

const MedalTextStyle = {
    display: "flex",
    fontSize: "16px", // 16
    fontWeight: "300", // 400
    alignSelf: "flex-center",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
};

const PointsInfo = props =>
    <div style={profileStyle}>
        <Typography style={{
            color: "#FFF",
        }} variant="h6">{"1001 pts"}</Typography>
        <div style={MedalTextStyle}>
            <img style={medalIcon} src={MedalIcon} alt="img"/> Bronce
        </div>
    </div>;

const ProfileIcon = props =>
    typeof props.icon === "string" ?
        <img src={props.icon} alt="img" /> :
        <props.icon/>;

const LeaderBoardHost = props =>
    <Grid item xs={12} className={props.classes.host}>
        <Grid container spacing={16}>

            <Grid item xs={8}>
                <Grid container spacing={16}>

                    <Grid item xs={2}>
                        <div className={props.classes.position}>
                            <Typography variant={"h5"} color={"inherit"}>
                                {"5"}
                            </Typography>
                        </div>
                    </Grid>

                    <Grid item xs={2}>
                        <Grid container justify={"center"} alignItems={"center"}>
                            <Grid item>
                                <Avatar src={props.profile.photoURL} className={props.classes.bigAvatar}/>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={8}>
                        <div className={props.classes.name}>
                            <Typography variant={"body1"} color={"inherit"}>
                                {props.profile.displayName}
                            </Typography>
                        </div>
                    </Grid>

                </Grid>
            </Grid>

            <Grid item xs={4}>
                <div className={props.classes.points}>
                    <img src={MedalIcon} className={props.classes.medalIcon}/>
                    <Typography variant={"h5"} color={"inherit"}>
                        {"575 pts"}
                    </Typography>
                </div>
            </Grid>

        </Grid>
    </Grid>;

const LeaderBoardNeighbor = props =>
    <Grid item xs={12}>
        <Grid container spacing={16}>

            <Grid item xs={8}>
                <Grid container spacing={16}>

                    <Grid item xs={2}>
                        <div className={props.classes.position}>
                            <Typography variant={"h5"} color={"textSecondary"}>
                                {"5"}
                            </Typography>
                        </div>
                    </Grid>

                    <Grid item xs={2}>
                        <Grid container justify={"center"} alignItems={"center"}>
                            <Grid item>
                                <Avatar src={props.profile.photoURL} className={props.classes.bigAvatar}/>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={8}>
                        <div className={props.classes.name}>
                            <Typography variant={"body1"} color={"textSecondary"}>
                                {props.profile.displayName}
                            </Typography>
                        </div>
                    </Grid>

                </Grid>
            </Grid>

            <Grid item xs={4}>
                <div className={props.classes.points}>
                    <img src={MedalIcon} className={props.classes.medalIcon}/>
                    <Typography variant={"h5"} color={"textSecondary"}>
                        {"575 pts"}
                    </Typography>
                </div>
            </Grid>

        </Grid>
    </Grid>;

const LeaderBoardTable = props =>
    <Grid container spacing={24}>
        <LeaderBoardNeighbor profile={require('../../json/norealuser')} {...props}/>
        <LeaderBoardHost profile={require('../../json/norealuser')} {...props}/>
        <LeaderBoardNeighbor profile={require('../../json/norealuser')} {...props}/>
    </Grid>;

const LeaderBoard = props =>
    <LeaderBoardTable {...props}/>;

export default withStyles(styles)(LeaderBoard);
