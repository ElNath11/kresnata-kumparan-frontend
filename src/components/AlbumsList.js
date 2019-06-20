import React from 'react';
import { connect } from 'react-redux';
import { fetchAlbums } from '../actions';
import { Link } from 'react-router-dom';

class AlbumsList extends React.Component {
	componentDidMount(){
		this.props.fetchAlbums(this.props.match.params.id)
	}

	renderButton(){
		return(
			<div className="ui cards">
			  <Link to="/" className="ui secondary button">Back</Link>
			</div>
		);
	}

	renderListAlbum(){
		return this.props.album.map(album => {
			return(
			
			<div className="four wide column" key={album.id}>
				<div className="ui top attached segment">
					<h3 className="ui segment">{album.title}</h3>
				</div>
				<div className="ui bottom attached button">
					<Link to={`/photosList/${album.userId}/${album.id}`} className="btn btn-primary">View Photo</Link>
				</div>
			</div>
			
			);
		});
	}

	render(){
		return(
			<div>
				{ this.renderButton() }
				<div className="ui huge header">List Albums User</div>
				<div  className="ui grid">
				{ this.renderListAlbum() }
				</div>				
			</div>
		);
	}
};

const mapStaetToProps = (state) => {
	return { album: Object.values(state.albums) }
};

export default connect(mapStaetToProps, { fetchAlbums })(AlbumsList);