import React from 'react';
import getGitHubFileData from '../utils/helpers';
import Header from './Header';
import FileNav from './FileNav';
import FileContent from './FileContent';

class Main extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			files: [],
			filecontent: ''
		}
	}
	init( filename ) {
		getGitHubInfo( filename )
			.then( function( data ) {
				this.setState({
					files: data.files,
					filecontent: data.filecontent
				} );
			}.bind( this ) );
	}
	componentDidMount() {
		this.init( this.props.params.filename );
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
