import React from 'react';
//import Router from 'react-router'; -- will need if I add in History

class FileNav extends React.Component {
	updateComponent( e ) {
		e.preventDefault();
		alert("Jello!");

		const filename = e.target.dataset.filename;
		this.props.history.pushState( null, '/component/' + filename );
	}
	render() {
		return (
			<ul className="list-group">
				{ this.props.files.map( ( file, index ) => {
					return (
						<li className="list-group-item" key={ index }>
							{ file.download_url && <a href={ file.download_url } data-filename={ file.path } onClick={ () => this.updateComponent() }>{ file.path }</a> }
						</li>
					);
				} ) }
			</ul>
		)
	}
}

FileNav.propTypes = {
	files: React.PropTypes.array.isRequired,
	history: React.PropTypes.object.isRequired
}

export default FileNav;
