import React, { Component } from 'react';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <h1>Hello React!</h1>
        <img src={logo} width={50} height={50} />
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    );
  }
}

export default App;
