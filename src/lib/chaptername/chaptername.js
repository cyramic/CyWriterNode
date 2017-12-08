import React, { Component } from 'react';
import '../../App.css';
import { FormControl, ControlLabel } from 'react-bootstrap';

const customStyles = {
  content : {
      width : "300px"
  }
};

class ChapterName extends Component {
  getValidationState() {
    return null;
  }

  handleChagne(e) {
    this.setState({value:e.target.value});
  }

  render() {
    return (
      <span>
        <ControlLabel>Chapter Title</ControlLabel>
        <FormControl type="text" placeholder="Enter Chapter Title" style={customStyles} />
      </span>
    );
  }
}

export default ChapterName;
