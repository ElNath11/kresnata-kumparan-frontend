import React from 'react';
import { connect } from 'react-redux';
import { fetchPhoto } from '../actions';
import { Link } from 'react-router-dom';

class PhotoDetail extends React.Component {
	componentDidMount(){
		this.props.fetchPhoto(this.props.match.params.id);
	}

	renderButton(){
		const userId = this.props.match.params.userId;
		const albumId = this.props.match.params.albumId;
		return(
			<div className="ui cards">
			  <Link to={`/photosList/${userId}/${albumId}`} className="ui secondary button">Back</Link>
			</div>
		);
	}

	render(){
		if (!this.props.photo) {
			return <div className="ui card">Loading...</div>;
			}

		const { id,title, url } = this.props.photo;
		return(
			<div className="center">
				{this.renderButton()}
			<div className="ui divider"></div>
			<div className="ui doubling stackable cards">
			<div className="ui Card">
				<div className="image" key={id}>
				    <img src={url} alt={title}/>
				</div>
				  <div className="content">
				    <div className="header">{title}</div>
				    <div className="description">desc</div>
				  </div>
				<div className="extra content">
				</div>
			</div>
			</div>
			</div>
		);
	}
};

const mapStateToProps = (state, ownProps) => {
	return { photo: state.photos[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchPhoto })(PhotoDetail);