import React from 'react';
import GitHubFiles from '../components/GitHubFiles';

const ComponentsPage = () => {
	return (
		<div className="home-content-wrap">
			<h2 className="text-center" style={{ marginBottom: 25 }}>Compoonents for theme development!</h2>
			<p className="text-center" style={{ marginBottom: 35 }}>
				Theme Compoonents are a new way to get started with developing themes. Think of _S but a bit more modern.
			</p>
			<GitHubFiles />
		</div>
	)
}

export default ComponentsPage;
