import { pubRequest } from "./wrapper";

export const getContactDetails = (query, signal) => {
	try {
		return pubRequest(`/app/settings${query && query}`, "GET", null, signal);
	} catch (err) {
		// error handling
	}
};
