import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Favorite from "@material-ui/icons/Star";

import Button from "@material-ui/core/Button";
import Snackbar from "../components/comp-snackbar.jsx";

import styles from "./view-settings-styles";
import Subtitle from "../components/comp-subtitle";

import Icon from '@material-ui/icons/Settings'

class Notifications extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tl: false,
            tc: false,
            tr: false,
            bl: false,
            bc: false,
            br: false
        };
    }

    componentWillUnmount() {
        let id = window.setTimeout(null, 0);
        while (id--) window.clearTimeout(id);
    }

    showNotification(place) {
        let x = [];
        x[place] = true;
        this.setState(x);
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Subtitle text="Configuración" icon={Icon}/>
                <hr/>

                <Button color="success" onClick={() => this.showNotification("br")}>
                    Toca para crear un notificación
                </Button>

                <Snackbar
                    place="br"
                    color="primary"
                    icon={Favorite}
                    message="Has ganado un trofeo por tu primera visita a la aplicación"
                    open={this.state.br}
                    closeNotification={() => this.setState({ br: false })}
                    close
                />

            </div>
        );
    }
}

export default withStyles(styles)(Notifications);
