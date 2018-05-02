import React from 'react';
import { shallow } from 'enzyme';
import App from './app';

describe('<App/>', () => {
  it('renders without throwing', () => {
    expect(() => shallow(<App />)).not.toThrow();
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
