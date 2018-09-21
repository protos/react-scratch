import React, { Component } from 'react';

class AppButton extends Component {
    render() {
        if (this.props.disabled) {
            return (
                <button className="AppButton" disabled>{this.props.label}</button>
            );
        } else {
            return (
                <button className="AppButton">{this.props.label}</button>
            );
        }
    }
}

export default AppButton;