import React from 'react';
import FileNav from './FileNav';

const Main = ( { children } ) => {
	return (
		<div className="main-container">
			<nav className="navbar navbar-default">
				<div className="navbar-header" style={{ paddingBottom: 20 }}>
					<h1>
						<a className="navbar-brand" href="/">Theme Pattern File Browser</a>
					</h1>
				</div>
			</nav>
			<div className="container" style={{ marginTop: 50 }}>
				<div className="row">
					<FileNav />
					<div className="col-md-8">
						{ children }
					</div>
				</div>
			</div>
		</div>
	)
}

export default Main;
