import React, { Component } from 'react';
import './App.css';
import Homepage from './Homepage.js';
import Navbar from './Navbar.js';
import NavbarExample from './NavbarExample.js'

class App extends Component {
  render() {
    return (
      <div className="App" style={{width: "100vw", height: "100vh"}}>
      <Navbar />
      <br /><br /><br /><br /><br /><br />
      </div>
    );
  }
}

export default App;
