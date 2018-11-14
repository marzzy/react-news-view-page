/* eslint-disable */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import NewsCode from '../presentational/PDefaultMainComponents';

class NewsDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsData: [],
      isLoading: true,
      errors: null
    };
  }

  getNews() {
    axios
      .get("http://127.0.0.1:8080/src/sample/news.json")
      .then(response =>
        response.data.map(news => ({
          id: `${news.id}`,
          title: `${news.title}`,
          lead: `${news.lead}`,
          uptitle: `${news.uptitle}`
        }))
      )
      .then(newsData => {
        this.setState({
          newsData,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.getNews();
  }
  // getNewsContent() {
  //   axios.get(`http://127.0.0.1:8080/src/sample/news.json`)
  //     .then(function (response) {
  //       // this.setState(pervstate => ({
  //       //   posts: pervstate.posts.concat([
  //       //     {
  //       //       "id": "12333",
  //       //       "title": "کشف ۱۰۲ تن مواد مخدر و انهدام ۹۳ باند مسلح در سیستان و بلوچستان",
  //       //     },
  //       //     {
  //       //       "id": "4366",
  //       //       "title": "امروز عرصه جنگ خیبر و احزاب است",
  //       //     }
  //       //   ])
  //       // }));
  //     });
  //   }

  render () {
    const { isLoading, newsData } = this.state;
    return (
      <div>
        <React.Fragment>
          {!isLoading ? (
            newsData.map(news => {
              const { id, title, lead, uptitle } = news;
              return (
                <div key={id}>
                  <p>{title}</p>
                  <p>{uptitle}</p>
                  <p>{lead}</p>
                  <hr />
                </div>
              );
            })
          ) : (
              <p>Loading...</p>
            )}
            dfdfdf
        </React.Fragment>

          <NewsCode name='sara' />
        </div>
    )
  }
}

// export default NewsDetails

// const wrapper = document.getElementById('right_col')
// if (wrapper) {
//   ReactDOM.render(<NewsDetails />, wrapper)
// }
