import React, {Component} from 'react';

class Response extends React.Component {
  
  handleClick(newRoute) {
  	if (newRoute) {
  		this.props.navChangeCallback(newRoute);
  	}
  }

  render() {
		return (
			<div className="container">
				<div className="activity response">
					<span className="activity-label">Reponse</span>
					<p>Possimus praesentium, vitae est minima nam ipsam mollitia eligendi numquam veniam dolore delectus?</p>
					<div className="form-group">
						<label className="control-label" for="reflectInput">Answer:</label>
						<input className="form-control" id="reflectInput" type="text" placeholder="Yes, I think..."/>
					</div>
					<a href="#" className="activity-nav-left" onClick={this.handleClick.bind(this, 'receive')}><i className="fa fa-chevron-left"></i> Receive</a>
					<a href="#" className="activity-nav-right" onClick={this.handleClick.bind(this, 'success')}>Complete <i className="fa fa-chevron-right"></i></a>
				</div>
			</div>
		);
	}
}

export default Response;