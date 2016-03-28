import React, {Component} from 'react';
import {History} from 'react-router';
import reactMixin from 'react-mixin';
import autobind from 'autobind-decorator';

@autobind
class ResetPass extends React.Component {
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
							<h2>Reset Password</h2>
							<fieldset className="form-group">
								<input type="text" className="form-control" placeholder="Email"/>
							</fieldset>
							<fieldset className="form-group">
								<input type="button" value="Reset" className="btn btn-primary btn-block" onClick={this.handleClick.bind(this, 'login')} />
							</fieldset>
							<p className="text-center"><a href="#" onClick={this.handleClick.bind(this, 'login')}>Ready to login?</a></p>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default ResetPass;