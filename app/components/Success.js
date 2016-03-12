import React, {Component} from 'react';

class Activity extends React.Component {
	render() {
		return (
			<div class="activity complete text-center">
				<h1>Activity Complete!</h1>
				<i class="fa fa-check"></i>
				<a href="#" class="activity-nav-left"><i class="fa fa-chevron-left"></i> Response</a>
				<a href="#" class="activity-nav-right">Save <i class="fa fa-chevron-right"></i></a>
			</div>
		);
	}
}

export default Activity;