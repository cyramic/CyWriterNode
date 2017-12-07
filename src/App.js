import React, { Component } from 'react';
import Header from './lib/header/basicheader.js'
import MenuBar from './lib/menubar/menubar.js'
import DocumentPage from './lib/documentpage/documentpage.js'

import './App.css';
import './lib/fa/css/font-awesome.min.css'

class App extends Component {
  /*handleEditorChange = (e) => {
    console.log('Content was updated:', e.target.getContent());
  }*/



  render() {
    document.title = "CyWriter";
    return (

      <div className="App">
        <Header />
        <MenuBar />
        <div className="App-intro">
          <DocumentPage />
        </div>
      </div>
    );
  }
}

export default App;
