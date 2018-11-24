import React from "react";
import styles from "./view-metrics-styles";
import withStyles from "@material-ui/core/styles/withStyles";

import Subtitle from '../components/comp-subtitle'
import ManSitting from "../components/comp-man-sitting";
import PerformMeter from '../components/comp-performance-face'
import OutlinedSelect from "../components/comp-outlined-select";
import Progress from "../components/comp-progress-metric";
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import FormLabel from "@material-ui/core/FormLabel/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Radio from "@material-ui/core/Radio/Radio";

const performValues = ["Personal", "Grupal"];
const intevalValues = ["Hoy", "Semanal", "Mensual"];
const Icon = require('../../assets/icon-metrics-accent.png');

const ProgressIcon = props =>
    typeof props.icon === "string" ?
        <img style={{marginRight:"5px"}} src={props.icon} alt="img" width="24" height="24" /> :
        <props.icon/>;

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
                <hr/>

                <div style={{margin:"25px"}}>

                </div>
                <PerformMeter value={50}/>

                <div style={{margin:"25px"}}>

                </div>
                <form className={classes.root} autoComplete="on">
                    <OutlinedSelect label={"Rendimiento"} values={performValues}/>
                    <OutlinedSelect label={"Intervalo"} values={intevalValues}/>
                </form>

                <div style={{margin:"25px"}}>

                </div>
                <ManSitting/>

                <div style={{margin:"25px"}}>

                </div>


                <Grid container className={classes.root} spacing={16}>
                    <Grid style={{backgroundColor: "#F12"}} item xs={12}>
                        <Grid container className={classes.demo} spacing={Number(spacing)}>
                            {["Tiempo", "Pausas activas", "Postura"].map(value => (
                                <Grid key={value} item>
                                    <Paper className={classes.paper}>
                                        <Progress label={"Tiempo"}/>
                                        <div style={{textAlign: 'center', marginTop: '10px'}}>
                                            {/*<ProgressIcon icon={require('../../assets/icon-check.png')}/>*/}
                                            {value}
                                        </div>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid style={{backgroundColor: "#F12"}} item xs={12}>
                        <Paper className={classes.control}>
                            <Grid container>
                                <Grid item>
                                    <FormLabel>spacing</FormLabel>
                                    <RadioGroup
                                        name="spacing"
                                        aria-label="Spacing"
                                        value={spacing}
                                        onChange={this.handleChange('spacing')}
                                        row
                                    >
                                        <FormControlLabel value="0" control={<Radio />} label="0" />
                                        <FormControlLabel value="8" control={<Radio />} label="8" />
                                        <FormControlLabel value="16" control={<Radio />} label="16" />
                                        <FormControlLabel value="24" control={<Radio />} label="24" />
                                        <FormControlLabel value="32" control={<Radio />} label="32" />
                                        <FormControlLabel value="40" control={<Radio />} label="40" />
                                    </RadioGroup>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>

            </div>
        );
    }
}

export default withStyles(styles)(Dashboard);
