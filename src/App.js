import React, { Component } from 'react';
import Header from './lib/header/basicheader.js'
import MenuBar from './lib/menubar/menubar.js'
import Editor from './lib/editor/editor.js'
import './App.css';
import './lib/fa/css/font-awesome.min.css'

class App extends Component {
  render() {
    document.title = "CyWriter";
    return (
      
      <div className="App">
        <Header />
        <MenuBar />
        <p className="App-intro">
          <Editor />
        </p>
      </div>
    );
  }
}

export default App;
