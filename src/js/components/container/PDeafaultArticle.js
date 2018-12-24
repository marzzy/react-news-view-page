

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { NewsCode, MainNewsComp} from '../presentational/PDefaultMainComponents';

class MainNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainNewsData: [],
      isLoading: true,
      errors: null
    };
  }

  getNews() {
    axios
      .get("http://127.0.0.1:8080/src/sample/mainnews.json")
      .then(res => {
        let news = res.data;
        this.setState({
          mainNewsData: news,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.getNews();
  }

  render() {
    const { isLoading, mainNewsData } = this.state;
    return (
      <div>
        <React.Fragment>
          {!isLoading ? 
            (
              <div>
                <MainNewsComp newsdata={mainNewsData} />
              </div>  
            ) : (
              <p>Loading...</p>
            )
          }
        </React.Fragment>
      </div>
    );
  }
}

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
        response.data.res.map(news => ({
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

  render () {
    const { isLoading, newsData } = this.state;
    return (
      <div>
        <React.Fragment>
          {!isLoading ? (
            newsData.map(news => {
              const {id} = news;
              return (
                <div key={id}>
                  <NewsCode thenews={news} />
                </div>
              );
            })
          ) : (
              <p>Loading...</p>
            )}
        </React.Fragment>
      </div>
    );
  }
}

const leftwrapper = document.getElementById('left_col')
const rightwrapper = document.getElementById('right_col')
if (leftwrapper) {
  ReactDOM.render(<NewsDetails />, leftwrapper);
  ReactDOM.render(<MainNews />, rightwrapper);
}
