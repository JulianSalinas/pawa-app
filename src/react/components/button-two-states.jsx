import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

const offTheme = {
    color: "#FFF",
    backgroundColor: "#999"
};

const onTheme = {
    color: "#FFF",
    backgroundColor: "#66b5bc"
};

const buttonTheme = theme => ({
    color: theme.color,
    backgroundColor: theme.backgroundColor,
    display:"block", textAlign:"center", width:"100%"
});

class TurnedButton extends Component {

    state = {
        active: false,
        text: 'apagado',
        theme: offTheme
    };

    changeTheme = evt => {
        evt.preventDefault();
        this.setState({
            active: !this.state.active,
            theme: this.state.active ? offTheme : onTheme,
            text: this.state.active ? 'apagado' : 'encendido'
        });
    };

    render() {
        return <Button
            variant="contained"
            style={buttonTheme(this.state.theme)}
            onClick={e => { this.changeTheme(e) }}>{this.state.text}</Button>;
    }
  
}

export default TurnedButton;