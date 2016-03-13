import React, {Component} from 'react';

class Activity extends React.Component {
  render() {
  	var data = this.props.data;
    return (
  		<a href="#">
	  		<div className="feed response">
				<h1 className="activity-name">{data.name}</h1>
				<p className="track-name">{data.track_name}</p>
			</div>
		</a>
    );
  }
}

export default Activity; 