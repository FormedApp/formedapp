import React, {Component} from 'react';

class NavBar extends React.Component {
  handleClick(newRoute) {
	if (newRoute) {
		this.props.navChangeCallback(newRoute);
	}
  }

  render() {
    return (
  		<nav className="navbar navbar-default">
			<div className="container-fluid">
				<div className="navbar-header">
					<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
						<i className="fa fa-ellipsis-v"></i>
					</button>
					<a className="navbar-brand" href="#"><img src="./images/logo.png" width="45"/></a>
					<span className="view-title">Formed</span>
				</div>
				<div id="navbar" className="navbar-collapse collapse">
					<ul className="nav navbar-nav">
						<li className="community"><a href="#" onClick={this.handleClick.bind(this, 'community')}>Community</a></li>
						<li className="activity"><a href="#" onClick={this.handleClick.bind(this, 'activity')}>Activity</a></li>
						<li className="journal"><a href="#" onClick={this.handleClick.bind(this, 'journal')}>Journal</a></li>
						<li className="user"><a href="#" onClick={this.handleClick.bind(this, 'profile')}>User</a></li>
						<li className="leader"><a href="#">Leader</a></li>
					</ul>
				</div>
			</div>
		</nav>
    ); 
  }
};

export default NavBar;
