import React, {Component} from 'react';
import {History} from 'react-router';
import reactMixin from 'react-mixin';
import autobind from 'autobind-decorator';

@autobind
class Login extends React.Component {
	goToStore(event) {
		event.preventDefault();
		// get the data from the input
		this.history.pushState(null, '/feed');
		// transition from <StorPicker/> to <App/>
	}
  render() {
    return (
		<form className="login">
			<h2>Login</h2>				
			<input type="text" placeholder="Email"/>
			<input type="password" placeholder="Password"/>
			<input type="submit" />
		</form>
    );
  }
}

reactMixin.onClass(Login, History);

export default Login;