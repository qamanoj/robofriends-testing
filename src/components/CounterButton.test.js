import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';



it('renders without crashing', () => {
  expect(shallow(<CounterButton />)).toMatchSnapshot();
});

it('correctly increments the counter', () => {
  const mockColor = 'red'
  const wrapper = shallow(<CounterButton color={mockColor} />)
  wrapper.find('[id="counter"]').simulate('click');
  wrapper.find('[id="counter"]').simulate('click');
  expect(wrapper.state()).toEqual({ count: 2 });
  wrapper.find('[id="counter"]').simulate('click');
  expect(wrapper.state()).toEqual({ count: 3 });
  wrapper.find('[id="counter"]').simulate('click');
  expect(wrapper.state()).toEqual({ count: 4 });
  expect(wrapper.props().color).toEqual('red')
})
