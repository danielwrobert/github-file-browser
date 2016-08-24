import React from 'react';
import GitHubFiles from '../components/GitHubFiles';

class ComponentsPage extends React.Component {
	render() {
		return (
			<div className="home-content-wrap">
				<h2 className="text-center" style={{ marginBottom: 25 }}>Compoonents for theme development!</h2>
				<p className="text-center" style={{ marginBottom: 35 }}>
					Theme Compoonents are a new way to get started with developing themes. Think of _S but a bit more modern.
				</p>
				<GitHubFiles filename={ this.props.params.filename } />
			</div>
		)
	}
}

export default ComponentsPage;
