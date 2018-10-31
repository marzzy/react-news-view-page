import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import axios from 'axios';
import NewsCode from '../presentational/PDefaultMainComponents';

class NewsDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsId: 123,
      persons: ['ahmad'],
      posts: [
        {
          "id": "1034",
          "title": "کشف ۱۰۲ تن مواد مخدر و انهدام ۹۳ باند مسلح در سیستان و بلوچستان",
        },
        {
          "id": "2034",
          "title": "امروز عرصه جنگ خیبر و احزاب است",
        }
      ],
    };
    // var newsDet = {};
  }

  getNewsContent() {
    axios.get(`http://127.0.0.1:8080/src/sample/news.json`)
      .then(function (response) {
        // this.setState(pervstate => ({
        //   posts: pervstate.posts.concat([
        //     {
        //       "id": "12333",
        //       "title": "کشف ۱۰۲ تن مواد مخدر و انهدام ۹۳ باند مسلح در سیستان و بلوچستان",
        //     },
        //     {
        //       "id": "4366",
        //       "title": "امروز عرصه جنگ خیبر و احزاب است",
        //     }
        //   ])
        // }));
      });
    }

  render () {
    return (
      <div>
        <p onClick={() => {return this.getNewsContent()} } className='red' >
          {this.state.newsId}
          hooo
        </p>


        <div>
          <ul>
            {this.state.posts.map(post => <li key={post.id} >{post.title}</li>)}
          </ul>
        </div>

        <NewsCode name={this.state.newsId} />
      </div>
    )
  }
}

// export default NewsDetails

// const wrapper = document.getElementById('right_col')
// if (wrapper) {
//   ReactDOM.render(<NewsDetails />, wrapper)
// }
