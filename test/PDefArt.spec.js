import { NewsDetails, MainNews } from "../src/js/components/container/PDeafaultArticle";

describe('NewsDetails (list news)',()=>{
  it('can be created and have data',() => {
    // setup
    const wrapper = mount(<NewsDetails />);
    // assert 
    // ** because of the cross origin,nodejs cant get the data
    expect(wrapper.state().newsData).to.be.empty;
    // action
    wrapper.setState({
      newsData: [
        {
          "id": "1111",
          "title": "this is 1th tit",
          "lead": "this is 1th lead",
          "uptitle": "this is 1th uptit"
        },
        {
          "id": "2222",
          "title": "this is 2th tit",
          "lead": "this is 2th lead",
          "uptitle": "this is 2th uptit"
        }
      ], 
      isLoading: false,
      errors: null 
    });
    // assert
    expect(wrapper.find("h5")).to.have.lengthOf(2);
  });
});

describe('MainNews (main article container)',()=>{
  it('can be created and have data',() => {
    // setup
    const wrapper = mount(<MainNews />);
    // assert 
    // ** because of the cross origin,nodejs cant get the data
    expect(wrapper.state().mainNewsData).to.be.empty;
    // action
    wrapper.setState({
      mainNewsData: {
        "id": "12121",
        "title": "this is Main title",
        "publish_time": "",
        "lead": "this is Main lead",
        "uptitle": "this is Main uptit",
        "primaryFile": {
          "id": "5252525",
          "title": "",
          "picture": "https://media.mehrnews.com/d/2018/12/23/4/2992573.jpg"
        },
        "content": "this is Main content this is Main content this is Main content this is Main content this is Main content this is Main content this is Main content this is Main content this is Main content this is Main content this is Main content this is Main content ",
        "url": "",
        "tinyUrl": ""
      }, 
      isLoading: false,
      errors: null 
    });
    // assert
    expect(wrapper.find("h5")).to.have.lengthOf(1);
    expect(wrapper.find('.title').text()).to.equal('this is Main title');
    expect(wrapper.find('.content')).to.have.lengthOf(1);
  });

});