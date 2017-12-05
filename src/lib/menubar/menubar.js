import React, { Component } from 'react';
import '../../App.css';
import FontAwesome from 'react-fontawesome';

class MenuBar extends Component {
  render() {
    return (
        <div className="App-menubar">
          <div className="App-menuitem"><FontAwesome name="file-text-o" size="2x" /> Documents</div>
          <div className="App-menuitem"><FontAwesome name="share-square-o" size="2x" /> Shared</div>
        </div>
    );
  }
}

export default MenuBar;
