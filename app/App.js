import React, {Component} from 'react';
import {render} from 'react-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Feed from "./components/Feed";
import CSS from "./css/style.scss";
import autobind from 'autobind-decorator';
import reactMixin from 'react-mixin';
import Catalyst from 'react-catalyst';

@autobind
class App extends React.Component {
	constructor() {
		super();

		this.state = {
			activities : {}
		};
	}

	componentDidMount() {
		var localStorageRef = localStorage.getItem('activities');

		if(localStorageRef){
			this.setState({
				activities : JSON.parse(localStorageRef)
			});
		}
	}

	componentWillUpdate(nextProps, nextState) {
		localStorage.setItem('activities', JSON.stringify(nextState.activities) );
	}

	loadActivities() {
		this.setState({
			activities : require('./scripts/activities')
		});
	}

  render() {
    return (
      <div>
      	<Header />
        <Feed activities={this.state.activities} loadActivities={this.loadActivities.bind(this)} linkState={this.linkState.bind(this)} {...this.props}/>
        <Footer />
      </div>
    );
  }
}

reactMixin.onClass(App, Catalyst.LinkedStateMixin);

render(<App />, document.getElementById('root'));
