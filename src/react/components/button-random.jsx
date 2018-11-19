import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

const themes = [
    'btn-primary', 'btn-secondary', 'btn-success',
    'btn btn-danger', 'btn btn-warning', 'btn btn-info',
    'btn btn-light', 'btn btn-dark', 'btn btn-link'
];

class ThemedButton extends Component {

    state = { theme: props.theme || 'btn-primary' };

    randomTheme = evt => {
        evt.preventDefault();
        this.setState({ theme: themes[Math.floor(Math.random() * themes.length)] });
    };

    render() {
        const { theme } = this.state;
        const themeClass = theme ? theme.toLowerCase() : 'secondary';
        return <Button
            className={'btn ' + themeClass }
            onClick={e => { this.randomTheme(e) }}>{themeClass}</Button>;
    }
  
}

export default ThemedButton;