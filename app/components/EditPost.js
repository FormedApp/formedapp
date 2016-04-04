/*
Edit Post
*/

import React, {Component} from 'react';

export default class EditPost extends React.Component {

  handleMenuToggle() {
    // need logic here to toggle .hidden class on both <a/> tags, but just for this current Post
  }

  render() {
  	var data = this.props.data;
    return (
      <div>
        <a href="#" className="options" onClick={this.handleMenuToggle}>
          <i className="fa fa-ellipsis-v"></i>
        </a>
        <a href="#" className="options hidden" onClick={this.handleMenuToggle}>
          <i className="fa fa-pencil"></i> <i className="fa fa-trash"></i>
        </a>
      </div>
      );
  }
}