import React, { Component } from 'react';
import Home from './Components/Home';
import Navbar from './Components/CustomerNavbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
      </div>

    );
  }

}

export default App;


