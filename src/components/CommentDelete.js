import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import history from '../history';
import { fetchComment, deleteComment } from '../actions';

class CommentDelete extends React.Component {
	componentDidMount(){
		this.props.fetchComment(this.props.match.params.id);
	}

	renderActions(){
		const {id} = this.props.match.params;
		const {userId} = this.props.match.params;
		const {postId} = this.props.match.params;
	return (
		<React.Fragment>
			<button 
			onClick={() => this.props.deleteComment(id, userId, postId)} 
			className="ui button negative">Delete</button>
			<Link to={`/commentsList/${userId}/${postId}`} className="ui button">Cancel</Link>
		</React.Fragment>
	);
}

renderContent() {
	if (!this.props.comment){
		return 'Are you sure you want to delete this comment?'
	}

	return `Are you sure you want to delete this comment from: ${this.props.comment.name}`
}

	render(){
		const {postId} = this.props.match.params;
		return(
			<Modal 
			title="Delete Comment"
			content={this.renderContent()}
			actions={this.renderActions()}
			onDismiss={() => history.push(`/commentsList/${this.props.match.params.userId}/${postId}`)}
			/>
		);
	}
};

const mapStateToProps = (state, ownProps) => {
	return { comment: state.comments[ownProps.match.params.id] }
};

export default connect(mapStateToProps, {fetchComment, deleteComment})(CommentDelete);