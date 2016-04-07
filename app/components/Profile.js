import React, {Component} from 'react';

class Profile extends React.Component {
  
  handleClick(newRoute) {
  	if (newRoute) {
  		this.props.navChangeCallback(newRoute);
  	}
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-6 col-md-offset-3 profile text-center">
          <div className="logo">
            <img src={require('../images/logo.png')} width="150"/>
          </div>
          <span>Name: </span> <span>Jessica Smith</span><br />
          <span>Email: </span> <span>jessica.smith@formedapp.com</span>
        </div>
      </div>
      );
  }
}

export default Profile;
