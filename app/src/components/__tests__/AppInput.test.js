import React from 'react';
import ReactDOM from 'react-dom';
import AppInput from '../AppInput';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AppInput />, div);
});