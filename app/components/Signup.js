import React, {Component} from 'react';
import {History} from 'react-router';

class Signup extends React.Component {
	handleClick(newRoute) {
		if (newRoute) {
			this.props.navChangeCallback(newRoute);
		}
	}
	render() {
		return (
			<div id="signup" className="container">
				<div className="row">
					<div className="col-xs-8 col-xs-offset-2">
						<form className="login">
							<h2>Signup</h2>
							<fieldset className="form-group">
								<input type="text" className="form-control" placeholder="Email"/>
							</fieldset>
							<fieldset className="form-group">
								<input type="password" className="form-control" placeholder="Password"/>
							</fieldset>
							<fieldset className="form-group">
								<input type="button" value="Create Account" className="btn btn-primary btn-block" onClick={this.handleClick.bind(this, 'community')} />
							</fieldset>
							<p className="text-center"><a href="#" onClick={this.handleClick.bind(this, 'login')}>Already have an account?</a></p>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Signup;
