import React, {Component} from 'react';

class Activity extends React.Component {

  	constructor(){
		super();
	}

	handleClick(newRoute) {
		if (newRoute) {
			this.props.navChangeCallback(newRoute);
		}
	}

	renderData(key) {
		let data = this.props.data[key];
		return (
		<a href="#" key={key} index={key} onClick={this.handleClick.bind(this, 'receive')}>
	  		<div className="feed response">
				<h1 className="activity-name">{data.name}</h1>
				<p className="track-name">{data.track_name}</p>
			</div>
		</a>)
	}

	render() {
		return(
			<div>
				<ul className="">
						{Object.keys(this.props.data).map(this.renderData.bind(this))}
				</ul>
			</div>
		);
	}

}

export default Activity;