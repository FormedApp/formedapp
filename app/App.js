import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CSS from "./css/style.scss";

// header & footer
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

/* 
// Routes
*/
// accounts comps
import Login from "./components/Login";
import ResetPass from "./components/ResetPass";
import Signup from "./components/Signup";
// pages
import Feed from "./components/Feed";
import Activity from "./components/Activity";
import Receive from "./components/Receive";
import Response from "./components/Response";
import Success from "./components/Success";
import Profile from "./components/Profile";

import Rebase from 're-base';
var base = Rebase.createClass('https://formed.firebaseio.com/');

class App extends React.Component {
	
	constructor() {
		super();
		this.state = {
			posts : require('./scripts/posts'),
			activities : require('./scripts/activities'),
			journal : require('./scripts/journal'),
			route: 'login' // defult route on load
		};
		this.handleNavChange = this.handleNavChange.bind(this);
	}

	componentDidMount() {
		base.syncState('posts',{ context: this, state: 'posts'});
	}

	handleNavChange(newRoute) {
		console.log('NEW ROUTE:', newRoute);
		this.setState({ route: newRoute });
	}


	render() {
		let { route } = this.state;
		let nav = <NavBar navChangeCallback={this.handleNavChange} />;
		let content;


		if(route === 'login') {
			nav = false;
			content = <Login navChangeCallback={this.handleNavChange} {...this.props}/>;
		} else if(route === 'signup') {
			nav = false;
			content = <Signup navChangeCallback={this.handleNavChange} {...this.props}/>;
		} else if(route === 'resetpass') {
			nav = false;
			content = <ResetPass navChangeCallback={this.handleNavChange} {...this.props}/>;
		} else if(route === 'community') {
			content = <Feed data={this.state.posts} {...this.props}/>;
		} else if(route === 'activity') {
			content = <Activity data={this.state.activities} navChangeCallback={this.handleNavChange} {...this.props}/>;
		} else if(route === 'receive') {
			content = <Receive data={this.state.activities} navChangeCallback={this.handleNavChange} {...this.props}/>;
		} else if(route === 'response') {
			content = <Response data={this.state.activities} navChangeCallback={this.handleNavChange} {...this.props}/>;
		} else if(route === 'success') {
			content = <Success navChangeCallback={this.handleNavChange} {...this.props}/>;
		} else if(route === 'journal') {
			content = <Feed data={this.state.journal} {...this.props}/>;
		} else if(route === 'profile') {
			content = <Profile {...this.props}/>;
		} else {
			//back to Login
			content = <Login navChangeCallback={this.handleNavChange} {...this.props}/>;
		}

		return (
			<div>
				{nav}
				{content}		
				<Footer />
			</div>
		);
	}
};

export default App;

ReactDOM.render(<App />, document.querySelector('#root'));
