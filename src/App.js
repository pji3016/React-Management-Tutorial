import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className = "gray-background">
        <img src={logo} alt="logo"/>
        <h2>테스트입니다.</h2> 
      </div>
    );
  }
}

export default App;
