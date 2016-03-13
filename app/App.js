import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Activity from "./components/Activity";
import Receive from "./components/Receive";
import Response from "./components/Response";
import Success from "./components/Success";
import Profile from "./components/Profile";
import Feed from "./components/Feed";
import CSS from "./css/style.scss";
import autobind from 'autobind-decorator';
import reactMixin from 'react-mixin';
import Catalyst from 'react-catalyst';

/* Routes
1. Community
2. Activities
3. Journal
4. Profile
5. Leader
*/

class App extends React.Component {
	
	constructor() {
		super();
		this.state = {
			posts : require('./scripts/posts'),
			activities : require('./scripts/activities'),
			journal : require('./scripts/journal'),
			route: 'community'
		};
		this.handleNavChange = this.handleNavChange.bind(this);
	}

	handleNavChange(newRoute) {
		console.log('NEW ROUTE:', newRoute);
		this.setState({ route: newRoute });
	}


	render() {
		let { route } = this.state;
		let content;


		if(route === 'community') {
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
			//back to community
			content = <Feed data={this.state.posts} {...this.props}/>;
		}

		return (
			<div>
			<NavBar navChangeCallback={this.handleNavChange} />
			{content}		
			<Footer />
			</div>
		);
	}
};

export default App;

ReactDOM.render(<App />, document.querySelector('#root'));
