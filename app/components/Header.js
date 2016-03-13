import React, {Component} from 'react';
import NavBar from './NavBar';

class Header extends React.Component {
constructor(props) {
	super(props);
}
  render() {
    return ( 
      <div>
		<NavBar navChangeCallback={this.props.navChangedCallback} />
      </div>
    );
  }
}

export default Header;
