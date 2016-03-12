import React, {Component} from 'react';
import {render} from 'react-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Feed from "./components/Feed";
import CSS from "./css/style.scss";

class App extends Component {
	constructor() {
		super();

		this.state = {
			activities : {}
		};
	}

  render() {
    return (
      <div>
      	<Header />
        <Feed />
        <Footer />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
