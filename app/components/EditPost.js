/*
Edit Post
 */

import React, {Component} from 'react';

class EditPost extends React.Component {
  render() {
  	var data = this.props.data;
    return (
  		<div>
			<a href="#" className="options" data-toggle="modal" data-target="#optionsModal">
				<i className="fa fa-ellipsis-v"></i>
			</a>
		</div>
    );
  }
}

export default EditPost; 