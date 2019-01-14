import { NewsCode, MainNewsComp } from "../src/js/components/presentational/PDefaultMainComponents";

describe('NewsCode (listed news)',()=>{
  it('one scope can be created',() => {
    // setup
    const news = { title: "this is title" };
    // action
    const wrapper = mount(<NewsCode thenews={news} />);
    // assert
    expect(wrapper.find('p.title').text()).to.equal('this is title');
  });
});

describe('MainNewsComp (main news container)',()=>{
  it('one scope can be created',() => {
    // setup
    const news = { 
      title:'this is title',
      uptitle:"this is uptitle", 
      lead:'its lead', 
      id:'12', 
      content:"the content should be this",
      primaryFile: {
        title: "pic title",
        picture: "https://media.mehrnews.com/d/2018/12/23/4/2992573.jpg"
      } 
    };
    // action
    const wrapper = shallow(<MainNewsComp newsdata={news} />);
    // assert
    expect(wrapper.find('p.uptitle').text()).to.equal('this is uptitle');
  });
});