import { pubRequest } from "./wrapper";

export const submitContactData = (data, query, signal) => {
	try {
		return pubRequest(`/content/forms/${query && query}`, "POST", data, signal);
	} catch (err) {
		// error handling
	}
};
