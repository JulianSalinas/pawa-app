import React, { Component } from 'react'
import styles from "./view-profile-styles";
import withStyles from "@material-ui/core/styles/withStyles";

import Subtitle from '../components/comp-subtitle'
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";
import Divider from "@material-ui/core/Divider/Divider";
import Progress from "../components/comp-progress-metric";
import TextField from "@material-ui/core/TextField/TextField";
import OutlinedSelect from "../components/comp-outlined-select";
import ManSitting from "../components/comp-man-sitting";
const Icon = require('../../assets/icon-profile-accent.png');

let UserImageStyle = {
    width: '75px',
    height: '75px'
};

const ProfileTitle = () =>
    <Grid item xs={12}>
        <Subtitle text="Perfil" icon={Icon}/>
    </Grid>;

let UserInformation = props =>
    <div>
        <img style={UserImageStyle} src={props.user.photoURL} alt={props.user.displayName}/>
        <hr/>
        {props.user.displayName}
        <hr/>
        {props.user.email}
    </div>;

const ProfileInformation = props =>
    <Grid item xs={12} md={4}>
        <Paper className={props.classes.paper} elevation={0}>
            <Grid container spacing={32}>
                <Grid item xs={12}>
                    <Typography variant={"subtitle1"} color={"textSecondary"} gutterBottom>
                        Información
                    </Typography>
                    <Divider variant={"middle"} light={true}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Alias"
                        fullWidth
                        variant="outlined"
                        InputLabelProps={{ shrink: true }}
                        placeholder="¿Cómo quieres que te vean los demás?"  />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Descripción"
                        fullWidth
                        variant="outlined"
                        InputLabelProps={{ shrink: true }}
                        placeholder="¿Cómo te describen los demás?"  />
                </Grid>
                <Grid item xs={12}>
                    <OutlinedSelect
                        fullWidth
                        label={"Género"}
                        values={["Masculino", "Femenino", "Alien", "Cyborg", "Indefinido"]}/>
                </Grid>
            </Grid>
        </Paper>
    </Grid>;

const ProfileAvatar = props =>
    <Grid item xs={12} md={8}>
        <Paper className={props.classes.paper} elevation={0}>
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <Typography variant={"subtitle1"} color={"inherit"} gutterBottom>
                        Avatar
                    </Typography>
                    <Divider variant={"middle"} light={true}/>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={24}>
                        <Grid item xs={12} md={6}>
                            <div className={props.classes.avatar}>
                                <img src={require('../../assets/custom-clothes/custom-man.svg')}/>
                            </div>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Grid container spacing={24}>
                                <Grid item xs={12}>
                                    <OutlinedSelect
                                        fullWidth
                                        label={"Género"}
                                        values={["Camisa", "Pantalon", "Sombrero", "Calzado"]}/>
                                </Grid>
                                {
                                    [1,2,3,4,5,6,7,8,9].map((obj, key) =>
                                        <Grid item xs={4}>
                                            <Paper className={props.classes.paper} elevation={2}>
                                                {/*<img src={require('../../assets/icon-profile-accent.png')}/>*/}
                                            </Paper>
                                        </Grid>
                                    )
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    </Grid>;

let ProfileLayout = props =>
    <Grid container className={props.classes.root} spacing={24}>
        <ProfileTitle {...props}/>
        <Grid item xs={12}>
            <Grid container spacing={24} alignItems={"stretch"}>
                <ProfileInformation {...props}/>
                <ProfileAvatar {...props}/>
            </Grid>
        </Grid>
    </Grid>;

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = { user: require('../../json/norealuser-1') };
    }

    render() {
        return <ProfileLayout user={ this.state.user } {...this.props}/>;
    }

}

export default withStyles(styles)(Profile);