import React from 'react';

class Nav extends React.Component {
	_handleClick( e ) {
		e.preventDefault();

		this.props.updateComponent( this._filename );
	}
	render() {
		return (
			<li className="list-group-item" key={ this.props.key }>
				{ this.props.fileName && <a href={ this.props.download_url } onClick={ ( e ) => this._handleClick( e ) } ref={ () => ( this._filename = this.props.fileName ) }>{ this.props.fileName }</a> }
			</li>
		)
	}
}

export default Nav;
