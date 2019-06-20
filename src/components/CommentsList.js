import React from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../actions';
import { Link } from 'react-router-dom';

class CommentsList extends React.Component {
	componentDidMount(){
		this.props.fetchComments(this.props.match.params.postId);
	}	 

	renderButton(){
		const postId = this.props.match.params.postId;
		const userId = this.props.match.params.userId;
		return(
			<div className="four wide column">
			  <Link to={`/commentCreate/${userId}/${postId}`} className="ui icon left labeled button">
			   <i aria-hidden="true" className="plus square icon"></i>Create Comment</Link>
			   <Link to={`/postsList/${userId}`} className="ui secondary button">
			   Back</Link>
			</div>
		);
	}


	renderListComment(){
		const postId = this.props.match.params.postId;
		const userId = this.props.match.params.userId;
		return this.props.comments.map(comment => {
			return(
				<div className="comment" key={comment.id}>
				    <div className="avatar">
				      <i className="large middle aligned icon user" />
				    </div>
			    	<div className="content">
				      <span className="author">{comment.name}</span>
				      <div className="metadata"><div>{comment.email}</div></div>
				      <div className="text">{comment.body}</div>
				      <div className="actions">
				      <Link to={`/commentEdit/${userId}/${postId}/${comment.id}`} className="">Edit</Link>
				      <Link to={`/commentDelete/${userId}/${postId}/${comment.id}`} className="">Delete</Link>
				      </div>
				    </div>
				</div>
			);
		});
	}


	render(){
		return(
			<div className="ui comments">
			{ this.renderButton() }	
			<h3 className="ui dividing header">Comments</h3>
			{ this.renderListComment() }
			</div>
		);
	}
};

const mapStateToProps = (state, ownProps) => {
	return { comments: Object.values(state.comments) };
};

export default connect(mapStateToProps, { fetchComments })(CommentsList);