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

	renderData(key) {
		let data = this.props.data[key];
		return <Post key={key} index={key} data={data} />;	
	}
	
	render() {
		return(
			<div className="container">				
				{Object.keys(this.props.data).map(this.renderData.bind(this))}
			</div>
		);
	}
};

export default Feed;