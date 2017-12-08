import React, { Component } from 'react';
import TinyEditor from '../editor/editor.js';
import ChapterName from '../chaptername/chaptername.js';
import ChapterList from '../chapterlist/chapterlist.js';
import { FormGroup } from 'react-bootstrap';
import '../../App.css';

//Instructions for how to get this working:  https://www.tinymce.com/docs/integrations/react/
class DocumentPage extends Component {

  render() {
    return (
      <div className="document-page">
        {/*<DocumentMenu /> */}
       <FormGroup>
          <ChapterList />
          <ChapterName />
        </FormGroup>
        <TinyEditor />
      </div>
    );
  }
}

export default DocumentPage;
