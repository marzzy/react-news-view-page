
import React from "react";
import MainHeader from '../../container/HeaderContainer';
import { NewsDetails, MainNews } from '../../container/PDeafaultArticle';
import FormContainer from '../../container/FormContainer';
import Poll from '../../container/PollForm';



class AppNewsPage extends React.Component {
  render() {
    return (
      <>
        <header id="the-header">
          <MainHeader />
        </header>
        <main className="main-container">
          <div id="right_col">
            <article id="main-article" className="box-style01">
              <MainNews />
            </article>
            <div id="comment">
              <FormContainer />
            </div>
          </div>
          <div id="left_col">
            <div id="news-list" className="box-style02" >
              <NewsDetails />
            </div>
            <div id="poll">
              <Poll />
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default AppNewsPage