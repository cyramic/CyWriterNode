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

class MenuItem extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      isToggleOn: true
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  handleClick() {
  	this.openModal();
  	this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <div>
		<button 
			className='App-menuitem'
			onClick={this.handleClick}
		>
			<FontAwesome 
				name={this.props.faicon} 
				size="2x" 
				onClick={this.openModal} 
			/>
			&nbsp;{this.props.text}
		</button>
  
        <Modal
        	isOpen={this.state.modalIsOpen}
        	onAfterOpen={this.afterOpenModal}
        	onRequestClose={this.closeModal}
        	style={customStyles}
        	ariaHideApp={false}
        	contentLabel="Documents Modal"
        >
          	<DocList />
        </Modal>
      </div>
    );
  }
}

export default MenuItem;