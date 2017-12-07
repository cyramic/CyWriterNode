import React, { Component } from 'react';
import TinyEditor from '../editor/editor.js'
import '../../App.css';

//Instructions for how to get this working:  https://www.tinymce.com/docs/integrations/react/
class DocumentPage extends Component {

  render() {
    return (
      <div className="document-page">
        {/* <MainMenu /> */}
        <select>
          <option>Chapter 1</option>
          <option>Chapter 2</option>
        </select>
        {/* <ChapterList />
        <ChapterName /> */}
        <TinyEditor />
      </div>
    );
  }
}

export default DocumentPage;
