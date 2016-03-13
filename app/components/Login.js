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
			<form className="store-selector" onSubmit={this.goToStore}>
				<h2>Please Enter A Store</h2>				
				<input type="submit" />
			</form>
    );
  }
}

reactMixin.onClass(Login, History);

export default Login;