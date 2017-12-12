import React, { Component } from 'react';
import '../../App.css';

class ChapterList extends Component {
	constructor() {
		super();
		this.state = {}
	}


	componentDidMount() {
		// Won't work as I haven't connected the document id to the state yet...
		fetch('http://localhost:3000/chapter-list/'+props.documentid)
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
      	<select>
      		<option>--Select One--</option>
      		<option>Chapter 1</option>
      		<option>Chapter 2</option>
      	</select>
    	);
  	}
}

export default ChapterList;
