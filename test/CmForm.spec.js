
import FormContainer from '../src/js/components/container/FormContainer';

describe('Comment Form - general & submit check', () => {
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

  it('when mount FormContainer , it shound be render an real input on it',()=> {
    // setup
    const wrapper = mount(<FormContainer />);
    // assert
    expect(wrapper.find('input#name')).to.have.lengthOf(1);
    expect(wrapper.find('input')).to.have.lengthOf(3);
  });

  it('show write status when all of the input enter in the right way',() => {
    // setup
    const wrapper = mount(<FormContainer />);
    const rightname = { target: { value: 'sara', id: 'name' }, preventDefault: () => {} };
    const rightemail = { target: { value: 'example@gmail.com', id: 'email' }, preventDefault: () => {} };
    const righttxt = { target: { value: 'this is a good test', id: 'txtbody' }, preventDefault: () => {} };
    const mockedEventObj = { preventDefault: () => {} };
    // action
    wrapper.find('input#name').simulate('change', rightname);
    wrapper.find('input#name').simulate('keydown', { keyCode: 13 });

    wrapper.find('input#email').simulate('change', rightemail);
    wrapper.find('input#email').simulate('keydown', { keyCode: 13 });

    wrapper.find('textarea').simulate('change', righttxt);
    wrapper.find('textarea').simulate('keydown', { keyCode: 13 });

    wrapper.find('form').simulate('submit', mockedEventObj);
    // assert
    expect(wrapper.state().sendCm.sFlag).to.equal('fa-right');
  });
});

describe('Comment Form - Input #name changes',() => {
  it('enter in the right way', () => {
    // setup
    const wrapper = mount(<FormContainer />);
    // action 
    wrapper.find('input#name').simulate('change', { target: { value: 'sara', id: 'name' }, preventDefault: () => { } });
    wrapper.find('input#name').simulate('keydown', { keyCode: 13 });
    // assert
    expect(wrapper.state().name.val).to.equal('sara');
    expect(wrapper.state().name.sFlag).to.equal('fa-right');
  });

  it('enter enter bellow 2 char', () => {
    // setup
    const wrapper = mount(<FormContainer />);
    // action
    wrapper.find('input#name').simulate('change', { target: { value: 'a', id: 'name' }, preventDefault: () => { } });
    wrapper.find('input#name').simulate('keydown', { keyCode: 13 });
    // assert
    expect(wrapper.state().name.val).to.equal('a');
    expect(wrapper.state().name.sFlag).to.equal('fa-warning');
    // action - let it be empty
    wrapper.find('input#name').simulate('change', { target: { value: '', id: 'name' }, preventDefault: () => { } });
    wrapper.find('input#name').simulate('keydown', { keyCode: 13 });
    // assert
    expect(wrapper.state().name.val).to.equal('');
    expect(wrapper.state().name.sFlag).to.equal('fa-wrong');
  });

  it('let it be empty', () => {
    // setup
    const wrapper = mount(<FormContainer />);
    // action 
    wrapper.find('input#name').simulate('change', { target: { value: 'sara', id: 'name' }, preventDefault: () => { } });
    wrapper.find('input#name').simulate('keydown', { keyCode: 13 });
    // assert
    expect(wrapper.state().name.val).to.equal('sara');
    expect(wrapper.state().name.sFlag).to.equal('fa-right');
    // action
    wrapper.find('input#name').simulate('change', { target: { value: '', id: 'name' }, preventDefault: () => { } });
    wrapper.find('input#name').simulate('keydown', { keyCode: 13 });
    // assert
    expect(wrapper.state().name.val).to.equal('');
    expect(wrapper.state().name.sFlag).to.equal('fa-wrong');
  });
});

describe('Comment Form - Textarea changes',() => {
  it('enter in the right way', () => {
    // setup
    const wrapper = mount(<FormContainer />);
    // action 
    wrapper.find('textarea').simulate('change', { target: { value: 'this is a good test', id: 'txtbody' }, preventDefault: () => { } });
    wrapper.find('textarea').simulate('keydown', { keyCode: 13 });
    // assert
    expect(wrapper.state().txtbody.val).to.equal('this is a good test');
    expect(wrapper.state().txtbody.sFlag).to.equal('fa-right');
  });

  it('let it be empty', () => {
    // setup
    const wrapper = mount(<FormContainer />);
    // action 
    wrapper.find('textarea').simulate('change', { target: { value: 'this is a good test', id: 'txtbody' }, preventDefault: () => { } });
    wrapper.find('textarea').simulate('keydown', { keyCode: 13 });
    // assert
    expect(wrapper.state().txtbody.val).to.equal('this is a good test');
    expect(wrapper.state().txtbody.sFlag).to.equal('fa-right');
    // action 
    wrapper.find('textarea').simulate('change', { target: { value: '', id: 'txtbody' }, preventDefault: () => { } });
    wrapper.find('textarea').simulate('keydown', { keyCode: 13 });
    // assert
    expect(wrapper.state().txtbody.val).to.equal('');
    expect(wrapper.state().txtbody.sFlag).to.equal('fa-wrong');
  });
});

