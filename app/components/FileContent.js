import React from 'react';

const FileContent = ( { filename, filecontent } ) => {
	return (
		<div className="file-content-wrapper">
			<h2>{ filename }</h2>
			<div className="file-content">
				<pre>{ filecontent }</pre>
			</div>
		</div>
	)
}

FileContent.propTypes = {
	filename: React.PropTypes.string.isRequired,
	filecontent: React.PropTypes.string.isRequired
}

export default FileContent;
