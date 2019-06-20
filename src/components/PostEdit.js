import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchPost, editPost } from '../actions';
import PostForm from './PostForm';


class PostEdit extends React.Component {
	componentDidMount(){
		this.props.fetchPost(this.props.match.params.id);
		console.log('yang post gan', this.props)
	}

	onSubmit = (formValues) => {
		const userId = this.props.match.params.userId;
		this.props.editPost(this.props.match.params.id, formValues, userId);
	};

	render(){
		if(!this.props.post){
			return <div>Loading...</div>
		}
		return(
			<div>
				<h3>Edit Post</h3>
				<PostForm 
				initialValues ={_.pick(this.props.post, 'title', 'body')}
				onSubmit={this.onSubmit} />
			</div>
		);
	}
};

const mapStateToProps = (state, ownProps) => {
	return { post: state.posts[ownProps.match.params.id] };
};

export default connect(
	mapStateToProps, 
	{fetchPost, editPost}
	)(PostEdit);