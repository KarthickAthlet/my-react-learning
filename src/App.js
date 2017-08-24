import React, { Component } from 'react';
import AppHeader from './components/AppHeader/AppHeader';
import AppBody from './components/AppBody/AppBody';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <AppBody />
      </div>
    );
  }
}

export default App;
