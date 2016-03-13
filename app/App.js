import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';
import { createHistory } from 'history';

/*
	Import Components
*/

import NotFound from "./components/NotFound";
import Main from "./components/Main";
import Login from "./components/Login";

/*
	Routes
*/

var routes = (

<Router history={createHistory()}>
	<Route path="/" component={Main} />
	<Route path="/feed" component={Main} />
	<Route path="*" component={NotFound} />
</Router>
	);


ReactDOM.render(routes, document.querySelector('#root'));