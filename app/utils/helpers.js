import axios from 'axios';

export default function getGitHubFileData( filePath ) {
	return axios.get( `https://api.github.com/repos/danielwrobert/blank-canvas/contents/${ filePath }` )
		.then( ( responseArr ) => ( { contents: responseArr[0].data.path } ) );
}
