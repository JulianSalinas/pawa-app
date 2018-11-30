import React, { Component } from "react";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";

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
        <img style={ProfileIconStyle} src={props.icon} alt="img" /> :
        <props.icon/>;


const LeaderBoardNeighbor = props =>
    <Grid container style={{
        // minHeight: "150px",
        // padding: "2px",
        // backgroundColor: "#3e3e3e"
    }} xs={12}>

        <Grid container style={{
            // minHeight: "150px",
            padding: "15px",
            // backgroundColor: "#9e387f"
        }} xs={1}>

        </Grid>

        <Grid container style={{
            // minHeight: "150px",
            padding: "15px",
            border: "1px solid #999999", // #dedede
            // backgroundColor: "#59489e"
        }} xs={8}>

            <Grid item style={{
                // backgroundColor: "#2a2851"
                paddingLeft: "2vw"
            }} xs={2}>
                <ProfileIcon icon={require('../../assets/icon-leader-down.png')}/>
            </Grid>

            <Grid item style={{
                // backgroundColor: "#a15eff"
            }} xs={4}>
                <div style={ProfileDisplayNameStyle}>Julian Salinas</div>
            </Grid>

            <Grid item style={{
                // backgroundColor: "#8450d4",
            }} xs={4}>
                <div style={MedalTextStyle}>
                    <img style={medalIcon} src={MedalIcon} alt="img"/>
                    Bronce
                </div>
            </Grid>

        </Grid>

    </Grid>;

const LeaderBoardHost = props =>
    <Grid container xs={12}>

        <Grid container style={{
            backgroundColor: '#192d2f'
        }} xs={1}>
            <Typography style={{
                color: "#fff",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }} variant="h3">5</Typography>
        </Grid>

        <Grid container style={{
            // minHeight: "150px",
            padding: "15px",
            backgroundColor: "#66b5bc"
        }} xs={8}>

            <Grid item style={{
                paddingLeft: "2vw"
                // backgroundColor: "#2a2851"
            }} xs={2}>
                <ProfileIcon icon={require('../../assets/icon-leader-down.png')}/>
            </Grid>

            <Grid item style={{
                // backgroundColor: "#a15eff"
            }} xs={4}>
                <div style={ProfileDisplayNameStyle}>Julian Salinas</div>
            </Grid>

            <Grid item style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // backgroundColor: "#8450d4"
            }} xs={4}>
                <PointsInfo {...props}/>
            </Grid>
        </Grid>

    </Grid>;

const LeaderBoardTable = props =>
    <Grid container xs={12}>
        <LeaderBoardNeighbor {...props}/>
        <LeaderBoardHost {...props}/>
        <LeaderBoardNeighbor {...props}/>
    </Grid>;

const LeaderBoard = props =>
    <LeaderBoardTable profile={require('../../json/norealuser')}/>;

export default LeaderBoard;
