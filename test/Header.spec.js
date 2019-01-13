
import MainHeader from '../src/js/components/container/HeaderContainer';

describe('HeaderContaine', () => {
  it('have app title', () => {
    const wrapper = shallow(<MainHeader />);
    expect(wrapper.find('.App-title')).to.have.lengthOf(1);
  });
});