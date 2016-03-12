import React from 'react';

const FileContent = ( { file } ) => {
	console.log( file );
	return (
		<div className="file-wrap">
			{ file && <h2 className="file-title">{ file }</h2> }
		</div>
	)
}

FileContent.propTypes = {
	file: React.PropTypes.string.isRequired
}

export default FileContent;
