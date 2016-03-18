import axios from 'axios';

const getFileList = function() {
	return axios.get( 'https://api.github.com/repos/danielwrobert/blank-canvas/contents' );
};

const getFileContent = function( filename ) {
	return axios.get( `https://raw.githubusercontent.com/danielwrobert/blank-canvas/master/${ filename }` );
};

export default function getGitHubInfo( filename ) {
	return axios.all( [getFileList(), getFileContent( filename )] )
		.then( ( arr ) => ( { files: arr[0].data, filecontent: arr[1].data } ) );
}
