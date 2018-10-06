import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import NewsCode from '../presentational/PDefaultMainComponents'

class NewsDetails extends Component {
  render () {
    return (
      <div>
        <p>
            hiiiiiii
        </p>
        <NewsCode name='sara' />
      </div>
    )
  }
}

export default NewsDetails

const wrapper = document.getElementById('right_col')
if (wrapper) {
  ReactDOM.render(<NewsDetails />, wrapper)
}
