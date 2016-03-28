import React from 'react';
//import Router from 'react-router'; -- will need if I add in History

const FileNav = ( { files } ) => {
	console.log( 'File listing in FileNav component:' );
	console.log( files );
	updateComponent( e ) {
		e.preventDefault();

		const filename = e.target.dataset.filename;
		this.props.history.pushState( null, '/component/' + filename );
	}
	return (
		<ul className="list-group">
			{ files.map( ( file, index ) => {
				return (
					<li className="list-group-item" key={ index }>
						{ file.download_url && <a href={ file.download_url } data-filename={ file.path } onClick={ () => this.updateComponent() }>{ file.path }</a> }
					</li>
				);
			} ) }
		</ul>
	)
}

FileNav.propTypes = {
	files: React.PropTypes.array.isRequired,
	history: React.PropTypes.object.isRequired
}

export default FileNav;
