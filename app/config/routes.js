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

export default (
	<Route path="/" component={ Layout }>
		<Route path="components/:filename" component={ ComponentsPage } />
		<IndexRoute component={ HomePage } />
	</Route>
);