describe('Comment Form - Input #email changes',() => {
  it('enter in the right way',() => {
    // setup
    const wrapper = mount(<FormContainer />);
    // action
    wrapper.find('input#email').simulate('change',{target:{ value: 'example@gmil.com', id: 'email' } , preventDefault: () => {} });
    wrapper.find('input#email').simulate('keydown',{ keyCode: 13 });
    // assert
    expect(wrapper.state().email.val).to.equal('example@gmil.com');
    expect(wrapper.state().email.sFlag).to.equal('fa-right');
  });

  it('enter without @ ',()=>{
    // setup
    const wrapper = mount(<FormContainer />);
    // action - example
    wrapper.find('input#email').simulate('change',{ target: { value: 'example', id: 'email' }, preventDefault: () => {} });
    wrapper.find('input#email').simulate('keydown',{ keyCode: 13 });
    // assert
    expect(wrapper.state().email.val).to.equal('example');
    expect(wrapper.state().email.sFlag).to.equal('fa-warning');
    // action - example.gmail.com
    wrapper.find('input#email').simulate('change',{ target: { value: 'example.gmail.com', id: 'email' }, preventDefault: () => {} });
    wrapper.find('input#email').simulate('keydown',{ keyCode: 13 });
    // assert
    expect(wrapper.state().email.val).to.equal('example.gmail.com');
    expect(wrapper.state().email.sFlag).to.equal('fa-warning');
  });

  it('enter without . ',()=>{
    // setup
    const wrapper = mount(<FormContainer />);
    // action - example@
    wrapper.find('input#email').simulate('change',{ target: { value: 'example@', id: 'email' }, preventDefault: () => {} });
    wrapper.find('input#email').simulate('keydown',{ keyCode: 13 });
    // assert
    expect(wrapper.state().email.val).to.equal('example@');
    expect(wrapper.state().email.sFlag).to.equal('fa-warning');
    // action - example@gmailcom
    wrapper.find('input#email').simulate('change',{ target: { value: 'example@gmail@com', id: 'email' }, preventDefault: () => {} });
    wrapper.find('input#email').simulate('keydown',{ keyCode: 13 });
    // assert
    expect(wrapper.state().email.val).to.equal('example@gmail@com');
    expect(wrapper.state().email.sFlag).to.equal('fa-warning');
  });

  it('enter . before @ ',()=>{
    // setup
    const wrapper = mount(<FormContainer />);
    // action - example.gmail@com
    wrapper.find('input#email').simulate('change',{ target: { value: 'example.gmail@com', id: 'email' }, preventDefault: () => {} });
    wrapper.find('input#email').simulate('keydown',{ keyCode: 13 });
    // assert
    expect(wrapper.state().email.val).to.equal('example.gmail@com');
    expect(wrapper.state().email.sFlag).to.equal('fa-warning');
  });

  it('enter . in the end',()=>{
    // setup
    const wrapper = mount(<FormContainer />);
    // action - example@gmail.com.
    wrapper.find('input#email').simulate('change',{ target: { value: 'example@gmail.com.', id: 'email' }, preventDefault: () => {} });
    wrapper.find('input#email').simulate('keydown',{ keyCode: 13 });
    // assert
    expect(wrapper.state().email.val).to.equal('example@gmail.com.');
    expect(wrapper.state().email.sFlag).to.equal('fa-warning');
    // action - example@gmail.
    wrapper.find('input#email').simulate('change',{ target: { value: 'example@gmail.', id: 'email' }, preventDefault: () => {} });
    wrapper.find('input#email').simulate('keydown',{ keyCode: 13 });
    // assert
    expect(wrapper.state().email.val).to.equal('example@gmail.');
    expect(wrapper.state().email.sFlag).to.equal('fa-warning');
  });

  it('let it be empty',()=>{
    // setup
    const wrapper = mount(<FormContainer />);
    // action 
    wrapper.find('input#email').simulate('change',{ target: { value: 'example@gmail.com.', id: 'email' }, preventDefault: () => {} });
    wrapper.find('input#email').simulate('keydown',{ keyCode: 13 });
    // assert
    expect(wrapper.state().email.val).to.equal('example@gmail.com.');
    expect(wrapper.state().email.sFlag).to.equal('fa-warning');
    // action
    wrapper.find('input#email').simulate('change',{ target: { value: '', id: 'email' }, preventDefault: () => {} });
    wrapper.find('input#email').simulate('keydown',{ keyCode: 13 });
    // assert
    expect(wrapper.state().email.val).to.equal('');
    expect(wrapper.state().email.sFlag).to.equal('fa-wrong');
  });

});