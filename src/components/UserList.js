import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import { Link } from 'react-router-dom'


class UserList extends React.Component{
	componentDidMount(){
		this.props.fetchUsers();
	}

	renderListUser(){
		return this.props.users.map(user => {
			return(
				<div className="item" key={user.id}>
				<i className="large middle aligned icon user" />
					<div className="content">
						<h2>{user.name}</h2>
						<div className="ui segment">
						<Link to={`/postsList/${user.id}`} className="ui blue inverted button">View Posts User</Link>
						<Link to={`/albumsList/${user.id}`} className="ui violet inverted button">View Albums User</Link>
						</div>
					</div>
				</div>
			);
		});
	}
	render(){
		if (!this.props.users) {
			return <div className="ui card">Loading...</div>;
			}
		return(
			<div className="ui relaxed divided list">
				{ this.renderListUser() }
			</div>
		);
	}
};

const mapStateToProps = (state) => {
	return { users: Object.values(state.users) };
};

export default connect(mapStateToProps, {fetchUsers})(UserList);