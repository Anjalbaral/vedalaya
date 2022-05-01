import * as Types from "../types";

const INITIAL_STATE = {
	activeTab: 0
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case Types.SET_ACTIVE_GALLERY_TAB:
			return { ...state, activeTab: action.payload };
		default:
			return { ...state };
	}
};
