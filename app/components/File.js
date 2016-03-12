import React from 'react';
import getGitHubFileData from '../utils/helpers';
import FileContent from './GitHub/FileContent';

class File extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			file: 'readme'
		}
	}
	init( file ) {
		getGitHubFileData( file )
			.then( function( data ) {
				this.setState({
					file: data.name
				} );
			}.bind( this ) );
	}
	componentDidMount() {
		this.init( this.props.params.file );
	}
	compnentWillReceiveProps( nextProps ) {
		this.init( nextProps.params.file );
	}
	render() {
		return (
			<FileContent file={ this.props.params.file }/>
		)
	}
}

export default File;
