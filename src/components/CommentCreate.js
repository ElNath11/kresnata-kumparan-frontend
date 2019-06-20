import React from 'react';
import { connect } from 'react-redux';
import { createComment } from '../actions';
import CommentForm from './CommentForm';

class CommentCreate extends React.Component {
	onSubmit = (formValues) => {
		const userId = this.props.match.params.userId;
		const postId = this.props.match.params.postId;
		this.props.createComment(formValues, userId, postId);
	}

	render(){
		return(
			<div>
			<h3>Create a Comment</h3>
			<CommentForm onSubmit={this.onSubmit} />
			</div>
		);
	}
};

export default connect(null, { createComment })(CommentCreate);