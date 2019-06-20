import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import PostReducer from './PostReducer';
import CommentReducer from './CommentReducer';
import AlbumReducer from './AlbumReducer';
import PhotoReducer from './PhotoReducer';

import { reducer as formReducer } from 'redux-form';

export default combineReducers({
	form: formReducer,
	users: UserReducer,
	comments: CommentReducer,
	albums: AlbumReducer,
	photos: PhotoReducer,
	posts: PostReducer
});