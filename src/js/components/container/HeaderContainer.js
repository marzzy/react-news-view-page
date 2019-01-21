import React, { Component } from 'react';

class MainHeader extends Component {
  render() {
    return (
      <>
        <img src={require("../../../webroot/header.png")} alt="banner" />
        <h1 className='App-title'>صفحه خبر</h1>
      </>
    );
  }
}

export default MainHeader