import { Submit, Radio, Input, Textarea } from "../src/js/components/presentational/Input";

describe('Input component',()=> {
  it('Input exist',()=> {
    // setup
    function funcExample() {return true;} 
    const wrapper = shallow(
    <Input 
      text="نام"
      label="name"
      type="text"
      id="name"
      value="foo"
      handleChange = {funcExample}
      status='this is ok'
      flag= 'fa-right'
    />);
    // assert
    expect(wrapper).to.have.length(1);
  });

  it('Input flag check',() => {
    // setup
    function funcExample() { return true; }
    const wrapper = shallow(
      <Input
        text="نام"
        label="name"
        type="text"
        id="name"
        value="foo"
        handleChange={funcExample}
        status='this is ok'
        flag='fa-right'
      />);
    // assert
    expect(wrapper.find('.fa-right')).to.have.length(1);
    expect(wrapper.find('.fa-wrong')).to.have.length(0);
    // action
    wrapper.setProps({ flag: 'fa-wrong' });
    // assert
    expect(wrapper.find('.fa-right')).to.have.length(0);
    expect(wrapper.find('.fa-wrong')).to.have.length(1);
  });
});
describe('Radio component',()=> {
  it('Radio exist',()=> {
    // setup
    const wrapper = shallow(<Radio label='foo' value='bar' />);
    // assert
    expect(wrapper).to.have.length(1);
  });
});
describe('Submit component',()=> {
  it('Submit exist',()=> {
    // setup
    const wrapper = shallow(<Submit />);
    // assert
    expect(wrapper).to.have.length(1);
  });
});
describe('Textarea component',()=> {
  it('Textarea exist',()=> {
      // setup
    function funcTest() {return true;}
    const wrapper = shallow(
    <Textarea 
        label="نظر"
        id="txtbody"
        value='foo'
        handleChange={funcTest}
        status='thats ok'
        flag='fa-right'
    />);
    // assert
    expect(wrapper).to.have.length(1);
  });
});