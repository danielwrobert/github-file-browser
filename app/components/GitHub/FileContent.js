import React from 'react';

const FileContent = ( { files } ) => {
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

FileContent.propTypes = {
	files: React.PropTypes.array.isRequired
}

export default FileContent;
