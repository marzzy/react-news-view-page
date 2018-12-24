

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MainHeader extends Component {
  render() {
    return (
      <div>
        <img src={require("../../../webroot/header77.png")} alt="banner"/>
      </div>
    );
  }
}

const wrapper = document.getElementById('the-header')
if (wrapper) {
  ReactDOM.render(<MainHeader />, wrapper);
}
