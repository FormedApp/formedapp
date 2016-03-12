import React, {Component} from 'react';

class NavBar extends React.Component {
  render() {
    return (
      		<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
							<i className="fa fa-ellipsis-v"></i>
						</button>
						<a className="navbar-brand" href="#">Formed</a>
					</div>
					<div id="navbar" className="navbar-collapse collapse">
						<ul className="nav navbar-nav">
							<li className="active"><a href="#">Home</a></li>
							<li><a href="#">Live</a></li>
						</ul>
						<ul className="nav navbar-nav navbar-right">
							<li><a href="#">Signup</a></li>
							<li><a href="#">Login</a></li>
						</ul>
					</div>
				</div>
			</nav>
    );
  }
}

export default NavBar;