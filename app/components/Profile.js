import React, {Component} from 'react';

class Receive extends React.Component {
  
  handleClick(newRoute) {
  	if (newRoute) {
  		this.props.navChangeCallback(newRoute);
  	}
  }

  render() {
    return (
      <div class="col-md-6 col-md-offset-3 profile">
        <div class="logo">
          <img src="./images/logo.png" width="150"/>
        </div>
        <span>Name: </span> <span>Jill Smith</span><br />
        <span>Email: </span> <span>jill.smith@formedapp.com</span>
      </div>
      );
  }
}

export default Receive;