import React from 'react';
import Router from 'react-router';
import Nav from './Nav';
import FileContent from './FileContent';
import { getGitHubInfo, getFileList, getFileContent } from '../utils/helpers';

class GitHubFiles extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			filecontent: '',
			fileList: []
		}

		this._updateComponent = this._updateComponent.bind( this );
	}
	_fetchFileData( filename ) {
		getGitHubInfo( filename )
			.then( function( data ) {
				this.setState( {
					filecontent: data.filecontent,
					fileList: data.files
				} );
			}.bind( this ) );
	}
	_updateComponent( e ) {
		e.preventDefault();
		const filename = e.target.dataset.filename;
		const filetype = e.target.dataset.type;

		if ( filetype === 'file' ) {
			this.context.router.push( '/components/' + filename );
		}
	}
	componentWillMount() {
		this._fetchFileData( this.props.params.filename );
	}
	componentWillUpdate() {
		this._fetchFileData( this.props.params.filename );
	}
	render() {
		return (
			<div className="row">
				<div className="col-md-4">
					<Nav updateComponent={ this._updateComponent } fileList={ this.state.fileList } history={ history } />
				</div>
				<div className="col-md-8">
					{ this.props.children }
				</div>
			</div>
		)
	}
}

GitHubFiles.contextTypes = {
	router: React.PropTypes.object.isRequired
}

export default GitHubFiles;
