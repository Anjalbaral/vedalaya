import * as Types from "../types";

export const setHomeData = (data) => {
	return (dispatch) => {
		dispatch({ type: Types.SET_HOME_DATA, payload: data });
	};
};

export const setMenuData = (data) => {
	return (dispatch) => {
		dispatch({ type: Types.SET_MENU_DATA, payload: data });
	};
};
