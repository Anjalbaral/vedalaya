import * as Types from "../types";

const INITIAL_STATE = {
	isAuthenticated: false,
	user: {}
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case Types.SET_USER:
			return { ...state, isAuthenticated: action.payload.isAuthenticated, user: action.payload.user };
		default:
			return { ...state };
	}
};
