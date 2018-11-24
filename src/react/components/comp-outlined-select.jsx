import React, { Component } from "react";

import ReactDOM from "react-dom";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const selectStyle = {
    margin: "2px",
    minWidth: "150px"
};

class OutlinedSelect extends Component {

    state = { labelWidth: 0, currentValue: 0 };

    componentDidMount() {
        this.setState({
            labelWidth: ReactDOM.findDOMNode(this.InputLabel).offsetWidth,
        });
    }

    handleChange = event => {
        this.setState({ currentValue: event.target.value });
    };

    render() {

        return (
            <FormControl variant="outlined" color="primary" style={selectStyle}>
                <InputLabel ref={ref => { this.InputLabel= ref; }}>
                    {this.props.label}
                </InputLabel>
                <Select
                    color="primary"
                    value={this.state.currentValue}
                    onChange={this.handleChange}
                    input={<OutlinedInput labelWidth={this.state.labelWidth}/>}>
                    {
                        this.props.values.map((value, key) =>
                            <MenuItem value={key}>{value}</MenuItem>
                        )
                    }
                </Select>
            </FormControl>
        );
    }
}

export default OutlinedSelect;
