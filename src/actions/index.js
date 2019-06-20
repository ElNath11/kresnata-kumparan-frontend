import dataApi from '../apis/jsonPlaceholder';
import history from '../history';
import {	
			FETCH_USERS,
			FETCH_ALBUMS,
			FETCH_COMMENT,
			FETCH_COMMENTS,
			FETCH_PHOTOS,
			FETCH_PHOTO,
			FETCH_POST,
			FETCH_POSTS,
			CREATE_POST,
			DELETE_POST,
			EDIT_POST,
			CREATE_COMMENT,
			DELETE_COMMENT,
			EDIT_COMMENT } from './types';

// List User
export const fetchUsers = () => async dispatch => {
	const response = await dataApi.get('/users');

	dispatch({ type: FETCH_USERS, payload: response.data });
};

// POST USER

export const fetchPosts = (id) => async dispatch => {
	const response = await dataApi.get(`/posts?userId=${id}`);

	dispatch({ type: FETCH_POSTS, payload: response.data });
};

export const fetchPost = (id) => async dispatch => {
	const response = await dataApi.get(`/posts/${id}`);

	dispatch({ type: FETCH_POST, payload: response.data });
};

export const createPost = (formValues, userId) => async (dispatch) => {
	const response = await dataApi.post('/posts', formValues );

	dispatch({ type: CREATE_POST, payload: response.data });
	history.push(`/postsList/${userId}`);
};

export const editPost = (id, formValues, userId) => async dispatch => {
	const response = await dataApi.patch(`/posts/${id}`, formValues);

	dispatch({ type: EDIT_POST, payload: response.data });
	history.push(`/postsList/${userId}`);
};

export const deletePost = (id, userId) => async dispatch => {
	await dataApi.delete(`/posts/${id}`);

	dispatch({ type: DELETE_POST, payload: id });
	history.push(`/postsList/${userId}`);
	// history.push('/');
};

// COMMENTS USER

export const fetchComments = (id) => async dispatch => {
	const response = await dataApi.get(`/comments?postId=${id}`);

	dispatch({ type: FETCH_COMMENTS, payload: response.data });
};

export const fetchComment = (id) => async dispatch => {
	const response = await dataApi.get(`/comments/${id}`);

	dispatch({ type: FETCH_COMMENT, payload: response.data });
};

export const createComment = (formValues, userId, postId) => async (dispatch) => {
	const response = await dataApi.post('/comments', formValues );

	dispatch({ type: CREATE_COMMENT, payload: response.data });
	history.push(`/commentsList/${userId}/${postId}`);
};

export const editComment = (id, formValues, userId, postId) => async dispatch => {
	const response = await dataApi.patch(`/comments/${id}`, formValues);

	dispatch({ type: EDIT_COMMENT, payload: response.data });
	history.push(`/commentsList/${userId}/${postId}`);
};

export const deleteComment = (id, userId, postId) => async dispatch => {
	await dataApi.delete(`/comments/${id}`);

	dispatch({ type: DELETE_COMMENT, payload: id });
	history.push(`/commentsList/${userId}/${postId}`);
};

// ALBUM

export const fetchAlbums = (id) => async dispatch => {
	const response = await dataApi.get(`/albums?userId=${id}`);

	dispatch({ type: FETCH_ALBUMS, payload: response.data });
};

// PHOTO

export const fetchPhotos = (id) => async dispatch => {
	const response = await dataApi.get(`/photos?albumId=${id}`);

	dispatch({ type: FETCH_PHOTOS, payload: response.data });
};

export const fetchPhoto = (id) => async dispatch => {
	const response = await dataApi.get(`/photos/${id}`);

	dispatch({ type: FETCH_PHOTO, payload: response.data });
};