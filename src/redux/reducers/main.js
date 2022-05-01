import * as Types from "../types";

const INITIAL_STATE = {
	menuOn: false,
	navItems: [
		{
			key: 1,
			path: "/",
			name: "Home"
		},
		{
			key: 2,
			path: "/products",
			name: "Products"
		},
		{
			key: 3,
			path: "/gallery",
			name: "Gallery"
		},
		{
			key: 4,
			path: "/contact",
			name: "Contact"
		},
		{
			key: 5,
			path: "/aboutus",
			name: "About Us"
		}
	],
	activeNav: "/",
	activeSlide: 2
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case Types.CHANGE_ACTIVE_SLIDE:
			return { ...state, activeSlide: action.payload };
		case Types.CHANGE_MENU_STATUS:
			return { ...state, menuOn: action.payload };
		case Types.CHANGE_ACTIVE_NAV:
			return { ...state, activeNav: action.payload };
		default:
			return { ...state };
	}
};
