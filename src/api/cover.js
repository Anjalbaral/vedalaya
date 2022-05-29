import { pubRequest } from "./wrapper";

export const getCoverData = (query, signal) => {
	try {
		return pubRequest(`/content/cover/${query && query}`, "GET", null, signal);
	} catch (err) {
		// error handling
	}
};
