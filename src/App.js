import React, { Component } from 'react';
import Header from './lib/header/basicheader.js'
import Menubar from './lib/menubar/menubar.js'
import './App.css';
import './lib/fa/css/font-awesome.min.css'

class App extends Component {
  render() {
    document.title = "CyWriter";
    return (
      <div className="App">
        <Header />
        <Menubar />
        <p className="App-intro">
          Hey, I am some great content...just wait and see!
        </p>
      </div>
    );
  }
}

export default App;
