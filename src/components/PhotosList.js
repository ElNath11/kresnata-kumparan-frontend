import React from 'react';
import { connect } from 'react-redux';
import { fetchPhotos } from '../actions';
import { Link } from 'react-router-dom';

class PhotosList extends React.Component {
	componentDidMount(){
		this.props.fetchPhotos(this.props.match.params.id)
	}

	renderButton(){
		const userId = this.props.match.params.userId;
		return(
			<div className="ui cards">
			  <Link to={`/albumsList/${userId}`} className="ui secondary button">Back</Link>
			</div>
		);
	}

	renderListPhotos(){
		const userId = this.props.match.params.userId;
		return this.props.photos.map(photo => {
			return(
				<div className="ui raised card" key={photo.id}>
    				<div className="image"><img src={photo.thumbnailUrl} alt={photo.title} /></div>
    				<div className="ui bottom attached button">
						<Link to={`/photoDetail/${userId}/${photo.albumId}/${photo.id}`} >View Detail Photo</Link>
					</div>	
  				</div>
  				
			);
		});
	}

	render(){
		if (!this.props.photos) {
			return <div className="ui card">Loading...</div>;
			}
		return(
			<div>
				{ this.renderButton() }
				<div className="ui six cards">
					{ this.renderListPhotos() }
				</div>
			</div>
		);
	}
};

const mapStateToProps = (state) => {
	return { photos: Object.values(state.photos) }
};

export default connect(mapStateToProps, { fetchPhotos })(PhotosList);