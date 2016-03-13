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
        <div class="col-md-6 col-md-offset-3 profile text-center">
          <div class="logo">
            <img src="./images/logo.png" width="150"/>
          </div>
          <span>Name: </span> <span>Jill Smith</span><br />
          <span>Email: </span> <span>jill.smith@formedapp.com</span>
        </div>
      </div>
      );
  }
}

export default Profile;