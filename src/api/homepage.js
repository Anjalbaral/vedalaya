import { pubRequest } from "./wrapper";

export const getHomePageData = (query, signal) => {
	try {
		return pubRequest(`/content/home${query && query}`, "GET", null, signal);
	} catch (err) {
		// error handling
	}
};
