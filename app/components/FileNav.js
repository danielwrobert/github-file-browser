import React from 'react';
//import Router from 'react-router'; -- will need if I add in History

const FileNav = ( { files } ) => {
	console.log( 'File listing in FileNav component:' );
	console.log( files );
	return (
		<ul className="list-group">
			{ files.map( ( file, index ) => {
				return (
					<li className="list-group-item" key={ index }>
						{ file.download_url && <a href={ file.download_url }>{ file.path }</a> }
					</li>
				);
			} ) }
		</ul>
	)
}

FileNav.propTypes = {
	files: React.PropTypes.array.isRequired,
}

export default FileNav;
