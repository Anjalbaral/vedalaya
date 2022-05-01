import * as Types from "../types";

export const changeActiveNav = (activenav) => {
	return {
		type: Types.CHANGE_ACTIVE_NAV,
		payload: activenav
	};
};

export const changeActiveSlide = (activeslide) => {
	return {
		type: Types.CHANGE_ACTIVE_SLIDE,
		payload: activeslide
	};
};
