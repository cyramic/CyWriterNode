import React, { Component } from 'react';
import '../../App.css';
import MenuItem from '../menuitem/menuitem.js';



class MenuBar extends Component {
  render() {
    return (
          <div className="App-menubar">
          	<MenuItem text="Documents" faicon="file-text-o" />
          	<MenuItem text="Shared" faicon="share-square-o" />
        </div>
    );
  }
}

export default MenuBar;
