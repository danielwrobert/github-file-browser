import React from 'react';
import Router from 'react-router';
import Nav from './Nav';
import FileContent from './FileContent';
import { _getFileList, _getFileContent } from '../utils/helpers';

class GitHubFiles extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			fileList: [],
			fileName: '',
			fileContent: ''
		}

		this._updateComponent = this._updateComponent.bind( this );
		//this._fetchFileData = this._fetchFileData.bind( this );
	}

	//componentWillMount() {
	componentDidMount() {
		this._fetchFileData( this.state.fileName || 'index.php' );
		//this._fetchFileData( 'index.php' );
	}

	//componentWillReceiveProps() {
		//this._fetchFileData( this.state.fileName );
	//}

	_fetchFileData( filename ) {
		_getFileContent( filename )
			.then( _getFileList )
			.then( ( data ) => {
				this.setState( {
					fileList: data.files,
					fileName: filename,
					fileContent: data.filecontent
				} );
			} );
	}

	_updateComponent( filename ) {
		_getFileContent( filename )
			.then( ( data ) => {
				this.setState( {
					fileName: filename,
					fileContent: data.filecontent
				} );
			} );

		this.context.router.push( '/components/' + filename );
	}

	_renderNavigation() {
		return (
			<ul className="list-group">
				{ this.state.fileList.map( ( file, index ) => {
					return (
						<Nav updateComponent={ this._updateComponent } fileName={ file.name } fileUrl={ file.download_url } key={ index } />
					);
				} ) }
			</ul>
		)
	}

	render() {
		const componentNav = this._renderNavigation();
		return (
			<div className="row">
				<div className="col-md-4">
					{ componentNav }
				</div>
				<div className="col-md-8">
					<FileContent fileName={ this.state.fileName } fileContent={ this.state.fileContent || 'Empty...' } />
				</div>
			</div>
		)
	}
}

GitHubFiles.contextTypes = {
	router: React.PropTypes.object.isRequired
}

export default GitHubFiles;
