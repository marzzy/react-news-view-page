
// import { sinon } from 'sinon';
import FormContainer from '../src/js/components/container/FormContainer';
// import { Input } from "../src/js/components/presentational/Input";



describe('Comment Form', () => {
  it('have an instance of Input component with attr "text"', () => {
    const wrapper = shallow(<FormContainer />);
    expect(wrapper.find('Input').find({ type: "text" })).to.have.lengthOf(1);
  });

  it('cant submit before fill the inputs', () => {
    // setup
    const wrapper = shallow(<FormContainer />);
    const mockedEventObj = { preventDefault: () => { } };
    // action
    wrapper.find('form').simulate('submit', mockedEventObj);
    // assert
    expect(wrapper.state().name.sFlag).to.equal('fa-wrong');
    expect(wrapper.state().email.sFlag).to.equal('fa-wrong');
    expect(wrapper.state().txtbody.sFlag).to.equal('fa-wrong');
  });

  it('have to fill all 3 inputs in right way to submit', () => {
    // setup
    const wrapper = shallow(<FormContainer />);
    const mockedEventObj = { preventDefault: () => { } };
    // assert
    expect(wrapper.state().sendCm.sFlag).to.equal('');
    // action
    wrapper.setState({ name: { sFlag: 'fa-right', val: 'sara' } });
    wrapper.update();
    wrapper.find('form').simulate('submit', mockedEventObj);
    // assert
    expect(wrapper.state().name.sFlag).to.equal('fa-right');
    expect(wrapper.state().email.sFlag).to.equal('fa-wrong');
    expect(wrapper.state().txtbody.sFlag).to.equal('fa-wrong');
    expect(wrapper.state().sendCm.sFlag).to.equal('');
    // action
    wrapper.setState({ email: { sFlag: 'fa-right' } });
    wrapper.setState({ name: { sFlag: 'fa-right' } });
    wrapper.setState({ txtbody: { sFlag: 'fa-right' } });
    wrapper.update();
    wrapper.find('form').simulate('submit', mockedEventObj);
    // assert
    expect(wrapper.state().sendCm.sFlag).to.equal('fa-right');

  });

  it('every one of the item that has warning should be err when submit', () => {
    // setup
    const wrapper = shallow(<FormContainer />);
    const mockedEventObj = { preventDefault: () => { } };
    // action
    expect(wrapper.state().sendCm.sFlag).to.equal('');
    wrapper.setState({ email: { sFlag: 'fa-right' } });
    wrapper.setState({ name: { sFlag: 'fa-right' } });
    wrapper.setState({ txtbody: { sFlag: 'fa-warning' } });
    wrapper.update();
    wrapper.find('form').simulate('submit', mockedEventObj);
    // assert
    expect(wrapper.state().sendCm.sFlag).to.equal('');
    expect(wrapper.state().txtbody.sFlag).to.equal('fa-wrong');
  });

  // it('check status for Input - name ', () => {
  //   // setup
  //   const fillName = sinon.spy();
  //   const wrapper = mount(<FormContainer />);
  //   const mockedEventObj = { preventDefault: () => {},target : {}};

  //   // 1.could not acc the one letter as a name
  //   // action
  //   const inputWrapper = mount(<Input id="name" value={fillName} />);
  //   wrapper.setState({ name: { val: 'saraaa' } });
  //   (wrapper.find(Input).find({ id: "name" })).simulate('change', mockedEventObj);
  //   // assert
  //   expect(wrapper.state().name.sFlag).to.equal('fa-right');
    
  // });
  // it('simulates click events', () => {
  //   const onButtonClick = sinon.spy();
  //   const wrapper = mount((
  //     <Foo onButtonClick={onButtonClick} />
  //   ));
  //   wrapper.find('button').simulate('click');
  //   expect(onButtonClick).to.have.property('callCount', 1);
  // });

  // it('check status for Input - name ', () => {
  //   // setup
  //   const wrapper = shallow(<FormContainer />);
  //   const mockedEventObj = { preventDefault: () => {},target : {}};
  //   // 1.could not acc the one letter as a name
  //   // action
  //   wrapper.setState({ name: { val: 'saraaa' } });
  //   (wrapper.find(Input).find({ id: "name" })).simulate('change', mockedEventObj);
  //   // assert
  //   expect(wrapper.state().name.sFlag).to.equal('fa-right');
    
  // });


});