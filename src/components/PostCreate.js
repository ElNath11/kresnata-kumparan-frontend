import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions';
import PostForm from './PostForm';

class PostCreate extends React.Component {
	onSubmit = (formValues) => {
		const userId = this.props.match.params.userId;
		this.props.createPost(formValues, userId);
	}


	render(){		
		return(
			<div>
				<h3>Create a Post</h3>
				<PostForm onSubmit={this.onSubmit} />
			</div>
		);
	}
};

export default connect(null, { createPost })(PostCreate);