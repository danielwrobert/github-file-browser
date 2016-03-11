import React from 'react';
import Main from '../components/Main';
import File from '../components/File';
import Home from '../components/Home';
import { Route, IndexRoute } from 'react-router';

export default (
	<Route path="/" component={ Main }>
		<Route path="component/:filename" component={ File } />
		<IndexRoute component={ Home } />
	</Route>
);
