import React, { Component } from 'react';
import '../../App.css';
//import FontAwesome from 'react-fontawesome';
import ReactTinyMCE from 'react-tinymce';


//Instructions for how to get this working:  https://www.tinymce.com/docs/integrations/react/
class Editor extends Component {
  render() {
    return (
        <ReactTinyMCE content="<p>This is the initial content of the editor</p>"
        config={{
          plugins: 'autolink link image lists print preview',
          toolbar: 'undo redo | bold italic | alignleft aligncenter alignright'
        }}
       />
    );
  }
}

export default Editor;
