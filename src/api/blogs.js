import { pubRequest } from "./wrapper";

export const getBlogsData = (query, signal) => {
	try {
		return pubRequest(`/content/blogs/${query && query}`, "GET", null, signal);
	} catch (err) {
		// error handling
	}
};
