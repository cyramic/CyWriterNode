import React, { Component } from 'react';
import '../../App.css';
import FontAwesome from 'react-fontawesome';
import DocList from '../doclist/doclist.js';
import Modal from 'react-modal';

const customStyles = {
  content : {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%,-50%)'
  }
};

class MenuBar extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    //this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
        <div>
          <div className="App-menubar">
            <div className="App-menuitem"><FontAwesome name="file-text-o" size="2x" onClick={this.openModal} /> Documents</div>
            <div className="App-menuitem"><FontAwesome name="share-square-o" size="2x" /> Shared</div>
          </div>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Documents Modal"
            >
              <DocList />
            </Modal>
        </div>
    );
  }
}

export default MenuBar;
