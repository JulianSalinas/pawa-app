import React, { Component } from "react";
import { Button } from "mdbreact";

class ThemedButton extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            theme: null, 
            dropdownOpen: false, 
            allThemes: ["primary", "secondary", "success", "info", "warning", "dager"]
        }
    }

    toggleDropdown = () => {
        this.setState({ dropdownOpen: !this.state.dropdownOpen });
    };

    resetTheme = evt => {
        evt.preventDefault();
        this.setState({ theme: null });
    };

    randomTheme = evt => {
        evt.preventDefault();
        const themes = this.state.allThemes;
        this.setState({ theme: themes[Math.floor(Math.random() * themes.length)] });
    };

    chooseTheme = (theme, evt) => {
        evt.preventDefault();
        this.setState({ theme });
    };

    render() {

        const { theme } = this.state;
        const themeClass = theme ? theme.toLowerCase() : "secondary";

        return (
            <Button onClick={e => this.randomTheme(e)} color={themeClass}>{theme || "Custom"} Theme</Button>
        );

    }
  
}

export default ThemedButton;