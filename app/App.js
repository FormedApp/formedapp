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
			posts : {},
			activities : {}
		};
	}

	loadState() {
		this.setState({
			posts : require('./scripts/posts'),
			activities : require('./scripts/activities')
		});
	}

  render() {
    return (
      <div>
      	<Header />
        <Feed posts={this.state.posts} activities={this.state.activities} loadState={this.loadState.bind(this)} linkState={this.linkState.bind(this)} {...this.props}/>
        <Footer />
      </div>
    );
  }
}

reactMixin.onClass(App, Catalyst.LinkedStateMixin);

render(<App />, document.getElementById('root'));
