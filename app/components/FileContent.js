import React from 'react';

const FileContent = ( { filecontent } ) => {
	console.log( filecontent );
	return (
		<div class="file-content">
			{ filecontent }
		</div>
	)
}

FileContent.propTypes = {
	filename: React.PropTypes.string.isRequired,
	filecontent: React.PropTypes.string.isRequired
}

export default FileContent;
