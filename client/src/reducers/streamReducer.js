import _ from "lodash";

import {
	FETCH_STREAMS,
	FETCH_STREAM,
	CREATE_STREAM,
	EDIT_STREAM,
	DELETE_STREAM
} from "../actions/types";

export default (state = {}, action) => {
	switch (action.type) {
		case FETCH_STREAMS:
			return { ...state, ..._.mapKeys(action.payload, "id") };
		case FETCH_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case CREATE_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case EDIT_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case DELETE_STREAM:
			// in this case, the payload is the id itself so don't need to access .id propert from the payload
			return _.omit(state, action.payload);
		default:
			return state;
	}
};
