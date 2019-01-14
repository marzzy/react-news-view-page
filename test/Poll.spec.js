
import Poll from '../src/js/components/container/PollForm';
import { Submit } from "../src/js/components/presentational/Input";

describe('Poll', () => {
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

  it('checked one of the radiobox', () => {
    // setup
    const wrapper = shallow(<Poll />);
    // action
    wrapper.find('#radio-con').simulate('change', { target: { value: 'first-1th'}, preventDefault: () => {} });
    // assert
    expect(wrapper.state().selectedval).to.equal('first-1th');
  });

  it('checked one of the radiobox then submit it(counter must be encreased)', () => {
    // setup
    const wrapper = shallow(<Poll />);
    // assert
    expect(wrapper.state().counter).to.equal(0);
    // action
    wrapper.find('#radio-con').simulate('change', { target: { value: 'first-1th'}, preventDefault: () => {} });
    wrapper.find('form').simulate('submit',{preventDefault: () => {} });
    // assert
    expect(wrapper.state().counter).to.equal(1);
    // action
    wrapper.find('form').simulate('submit',{preventDefault: () => {} });
    // assert
    expect(wrapper.state().counter).to.equal(2);
  });
  
});