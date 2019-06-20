import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

//user and post
import UserList from './UserList';
import PostList from './PostList';
import PostCreate from './PostCreate';
import PostEdit from './PostEdit';
import PostDelete from './PostDelete';

//comments
import CommentsList from './CommentsList';
import CommentCreate from './CommentCreate';
import CommentEdit from './CommentEdit';
import CommentDelete from './CommentDelete';

//List
import AlbumsList from './AlbumsList';
import PhotosList from './PhotosList';
import PhotoDetail from './PhotoDetail';




import Header from './Header';
import history from '../history';

const App = () => {
	return(
		<div className="ui container">
			<Router history={history}>
				<div>
					<Header />
					<Switch>
						<Route path="/" exact component={UserList} />
						<Route path="/postsList/:id" exact component={PostList} />
						<Route path="/postCreate/:userId" exact component={PostCreate} />
						<Route path="/postEdit/:userId/:id" exact component={PostEdit} />
						<Route path="/postDelete/:userId/:id" exact component={PostDelete} />

						<Route path="/commentsList/:userId/:postId" exact component={CommentsList} />
						<Route path="/commentCreate/:userId/:postId" exact component={CommentCreate} />
						<Route path="/commentEdit/:userId/:postId/:id" exact component={CommentEdit} />
						<Route path="/commentDelete/:userId/:postId/:id" exact component={CommentDelete} />

						<Route path="/albumsList/:id" exact component={AlbumsList} />
						<Route path="/photosList/:userId/:id" exact component={PhotosList} />
						<Route path="/photoDetail/:userId/:albumId/:id" exact component={PhotoDetail} />
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;