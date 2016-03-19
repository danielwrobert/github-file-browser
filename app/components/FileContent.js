import React from 'react';

const FileContent = ( { filename, filecontent } ) => {
	console.log( filecontent );
	return (
		<div class="file-content-wrapper">
			<h2>{ filename }</h2>
			<div class="file-content">
				{ filecontent }
			</div>
		</div>
	)
}

FileContent.propTypes = {
	filename: React.PropTypes.string.isRequired,
	filecontent: React.PropTypes.string.isRequired
}

export default FileContent;
