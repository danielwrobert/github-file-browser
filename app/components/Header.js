import React from 'react';
import { Link } from 'react-router';

const Header = () => {
	return (
		<nav className="navbar navbar-default">
			<div className="container-fluid" style={{ paddingBottom: 20 }}>
				<div className="navbar-header">
					<h1>
						<Link className="navbar-brand" to="/">Theme Pattern File Browser</Link>
					</h1>
				</div>
				<div className="collapse navbar-collapse">
					<ul className="nav navbar-nav" style={{ marginTop: 22 }}>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="components">Components</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Header;
