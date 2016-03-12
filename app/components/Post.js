import React, {Component} from 'react';

class Post extends React.Component {
  render() {
  	var post = this.props.post;
  	var activity = this.props.activity;
    return (
  		<div className="feed response">
			<img src="images/images.jpg" className="user-img" alt="" />
			<p className="user-name">{post.user_id} <br />
			<span className="time-since-posted">5 mins ago</span></p>
			<p className="activity-label"><a className="activity-name">{activity.name}</a></p>
			<p className="response-text">{post.value}</p>
			<a href="#" className="options" data-toggle="modal" data-target="#optionsModal"><i className="fa fa-ellipsis-v"></i></a>
		</div>
    );
  }
}

export default Post;