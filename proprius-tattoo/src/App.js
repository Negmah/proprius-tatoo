import React, { Component } from 'react';
import './App.css';
import './Homepage.js';
import Homepage from './Homepage.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
            <Homepage />
</div>
    );
  }
}

export default App;
