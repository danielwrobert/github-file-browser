import React from 'react';
import FileContent from './FileContent';

const File = ( { filename } ) => {
	return (
		<FileContent filename={ this.props.params.filename } filecontent={ this.state.filecontent } />
	)
}

export default File;
