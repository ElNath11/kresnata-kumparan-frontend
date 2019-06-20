import _ from 'lodash';
import { FETCH_PHOTO, FETCH_PHOTOS } from '../actions/types';

export default (state = {}, action) => {
	switch (action.type){
		case FETCH_PHOTOS:
			return { ...state, ..._.mapKeys(action.payload, 'id') };
		case FETCH_PHOTO:
			return { ...state, [action.payload.id]: action.payload };
		default:
			return state;
	}
};