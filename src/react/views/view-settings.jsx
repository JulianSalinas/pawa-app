import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Favorite from "@material-ui/icons/Favorite";

import Button from "@material-ui/core/Button";
import Snackbar from "../components/comp-snackbar.jsx";

const styles = {
    cardCategoryWhite: {
        "&,& a,& a:hover,& a:focus": {
            color: "rgba(255,255,255,.62)",
            margin: "0",
            fontSize: "14px",
            marginTop: "0",
            marginBottom: "0"
        },
        "& a,& a:hover,& a:focus": {
            color: "#FFFFFF"
        }
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1"
        }
    }
};

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
                <div>
                    <div>Configuración</div>
                    <hr/>
                </div>;

                <Button color="success" onClick={() => this.showNotification("br")}>
                    Toca para crear un notificación
                </Button>

                <Snackbar
                    place="br"
                    color="success"
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
