import React, { Component } from 'react';

class AppInput extends Component {
    render() {
        return (
            <input type="text" className="AppTextInput" onInput={this.onTextChange.bind(this)}/>
        );
    }

    onTextChange(evt) {
        this.props.onTextChange(evt.target.value);
    }

}


export default AppInput;