import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class TurnedButton extends Component {

    state = {
        active: false,
        text: 'apagado',
        theme: 'btn-light'
    };

    changeTheme = evt => {
        evt.preventDefault();
        this.setState({
            active: !this.state.active,
            text: this.state.active ? 'apagado' : 'encendido',
            theme: this.state.active ? 'btn-light' : 'btn-success'
        });
    };

    render() {
        const { theme } = this.state;
        const themeClass = theme ? theme.toLowerCase() : 'secondary';
        return <Button
            className={'btn ' + themeClass }
            style={{ display:"block", textAlign:"center", width:"98%" }}
            onClick={e => { this.changeTheme(e) }}>{this.state.text}</Button>;
    }
  
}

export default TurnedButton;