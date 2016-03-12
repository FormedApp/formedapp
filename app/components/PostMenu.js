import React, {Component} from 'react';

class PostMenu extends Component {
  render() {
    return (
  		<div>
  			<div className="options-open">
				<a href="#" className="options"><i className="fa fa-pencil"></i></a>
				<a href="#" className="options"><i className="fa fa-trash"></i></a>
				<a href="#" className="options"><i className="fa fa-eye"></i></a>
				<a href="#" className="options"><i className="fa fa-times"></i></a>
			</div>
			<div className="options-close">
				<a href="#" className="options" data-toggle="modal" data-target="#optionsModal"><i className="fa fa-ellipsis-v"></i></a>
			</div>
  		</div>
    );
  }
}

export default PostMenu;