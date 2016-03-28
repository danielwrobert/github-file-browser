import React from 'react';
import Router from 'react-router';
import FileContent from './FileContent';

const File = () => {
	return (
		<FileContent filename={ this.props.params.filename } filecontent={ this.state.filecontent } />
	)
}

export default File;
