/*
	Feed
*/

import React from 'react';
import Post from './Post';
import autobind from 'autobind-decorator';

@autobind
class Feed extends React.Component {

	constructor(){
		super();
	}

	renderActivities(key) {
		console.log(this.props.activities);
		return <Post key={key} index={key} details={this.props.activities[key]}/>;	
	}
	
	render() {
		var asdf = Object.keys(this.props.activities);
		console.log(asdf);
		return(
			<div>				
				<ul className="list-of-activities">
						{Object.keys(this.props.activities).map(this.renderActivities.bind(this))}
				</ul>
				<button onClick={this.props.loadActivities}>Load Sample Activities</button>
			</div>
		);
	}
};

export default Feed;