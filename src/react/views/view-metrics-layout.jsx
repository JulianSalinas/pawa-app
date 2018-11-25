import React from "react";
import styles from "./view-metrics-styles";
import withStyles from "@material-ui/core/styles/withStyles";

import Subtitle from '../components/comp-subtitle'
import ManSitting from "../components/comp-man-sitting";
import PerformMeter from '../components/comp-performance-face'
import OutlinedSelect from "../components/comp-outlined-select";
import Progress from "../components/comp-progress-metric";
import Grid from "@material-ui/core/Grid/Grid";
import {primaryColor} from "../dashboard/commons-styles";

const performValues = ["Personal", "Grupal"];
const intevalValues = ["Hoy", "Semanal", "Mensual"];
const Icon = require('../../assets/icon-metrics-accent.png');

const ProgressIcon = props =>
    typeof props.icon === "string" ?
        <img style={{marginRight:"5px"}} src={props.icon} alt="img" width="24" height="24" /> :
        <props.icon/>;

const sectionText =  {
    fontSize: "16pt",
    fontWeight: "500",
    color: primaryColor,
    display: "inline-block",
    verticalAlign: "middle"
};

class Dashboard extends React.Component {

    state = {
        spacing: '16',
    };

    handleChange = key => (event, value) => {
        this.setState({
            [key]: value,
        });
    };

    render() {
        const { classes } = this.props;
        const { spacing } = this.state;
        return (
            <div>
                <Subtitle text="Estadísticas" icon={Icon}/>
                {/*<hr/>*/}

                <Grid container style={{
                    marginTop: "40px",
                    // backgroundColor: "#ef39ff",
                    padding: "20px 0"
                }} spacing={Number(spacing)}>
                    <Grid item>
                        <OutlinedSelect label={"Rendimiento"} values={performValues}/>
                    </Grid>
                    <Grid item>
                        <OutlinedSelect label={"Intervalo"} values={intevalValues}/>
                    </Grid>
                </Grid>

                <Grid container style={{
                    marginTop: "10px",
                    minHeight:"500px",
                    // backgroundColor: "#3dff57",
                    padding: "10px"
                }} spacing={Number(spacing)}>

                    <Grid item style={{
                        minHeight:"200px",
                        // backgroundColor: "#ffea93"
                    }} xs={6}>
                        <div style={sectionText}>{"Tú"}</div>
                        <div style={{margin: "20px"}}/>
                        <div style={{
                            // backgroundColor: "#ff6ba1",
                            paddingLeft: "2vw"
                        }}>
                            <ManSitting/>
                        </div>
                    </Grid>

                    <Grid container style={{
                        minHeight:"200px",
                        // backgroundColor: "#ff9121"
                    }} xs={6}>
                        <Grid item style={{
                            minHeight:"200px",
                            // backgroundColor: "#1b34ff"
                        }} xs={12}>

                            <div style={sectionText}>{"Rendimiento"}</div>
                            <div style={{
                                height: "100%",
                                // backgroundColor: "#505",
                                padding: "25px 0px"
                            }}>
                                <PerformMeter style={{
                                    verticalAlign: "center"
                                }} value={90}/>
                            </div>

                        </Grid>

                        <Grid container style={{
                            minHeight:"200px",
                            // backgroundColor: "#ff0044"
                        }} xs={12}>

                            <div style={sectionText}>{"Progreso"}</div>
                            <div style={{margin: "20px"}}/>

                            <Grid style={{
                                // backgroundColor: "#F12"
                            }} item xs={12}>

                                <Grid container justify="center" spacing={Number(24)}>
                                    {["Tiempo", "Pausas activas", "Postura"].map(value => (
                                        <Grid key={value} item>
                                            <Progress label={value}/>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </div>
        );
    }
}

export default withStyles(styles)(Dashboard);
