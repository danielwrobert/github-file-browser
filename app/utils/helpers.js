import axios from 'axios';

export default function getGitHubFileData() {
	return axios.get( 'https://api.github.com/repos/danielwrobert/blank-canvas/contents' )
		.then( ( response ) => ( { contents: response.data } ) );
}
