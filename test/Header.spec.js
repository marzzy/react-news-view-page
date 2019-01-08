
import React from 'react';
import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MainHeader from '../src/js/components/container/HeaderContainer';

configure({ adapter: new Adapter() });

describe('HeaderContaine', () => {
  it('have app title', () => {
    const wrapper = shallow(<MainHeader />);
    expect(wrapper.find('.App-title')).to.have.lengthOf(1);
  });
});