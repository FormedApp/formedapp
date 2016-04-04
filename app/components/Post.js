import React, {Component} from 'react';
import EditPost from './EditPost';

class Post extends React.Component {
  render() {
  	var data = this.props.data;
    return (
  		<div className="feed response">
			<img src="images/images.jpg" className="user-img" alt="" />
			<p className="user-name">{data.user_id} <br />
			<span className="time-since-dataed">5 mins ago</span></p>
			<p className="activity-label"><a className="activity-name">{data.activity_name}</a></p>
			<p className="response-text">{data.value}</p>
			<EditPost />
		</div>
    );
  }
}

export default Post; 