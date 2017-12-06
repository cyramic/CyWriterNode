import React, { Component } from 'react';
import logo from './logo3.svg';
import '../../App.css';
import { PageHeader } from 'react-bootstrap';

const divStyle = {
  margin: "-5px"
}

class Header extends Component {
  render() {
    return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <PageHeader style={divStyle}>Writer React Demo</PageHeader>
        </header>
    );
  }
}

export default Header;
