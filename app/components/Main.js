import React from 'react';
import Header from './Header';
import Nav from './Nav';
import { getFileList } from '../utils/helpers';

// Add API call here to return a list of files to map through below
const initFileNav = () => {
	return getFileList()
		.then( function( data ) {
			alert( 'Zimbinni!' );
			return data.files;
		});
}

const Main = ( { children, history } ) => {
	return (
		<div className="main-container">
			<Header />
			<div className="container" style={{ marginTop: 50 }}>
				<div className="row">
					<div className="col-md-4">
						<Nav history={ history } files={ () => initFileNav() } />
					</div>
					<div className="col-md-8">
						{ children }
					</div>
				</div>
			</div>
		</div>
	)
}


export default Main;
