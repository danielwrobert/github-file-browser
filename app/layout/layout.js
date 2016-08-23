import React from 'react';
import Header from '../components/Header';

// Add API call here to return a list of files to map through below
const Layout = ( { children, history } ) => {
	return (
		<div className="main-container">
			<Header />
			<div className="container" style={{ marginTop: 50 }}>
				{ children }
			</div>
		</div>
	)
}

export default Layout;
