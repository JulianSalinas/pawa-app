import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import withStyles from "@material-ui/core/styles/withStyles";


const styles = theme => ({
    theme: {
        width:"100%",
        color:"#FFF",
        textAlign:"center"
    },
    offTheme: {
        backgroundColor: theme.palette.secondary.main,
        "&:hover": {backgroundColor: theme.palette.secondary.dark}
    },
    onTheme: {
        backgroundColor: theme.palette.primary.main,
        "&:hover": {backgroundColor: theme.palette.primary.dark,}
    }
});

class TurnedButton extends Component {

    state = {
        active: false,
        text: 'apagado',
        theme: this.props.classes.offTheme,
    };

    changeTheme = evt => {
        evt.preventDefault();
        const { offTheme, onTheme } = this.props.classes;
        this.setState({
            active: !this.state.active,
            theme: this.state.active ? offTheme : onTheme,
            text: this.state.active ? 'apagado' : 'encendido'
        });
    };

    render() {
        return <Button
            variant="contained"
            className={`${this.props.classes.theme} ${this.state.theme}`}
            onClick={e => { this.changeTheme(e) }}>{this.state.text}</Button>;
    }
  
}

export default withStyles(styles)(TurnedButton);