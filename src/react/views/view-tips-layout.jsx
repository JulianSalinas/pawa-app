import React, { Component } from "react";
import styles from "./view-tips-styles";
import withStyles from "@material-ui/core/styles/withStyles";

import Subtitle from '../components/comp-subtitle'
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";
import Divider from "@material-ui/core/Divider/Divider";
import PerformMeter from "../components/comp-performance-face";
import Card from "@material-ui/core/Card/Card";
import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import CardContent from "@material-ui/core/CardContent/CardContent";
import CardActions from "@material-ui/core/CardActions/CardActions";
import Button from "@material-ui/core/Button/Button";
const Icon = require('../../assets/app-icons/icon-tips-accent.png');

const LoremIpsum = require('../../json/loremipsum').full;
const LoremIpsumShort = require('../../json/loremipsum').short;
const PerfectPosition = require('../../assets/tips-images/perffect-position.svg');

const TipsTitle = () =>
    <Grid item xs={12}>
     <Subtitle text="Tips" icon={Icon}/>
    </Grid>;

const TipCurrentReading = props =>
    <Grid item xs={12}>
        <Paper className={props.classes.paperTip} elevation={0}>
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <Typography variant={"h5"} gutterBottom>
                        Postura perfecta según la National Geography
                    </Typography>
                    <img className={props.classes.img} src={PerfectPosition} />
                    <p className={props.classes.p}>
                        {LoremIpsum}
                    </p>
                </Grid>
            </Grid>
        </Paper>
    </Grid>;

const TipCard = props =>
    <Card className={props.classes.card} >
        <CardActionArea>
            <CardMedia
                className={props.classes.media}
                image="https://mi3-milideas.netdna-ssl.com/wp-content/uploads/silla-ergonomica.jpg"
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Ergonomía
                </Typography>
                <Typography component="p">
                    {LoremIpsumShort}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
                Leer más
            </Button>
        </CardActions>
    </Card>;

const TipCard2 = props =>
    <Card className={props.classes.card} >
        <CardActionArea>
            <CardMedia
                className={props.classes.media}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY7nJQC5wVk7tK3f5c3DS_8or6ZWp4MP2W4LqSOSIXDNIG9Qgr"
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Pausas activas
                </Typography>
                <Typography component="p">
                    {LoremIpsumShort}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
                Leer más
            </Button>
        </CardActions>
    </Card>;

const TipCard3 = props =>
    <Card className={props.classes.card} >
        <CardActionArea>
            <CardMedia
                className={props.classes.media}
                image="data:image/jpeg;base64,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"
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Nutrición
                </Typography>
                <Typography component="p">
                    {LoremIpsumShort}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
                Leer más
            </Button>
        </CardActions>
    </Card>;

const TipsLayout = props =>
    <Grid container className={props.classes.root} spacing={24}>
        <TipsTitle {...props}/>

        <Grid item xs={12}>
            <Grid container spacing={24} alignItems={"stretch"}>
                <TipCurrentReading {...props}/>
                <Grid item xs={12}>
                    <Grid container spacing={24} alignContent={"stretch"}>
                        <Grid item xs={12}>
                            <Typography variant={"subtitle1"} color={"textSecondary"} gutterBottom>
                                Otros consejos
                            </Typography>
                            <Divider variant={"middle"} light={true}/>
                        </Grid>
                        <Grid item xs={4}>
                            <TipCard {...props}/>
                        </Grid>
                        <Grid item xs={4}>
                            <TipCard2 {...props}/>
                        </Grid>
                        <Grid item xs={4}>
                            <TipCard3 {...props}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    </Grid>;

class TipsView extends Component {

    render() {
        return <TipsLayout {...this.props}/>
    }
}

export default withStyles(styles)(TipsView);
