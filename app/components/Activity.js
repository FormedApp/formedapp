import React, {Component} from 'react';

class Post extends React.Component {
  render() {
  	var post = this.props.post;
  	var activity = this.props.activity;
    return (
  		<a href="#">
	  		<div className="feed response">
				<h1 className="activity-name">{activity.name}</h1>
				<p className="track-name">{activity.track_name}</p>
			</div>
		</a>
    );
  }
}

export default Post; 