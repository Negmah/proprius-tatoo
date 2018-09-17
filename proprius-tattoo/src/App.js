import React, { Component } from 'react';
import './App.css';
import Homepage from './Homepage.js';
import Navbar from './Navbar.js';


class App extends Component {
  render() {
    return (
      <div className="App" style={{width: "100vw", height: "100vh"}}>
      <Navbar />
      </div>
    );
  }
}

export default App;
