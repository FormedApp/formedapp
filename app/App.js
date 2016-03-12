import React, {Component} from 'react';
import {render} from 'react-dom';
import Header from "./components/Header";
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <div>
      	<NavBar />
      	<Header />
        <h1>
          Welcome to Formed App.
        </h1>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
