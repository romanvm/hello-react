import React, { Component } from 'react';
import styles from './App.css'
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className={styles.appContainer}>
        <h1>Hello React!</h1>
        <img src={logo} width={100} height={100} />
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    );
  }
}

export default App;
