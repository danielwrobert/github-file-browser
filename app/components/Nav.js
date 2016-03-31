import React from 'react';
import Router from 'react-router';
import { getFileList } from '../utils/helpers';

class Nav extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			fileList: []
		}
	}
	initFileNav() {
		getFileList()
			.then( function( data ) {
				this.setState( {
					fileList: data.files
				} );
			}.bind( this ) );
	}
	updateComponent( e ) {
		e.preventDefault();
		const filename = e.target.dataset.filename;
		const filetype = e.target.dataset.type;

		if ( filetype === 'file' ) {
			this.context.router.push( '/component/' + filename );
		}
	}
	componentDidMount() {
		this.initFileNav();
	}
	render() {
		return (
			<ul className="list-group">
				{ this.state.fileList.map( ( file, index ) => {
					return (
						<li className="list-group-item" key={ index }>
							{ file.name && <a href={ file.download_url } onClick={ ( e ) => this.updateComponent( e ) } data-type={ file.type } data-filename={ file.name }>{ file.name }</a> }
						</li>
					);
				} ) }
			</ul>
		)
	}
}

//Nav.propTypes = {
	//files: React.PropTypes.array.isRequired
//}

Nav.contextTypes = {
	router: React.PropTypes.object.isRequired
}

export default Nav;
