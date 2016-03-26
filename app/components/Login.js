import React, {Component} from 'react';
import {History} from 'react-router';
import reactMixin from 'react-mixin';
import autobind from 'autobind-decorator';

@autobind
class Login extends React.Component {
	handleClick(newRoute) {
		if (newRoute) {
			console.log(newRoute);
			this.props.navChangeCallback(newRoute);
		}
	}
	// goToStore(event) {
	// 	event.preventDefault();
	// 	// get the data from the input
	// 	this.history.pushState(null, '/feed');
	// 	// transition from <StorPicker/> to <App/>
	// }
	render() {
		return (
			<div id="login" className="container">
				<div className="row">
					<div className="col-xs-8 col-xs-offset-2">
						<form className="login">
							<img src="./images/logo-wide.png" className="img-responsive" alt="formed app logo"/>
							<fieldset className="form-group">
								<input type="text" className="form-control" placeholder="Email"/>
							</fieldset>
							<fieldset className="form-group">
								<input type="password" className="form-control" placeholder="Password"/>
								<p><a href="#" onClick={this.handleClick.bind(this, 'resetpass')}>Forgot password?</a></p>
							</fieldset>
							<fieldset className="form-group">
								<input type="submit" value="Login" className="btn btn-primary btn-block" onClick={this.handleClick.bind(this, 'community')} />
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