import React from 'react';
import Header from './Header';
import FileNav from './FileNav';
import { getGitHubInfo, getFileList, getFileContent } from '../utils/helpers';

class Main extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			files: [],
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
	initFileNav() {
		getFileList()
			.then( function( data ) {
				this.setState( {
					files: data.files,
					filecontent: ''
				} );
			}.bind( this ) );
	}
	componentDidMount() {
		this.initFileNav();
	}
	compnentWillReceiveProps( nextProps ) {
		this.init( nextprops.params.filename );
	}
	render() {
		return (
			<div className="main-container">
				<Header />
				<div className="container" style={{ marginTop: 50 }}>
					<div className="row">
						<div className="col-md-4">
							<FileNav files={ this.state.files } />
						</div>
						<div className="col-md-8">
							{ this.props.children }
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Main;
