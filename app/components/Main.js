import React from 'react';
import Header from './Header';
import Nav from './Nav';

// Add API call here to return a list of files to map through below
const Main = ( { children, history } ) => {
	return (
		<div className="main-container">
			<Header />
			<div className="container" style={{ marginTop: 50 }}>
				<div className="row">
					<div className="col-md-4">
						<Nav history={ history } />
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
