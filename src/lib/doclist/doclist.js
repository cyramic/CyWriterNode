import React, { Component } from 'react';
import '../../App.css';
import FontAwesome from 'react-fontawesome';
import fetch from 'node-fetch';
import { Button } from 'react-bootstrap';



//Instructions for how to get this working:  https://www.tinymce.com/docs/integrations/react/
class DocList extends Component {
	constructor() {
		super();
		this.state = {}
	}


	componentDidMount() {
		fetch('http://localhost:3000/doc-list')
			.then((response) => {
				return response.json()
			}).then((jsondata) => {
				this.setState({
					data : jsondata
				});
			}).catch((err) => {
	  			return err;
	  		});
	}
  	render() {
	    return (
	      <div>

	      	<h2>Document List</h2>
	      	<div>
	      	<select>
	      	{this.state.data &&
	      		this.state.data.map((entry) => {
	      			return <option> { entry[2] } </option>
	      		})
	      	}
	      	</select>
	      	</div>

		    <Button onClick={this.props.onRequestClose}><FontAwesome name='close' /> Close</Button>
		  </div>
	    );
  	}
}

export default DocList;
