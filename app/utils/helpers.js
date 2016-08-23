import axios from 'axios';

export function _getFileList() {
	return axios.get( 'https://api.github.com/repos/Automattic/theme-components/contents' )
		.then( ( response ) => ( { files: response.data } ) );
};

export function _getFileContent( filename ) {
	return axios.get( `https://raw.githubusercontent.com/Automattic/theme-components/master/${ filename }` )
		.then( ( response ) => ( { filecontent: response.data } ) );
};

//export function getGitHubInfo( filename ) {
	//return axios.all( [getFileList(), getFileContent( filename )] )
		////.then( ( arr ) => ( { files: arr[0].data, filecontent: arr[1].data } ) );
		//.then( axios.spread( ( list, content ) => ( {
			////console.log( 'File List Data:' );
			////console.log( list.data );
			////console.log( 'File Content Data:' );
			////console.log( content.data );
			//files: list.data,
			//filecontent: content.data
		//} ) ) );
//}
