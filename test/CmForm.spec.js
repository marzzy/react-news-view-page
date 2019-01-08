
import React from 'react';
import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FormContainer from '../src/js/components/container/FormContainer';

configure({ adapter: new Adapter() });

describe('Comment Form', () => {
  it('have an instance of Input component with attr "text"', () => {
    const wrapper = shallow(<FormContainer />);
    expect(wrapper.find('Input').find({ type : "text" })).to.have.lengthOf(1);
  });
});