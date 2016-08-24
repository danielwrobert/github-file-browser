import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Redirect, hashHistory } from 'react-router';
import routes from './config/routes';

ReactDOM.render(
	<Router history={ hashHistory }>
		<Redirect from="/components" to='/components/index.php' />
		{ routes }
	</Router>,
	document.getElementById( 'react' )
);
