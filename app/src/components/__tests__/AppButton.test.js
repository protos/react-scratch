import React from 'react';
import { shallow, mount } from 'enzyme';
import AppButton from '../AppButton';


it('renders without crashing', () => {
    mount(<AppButton />);
});

it('renders disabled when props.disabled is set to true', () => {
    const appButton = mount(<AppButton label="Label" disabled="true"/>);
    debugger;
    expect(appButton.contains(<button className="AppButton" disabled>Label</button>)).toEqual(true);
});

it('renders enabled when props.disabled is set to false', () => {
    const appButton = mount(<AppButton label="Label" />);
    expect(appButton.contains(<button className="AppButton">Label</button>)).toEqual(true);
});