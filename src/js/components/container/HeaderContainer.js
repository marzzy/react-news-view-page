import React, { Component } from 'react';

class MainHeader extends Component {
  render() {
    return (
      <>
        <img src={require("../../../webroot/header.png")} alt="banner" />
        <h1 className='App-title'>Welcome to React</h1>
        <div>
          <p>Title</p>
        </div>
      </>
    );
  }
}

export default MainHeader