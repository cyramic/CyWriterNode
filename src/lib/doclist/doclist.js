import React, { Component } from 'react';
import '../../App.css';
import FontAwesome from 'react-fontawesome';
import { Button } from 'react-bootstrap';


//Instructions for how to get this working:  https://www.tinymce.com/docs/integrations/react/
class DocList extends Component {
  render() {
    return (
      <h2>Document List <Button onClick={this.props.onRequestClose}><FontAwesome name='close' /></Button></h2>

    );
  }
}

export default DocList;
