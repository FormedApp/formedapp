import React, {Component} from 'react';

class Success extends React.Component {

	handleClick(newRoute) {
		if (newRoute) {
			this.props.navChangeCallback(newRoute);
		}
	}

	render() {
		return (
			<div className="container activity complete text-center">
				<h1>Activity Complete!</h1>
				<i className="fa fa-check"></i>
				<a href="#" className="activity-nav-left" onClick={this.handleClick.bind(this, 'response')}><i className="fa fa-chevron-left"></i> Response</a>
				<a href="#" className="activity-nav-right" onClick={this.handleClick.bind(this, 'community')}>Save <i className="fa fa-chevron-right"></i></a>
			</div>
			);
	}
}

export default Success;