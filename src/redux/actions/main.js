import * as Types from "../types";

export const changeActiveNav = (activenav) => {
	return {
		type: Types.CHANGE_ACTIVE_NAV,
		payload: activenav
	};
};

export const changeMenuStatus = (status) => {
	return {
		type: Types.CHANGE_MENU_STATUS,
		payload: status
	};
};

export const changeActiveSlide = (activeslide) => {
	return {
		type: Types.CHANGE_ACTIVE_SLIDE,
		payload: activeslide
	};
};

export const changeActiveHover = (active) => {
	return {
		type: Types.CHANGE_ACTIVE_HOVER,
		payload: active
	};
};

export const setNavItems = (data) => {
	return {
		type: Types.SET_NAV_ITEMS,
		payload: data
	};
};
