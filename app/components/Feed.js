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

	renderPosts(key) {
		let post = this.props.posts[key];
		let activity = this.props.activities[post.activity_id];
		return <Post key={key} index={key} activity={activity} post={post}/>;	
	}
	
	render() {
		return(
			<div>				
				<ul className="list-of-posts">
						{Object.keys(this.props.posts).map(this.renderPosts.bind(this))}
				</ul>
				<button onClick={this.props.loadState}>Load Sample Posts</button>
			</div>
		);
	}
};

export default Feed;