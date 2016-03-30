import React from 'react';
import Main from '../components/Main';
import GitHubFile from '../components/GitHubFile';
import Home from '../components/Home';
import { Route, IndexRoute } from 'react-router';

export default (
	<Route path="/" component={ Main }>
		<Route path="component/:filename" component={ GitHubFile } />
		<IndexRoute component={ Home } />
	</Route>
);
