import React from 'react';
import Router from 'react-router';

class Nav extends React.Component {
	updateComponent( e ) {
		e.preventDefault();
		alert("Jello!");

		const filename = e.target.dataset.filename;
		this.context.router.push( '/component/' + filename );
	}
	render() {
		const { files } = this.props;
		return (
			<ul className="list-group">
				{ files.map( ( file, index ) => {
					return (
						<li className="list-group-item" key={ index }>
							{ file.download_url && <a href={ file.download_url } onClick={ ( e ) => this.updateComponent( e ) } data-filename={ file.path }>{ file.path }</a> }
						</li>
					);
				} ) }
			</ul>
		)
	}
}

Nav.propTypes = {
	files: React.PropTypes.array.isRequired
}

Nav.contextTypes = {
	router: React.PropTypes.object.isRequired
}

//Nav.initFileNav();

export default Nav;
