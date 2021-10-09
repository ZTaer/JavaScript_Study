import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePages from './pages/home-pages';
import TestPages from './pages/test-pages';
import Header from './components/header';

const App = () => (
	<div className="App">
		<Header />
		<Switch>
			<Route exact path="/" component={HomePages} />
			<Route exact path="/test" component={TestPages} />
		</Switch>
	</div>
);

export default App;
