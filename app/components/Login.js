import React, {Component} from 'react';
import {History} from 'react-router';

class Login extends React.Component {
	handleClick(newRoute) {
		if (newRoute) {
			this.props.navChangeCallback(newRoute);
		}
	}

  render() {
		return (
			<div id="login" className="container">
				<div className="row">
					<div className="col-xs-8 col-xs-offset-2">
						<form className="login">
							<img src={require('../images/logo-wide.png')} className="img-responsive" alt="formed app logo"/>
							<fieldset className="form-group">
								<input type="text" className="form-control" placeholder="Email"/>
							</fieldset>
							<fieldset className="form-group">
								<input type="password" className="form-control" placeholder="Password"/>
								<p><a href="#" onClick={this.handleClick.bind(this, 'resetpass')}>Forgot password?</a></p>
							</fieldset>
							<fieldset className="form-group">
								<input type="button" value="Login" className="btn btn-primary btn-block" onClick={this.handleClick.bind(this, 'community')} />
							</fieldset>
							<p className="text-center"><a href="#" onClick={this.handleClick.bind(this, 'signup')}>Need an account?</a></p>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
