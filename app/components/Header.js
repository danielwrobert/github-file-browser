import React from 'react';
import { Link } from 'react-router';

const Header = () => {
	return (
		<nav className="navbar navbar-default">
			<div className="navbar-header" style={{ paddingBottom: 20 }}>
				<h1>
					<Link className="navbar-brand" to="/">Theme Pattern File Browser</Link>
				</h1>
			</div>
		</nav>
	)
}

export default Header;
