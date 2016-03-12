import React, {Component} from 'react';

class Response extends React.Component {
	render() {
		return (
			<div class="activity response">
				<span class="activity-label">Reponse</span>
				<p>Possimus praesentium, vitae est minima nam ipsam mollitia eligendi numquam veniam dolore delectus?</p>
				<div class="form-group">
					<label class="control-label" for="reflectInput">Answer:</label>
					<input class="form-control" id="reflectInput" type="text" value="Yes, I think..."/>
				</div>
				<a href="#" class="activity-nav-left"><i class="fa fa-chevron-left"></i> Receive</a>
				<a href="#" class="activity-nav-right">Complete <i class="fa fa-chevron-right"></i></a>
			</div>
		);
	}
}

export default Response;