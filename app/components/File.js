import React from 'react';
import getGitHubFileData from '../utils/helpers';
import FileContent from './GitHub/FileContent';

class File extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			files: []
		}
	}
	init() {
		getGitHubFileData()
			.then( function( data ) {
				this.setState({
					files: data.contents
				} );
			}.bind( this ) );
	}
	componentDidMount() {
		//this.init( this.props.params.file );
		this.init();
	}
	//compnentWillReceiveProps( nextProps ) {
		//this.init( nextProps.params.file );
	//}
	render() {
		return (
			//<FileContent file={ this.props.params.file }/>
			<FileContent files={ this.state.files }/>
		)
	}
}

export default File;
