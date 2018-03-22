import React, { Component } from 'react';

class AppDropdown extends Component {

    constructor(props) {
        super(props);
        this.state = {"selected":  ""};
    }

    render() {
        let options = "";
        if (this.props.list) {
            options = this.props.list.map((option, index) => {
                return(<option key={index} value={option.label}>{option.label}</option>);
            });
        }
        return (
            <select className="AppDropdown" onChange={this.onChange.bind(this)}>
                <option value="">{this.props.label}</option>
                {options}
            </select>
        );
    }

    onChange(evt) {
        this.setState({
            "selected": evt.target.value
        });
        this.props.onSelect(evt.target.value);
    }
}


export default AppDropdown;
