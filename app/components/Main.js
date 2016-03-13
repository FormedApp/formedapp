import React, {Component} from 'react';
import {render} from 'react-dom';
import Header from "./Header";
import Footer from "./Footer";
import Feed from "./Feed";
import CSS from "../css/style.scss";
import autobind from 'autobind-decorator';
import reactMixin from 'react-mixin';
import Catalyst from 'react-catalyst';
import {History} from 'react-router';

@autobind
class Main extends React.Component {
	constructor() {
		super();

		this.state = {
			posts : {},
			activities : {}
		};
	}

	loadState() {
		this.setState({
			posts : require('../scripts/posts'),
			activities : require('../scripts/activities')
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

reactMixin.onClass(Main, Catalyst.LinkedStateMixin, History);

export default Main;
