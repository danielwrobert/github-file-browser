import React from 'react';
//import Router from 'react-router'; -- will need if I add in History

const FileNav = ( { files } ) => {
	console.log( files );
	return (
		<ul className="list-group">
			{ files.map( ( file, index ) => {
				return (
					<li className="list-group-item" key={ index }>
						{ file.html_url && <h4>{ file.name }</h4> }
						{ file.download_url && <div className="download-link"><a href={ file.download_url }>{ file.download_url }</a></div> }
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
