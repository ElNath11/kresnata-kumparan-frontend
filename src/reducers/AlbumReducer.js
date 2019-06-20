import _ from 'lodash';
import { FETCH_ALBUMS } from '../actions/types';

export default (state = {}, action) => {
	switch (action.type){
		case FETCH_ALBUMS:
			return { ...state, ..._.mapKeys(action.payload, 'id') };
		default:
			return state;
	}
};