import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
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
        	content = <Feed posts={this.state.posts} activities={this.state.activities} {...this.props}/>;
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
