import React from 'react';
import getGitHubFileData from '../utils/helpers';

class File extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			contents: []
		}
	}
	init( filePath ) {
		getGitHubFileData( filePath )
			.then( function( data ) {
				this.setState({
					contents: data.content
				} );
			}.bind( this ) );
	}
	componentDidMount() {
		this.init( this.props.params.filePath );
	}
	compnentWillReceiveProps( nextProps ) {
		this.init( nextProps.params.filePath );
	}
	render() {
		return (
			<div className="file-wrap">
				<h2 className="file-title"></h2>
				<div className="file-content">
					<pre><code className="language-markup">Some code goes here ...</code></pre>
				</div>
			</div>
		)
	}
}

export default File;
