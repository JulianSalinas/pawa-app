import React from "react";
import styles from "./view-metrics-styles";
import withStyles from "@material-ui/core/styles/withStyles";

import Subtitle from '../components/comp-subtitle'
import Grid from "@material-ui/core/Grid/Grid";
import OutlinedSelect from "../components/comp-outlined-select";
import LeaderBoard from "../components/comp-leaderboard-table";
import {primaryColor} from "../dashboard/commons-styles";

const performValues = ["Personal", "Grupal"];
const intevalValues = ["Hoy", "Semanal", "Mensual"];
const Icon = require('../../assets/icon-achivement-accent.png');


const sectionText =  {
    fontSize: "20pt",
    fontWeight: "300",
    color: primaryColor,
    verticalAlign: "middle"
};


class Dashboard extends React.Component {

    state = {
        spacing: '16',
    };

    render() {

        const { classes } = this.props;
        const { spacing } = this.state;

        return (
            <div>
                <Subtitle text="Logros" icon={Icon}/>

                <Grid container style={{
                    marginTop: "40px",
                    // backgroundColor: "#ef39ff",
                    padding: "20px 0"
                }} spacing={Number(16)}>
                    <Grid item>
                        <OutlinedSelect label={"Rendimiento"} values={performValues}/>
                    </Grid>
                    <Grid item>
                        <OutlinedSelect label={"Intervalo"} values={intevalValues}/>
                    </Grid>
                </Grid>

                <div style={{margin: "25px 0px"}}/>
                <div style={sectionText}>{"Leaderboard"}</div>
                <div style={{margin: "50px 0px"}}/>

                <LeaderBoard/>

            </div>
        );
    }
}

export default withStyles(styles)(Dashboard);
