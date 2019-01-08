
import React from 'react';
import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Poll from '../src/js/components/container/PollForm';
import { Submit, Radio } from "../src/js/components/presentational/Input";


configure({ adapter: new Adapter() });

describe('Poll', () => {
  it('have 3 instance of Radio component', () => {
    const wrapper = shallow(<Poll />);
    expect(wrapper.find(Radio)).to.have.length(3);
  });
  it('have an instance of Submit component', () => {
    const wrapper = shallow(<Poll />);
    expect(wrapper.find(Submit)).to.have.length(1);
  });
  it('have only one form', () => {
    const wrapper = shallow(<Poll />);
    expect(wrapper.find('form')).to.have.length(1);
  });
  it('first initial of how many times send pull req', () => {
    const wrapper = shallow(<Poll />);
    expect(wrapper.state().counter).to.equal(0);
  });
  it('if before choose one item click submit,poll counter must not be changed', () => {
    // setup
    const wrapper = shallow(<Poll />);
    const wrapperForm = wrapper.find('form');
    const mockedEventObj = { preventDefault: () => {} };
    // action
    wrapperForm.simulate('submit', mockedEventObj);
    // assertion
    expect(wrapper.state().counter).to.equal(0);
  });
  it('if before choose one item click submit,err should be set', () => {
    // setup
    const wrapper = shallow(<Poll />);
    const wrapperForm = wrapper.find('form');
    const mockedEventObj = { preventDefault: () => {} };
    // action
    wrapperForm.simulate('submit', mockedEventObj);
    // assertion
    expect(wrapper.state().errmsg).to.equal('لطفا ابتدا یکی از گزینه ها را انتخاب فرمایید.');
  });
  // it('if before choose one item ,all of the radiobox cecked is false', () => {
  //   // setup
  //   const wrapper = shallow(<Poll />);
  //   const wrapper1thRadio = wrapper.find(Radio).at(1);
  //   // assertion
  //   expect(wrapper1thRadio.props().checked).to.equal(false);
  // });
  // it('after choose first item and click submit,poll counter should be encreased one', () => {
  //   // setup
  //   const wrapper = shallow(<Poll />);
  //   const wrapper1thRadio = wrapper.find(Radio).at(1);
  //   const mockedTargetObj = { target: { checked : true } };
  //   // action
  //   wrapper1thRadio.simulate('change', mockedTargetObj);
  //   // assertion
  //   expect(wrapper.state().selectedval).to.equal("first-1th");
  // });
});