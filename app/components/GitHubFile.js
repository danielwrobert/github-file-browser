import React from 'react';
import Router from 'react-router';
import FileContent from './FileContent';
import { getGitHubInfo, getFileList, getFileContent } from '../utils/helpers';

class File extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			//files: [],
			filecontent: ''
		}
	}
	//init( filename ) {
		//getGitHubInfo( filename || 'README.md' )
			//.then( function( data ) {
				//console.log( 'Data returned from getGitHubInfo call:' );
				//console.log( data );
				//this.setState({
					//files: data.files,
					//filecontent: data.filecontent
				//} );
			//}.bind( this ) );
	//}
	//initFileNav() {
		//getFileList()
			//.then( function( data ) {
				//this.setState( {
					//files: data.files
				//} );
			//}.bind( this ) );
	//}
	initFileContent( filename ) {
		getFileContent( filename )
			.then( function( data ) {
				this.setState( {
					filecontent: data.filecontent
				} );
			}.bind( this ) );
	}
	componentDidMount() {
		this.initFileContent( this.props.params.filename );
	}
	compnentWillReceiveProps( nextProps ) {
		this.initFileContent( nextprops.params.filename );
	}
	render() {
		return (
			<FileContent filename={ this.props.params.filename } filecontent={ this.state.filecontent } />
		)
	}
}

export default File;
