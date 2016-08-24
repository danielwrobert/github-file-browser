import React from 'react';

const FileContent = ( { fileName, fileContent } ) => {
	return (
		<div className="file-content-wrapper">
			<h2>{ fileName }</h2>
			<div className="file-content">
				<pre>{ fileContent }</pre>
			</div>
		</div>
	)
}

FileContent.propTypes = {
	fileName: React.PropTypes.string.isRequired,
	fileContent: React.PropTypes.string.isRequired
}

export default FileContent;
