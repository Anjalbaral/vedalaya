import { pubRequest } from "./wrapper";

export const getGalleryPageData = (query, signal) => {
	try {
		return pubRequest(`/content/gallery/images${query && query}`, "GET", null, signal);
	} catch (err) {
		// error handling
	}
};
