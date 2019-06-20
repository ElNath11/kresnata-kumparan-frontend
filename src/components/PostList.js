import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';

class PostList extends React.Component {

	componentDidMount(){
		this.props.fetchPosts(this.props.match.params.id);
	}	

	renderButton(){
		const userId = this.props.match.params.id;
		return(
			<div className="four wide column">
			  <Link to={`/postCreate/${userId}`} className="ui icon left labeled button">
			   <i aria-hidden="true" className="plus square icon"></i>Create Post</Link>
			   <Link to="/" className="ui secondary button">Back</Link>
			</div>
		);
	}

	renderActionButton(post){
		return(
			<div className="ui segment">
				<Link to={`/commentsList/${post.userId}/${post.id}`} className="ui button secondary">
					View Comments
				</Link>
				<Link to={`/postEdit/${post.userId}/${post.id}`} className="ui button primary">
					Edit
				</Link>
				<Link to={`/postDelete/${post.userId}/${post.id}`} className="ui button negative">
					Delete
				</Link>
			</div>
		);
	}

	renderListPost(){
		return this.props.posts.map(post => {
			return(
				<div className="ui segment" key={post.id}>
					<div className="content">
						<div className="card card-body text-left">
							<h3>{post.title}</h3>
							<p>{post.body}</p>
						</div>
					</div>
					{this.renderActionButton(post)}
				</div>
			);
		});
	}


	render(){
		return(
			<div>
			<div className="ui huge header">List Post User</div>
			{ this.renderButton() }
			{ this.renderListPost() }
			</div>
		);
	}
};

const mapStateToProps = (state) => {
	return { posts: Object.values(state.posts) };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);