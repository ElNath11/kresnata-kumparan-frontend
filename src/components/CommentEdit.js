import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchComment, editComment } from '../actions';
import CommentForm from './CommentForm';


class CommentEdit extends React.Component {
	componentDidMount(){
		this.props.fetchComment(this.props.match.params.id);
		console.log('iki lo', this.props);
	}

	onSubmit = (formValues) => {
		const userId = this.props.match.params.userId;
		const postId = this.props.match.params.postId;
		this.props.editComment(this.props.match.params.id, formValues, userId, postId);
	};

	render(){
		if(!this.props.comment){
			return <div>Loading...</div>
		}
		return(
			<div>
				<h3>Edit Comment</h3>
				<CommentForm 
				initialValues ={_.pick(this.props.comment, 'name', 'email' ,'body')}
				onSubmit={this.onSubmit} />
			</div>
		);
	}
};

const mapStateToProps = (state, ownProps) => {
	return { comment: state.comments[ownProps.match.params.id] };
};

export default connect(
	mapStateToProps, 
	{fetchComment, editComment}
	)(CommentEdit);