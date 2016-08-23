import React from 'react';
import Main from '../components/Main';
import GitHubFiles from '../components/GitHubFiles';
import Home from '../components/Home';
import { Route, IndexRoute } from 'react-router';

export default (
	<Route path="/" component={ Main }>
		<Route path="components/:filename" component={ GitHubFiles } />
		<IndexRoute component={ Home } />
	</Route>
);
