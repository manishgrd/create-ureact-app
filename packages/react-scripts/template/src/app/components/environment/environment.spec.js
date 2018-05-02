import React from 'react';
import { shallow } from 'enzyme';
import Environment from './environment';

describe('<Environment />', () => {
  it('renders without throwing', () => {
    expect(() => shallow(<Environment />)).not.toThrow();
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<Environment />);
    expect(wrapper).toMatchSnapshot();
  });
});
