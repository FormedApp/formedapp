import React, {Component} from 'react';

class Receive extends React.Component {
  
  handleClick(newRoute) {
  	if (newRoute) {
  		this.props.navChangeCallback(newRoute);
  	}
  }

  render() {
    return (
      <div className="container activity receive">
        <span className="activity-label">Receive</span>
        <h1>John 10:13</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum similique iure sit possimus praesentium, vitae est minima nam ipsam mollitia eligendi numquam veniam dolore delectus, debitis reprehenderit laudantium, consectetur! Quasi?</p>
        <a href="#" className="activity-nav-left" onClick={this.handleClick.bind(this, 'activity')}><i className="fa fa-chevron-left"></i> Back</a>
        <a href="#" className="activity-nav-right" onClick={this.handleClick.bind(this, 'response')}>Respond <i className="fa fa-chevron-right"></i></a>
      </div>
      );
  }
}

export default Receive;