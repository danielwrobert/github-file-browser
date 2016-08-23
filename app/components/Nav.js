import React from 'react';
//import Router from 'react-router';

class Nav extends React.Component {
	render() {
		return (
			<ul className="list-group">
				{ this.props.fileList.map( ( file, index ) => {
					return (
						<li className="list-group-item" key={ index }>
							{ file.name && <a href={ file.download_url } onClick={ ( e ) => this.props.updateComponent( e ) } data-type={ file.type } data-filename={ file.name }>{ file.name }</a> }
						</li>
					);
				} ) }
			</ul>
		)
	}
}

//Nav.contextTypes = {
	//router: React.PropTypes.object.isRequired
//}

export default Nav;
