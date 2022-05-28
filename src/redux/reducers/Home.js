import * as Types from "../types";

const INITIAL_STATE = {
	HomeData: {
		slider_content: [],
		product_category: [],
		faqs: [],
		testimonials: []
	},
	MenuData: []
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case Types.SET_HOME_DATA:
			return { ...state, HomeData: action.payload };
		case Types.SET_MENU_DATA:
			return { ...state, MenuData: action.payload };
		default:
			return { ...state };
	}
};
