import React from 'react';
import Header from './Header';
import Nav from './Nav';
import { getFileList } from '../utils/helpers';

// Add API call here to return a list of files to map through below
class Main extends React.Component {
	constructor() {
		super()
		this.fileList = []
	}
	initFileNav() {
		getFileList()
			.then( function( data ) {
				this.fileList = this.fileList.concat( data.files );
				console.log( data.files );
				console.log( this.fileList );
			}.bind( this ) );
	}
	componentWillMount() {
		this.initFileNav();
	}
	render() {
		const { children, history } = this.props;
		return (
			<div className="main-container">
				<Header />
				<div className="container" style={{ marginTop: 50 }}>
					<div className="row">
						<div className="col-md-4">
							<Nav history={ history } files={ this.fileList } />
						</div>
						<div className="col-md-8">
							{ children }
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Main;
