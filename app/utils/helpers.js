import axios from 'axios';

export default function getGitHubFileData( file ) {
	return axios.get( `https://api.github.com/repos/danielwrobert/blank-canvas/contents/${ file }` )
		.then( ( response ) => ( { contents: response.data.name } ) );
}
