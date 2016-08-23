/**
 * External Dependencies
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

/**
 * Internal Dependencies
 */
import Layout from '../layout/layout';
import HomePage from '../pages/home';
import ComponentsPage from '../pages/components';
import GitHubFiles from '../components/GitHubFiles';

export default (
	<Route path="/" component={ Layout }>
		<Route path="components" component={ ComponentsPage } />
			<Route path="components/:filename" component={ ComponentsPage } />
		<IndexRoute component={ HomePage } />
	</Route>
);
