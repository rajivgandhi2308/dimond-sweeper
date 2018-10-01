import React, { Component } from 'react';
import './App.css';
import Sweeper from './DiamondSweeper';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome Diamond Sweeper</h1>
        </header>
        <div className="App-intro">
          <Sweeper />
        </div>
      </div>
    );
  }
}

export default App;
