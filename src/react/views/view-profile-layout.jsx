import React, { Component } from 'react'
import styles from "./view-profile-styles";
import withStyles from "@material-ui/core/styles/withStyles";

import Subtitle from '../components/comp-subtitle'
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";
import Divider from "@material-ui/core/Divider/Divider";
import TextField from "@material-ui/core/TextField/TextField";
import OutlinedSelect from "../components/comp-outlined-select";
import Avatar from "@material-ui/core/Avatar/Avatar";
import Button from "@material-ui/core/Button/Button";
const Icon = require('../../assets/app-icons/icon-profile-accent.png');

let UserImageStyle = {
    width: '75px',
    height: '75px'
};

const ProfileTitle = () =>
    <Grid item xs={12}>
        <Subtitle text="Perfil" icon={Icon}/>
    </Grid>;

const ProfileInformation = props =>
    <Grid item xs={12}>
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

const ProfileImage = props =>
    <Grid item xs={12}>
        <Paper className={props.classes.paper} elevation={0}>
            <Grid container spacing={32}>
                <Grid item xs={12}>
                    <Typography variant={"subtitle1"} color={"textSecondary"} gutterBottom>
                        Imagen de perfil
                    </Typography>
                    <Divider variant={"middle"} light={true}/>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={8} align={"center"}>
                        <Grid item xs={12}>
                            <Avatar src={require("../../assets/testing-utils/img-material-1.png")}
                                    className={props.classes.profile}/>
                        </Grid>
                        <Grid item xs={12}>
                            <Button size="small" color="primary">
                                Subir nueva imagen
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    </Grid>;

const ProfileAvatar = props =>
    <Grid item xs={12} md={8}>
        <Paper className={props.classes.paper} elevation={0}>
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <Typography variant={"subtitle1"} color={"textSecondary"} gutterBottom>
                        Avatar
                    </Typography>
                    <Divider variant={"middle"} light={true}/>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={24}>
                        <Grid item xs={12} md={6}>
                            <div className={props.classes.avatar}>
                                <img src={require('../../assets/custom-clothes/custom-man-1.svg')}/>
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
                                    [1,2,3].map((i, key) =>
                                        <Grid item xs={4}>
                                            <Paper className={props.classes.paper} elevation={2}>
                                                <img src={require(`../../assets/custom-clothes/custom-man-${i}.svg`)}/>
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
                <Grid item xs={12} md={4}>
                    <Grid container spacing={24}>
                        <ProfileImage {...props}/>
                        <ProfileInformation {...props}/>
                    </Grid>
                </Grid>

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