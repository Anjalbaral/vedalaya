import { pubRequest } from "./wrapper";

export const getGalleryCategoryData = (query, signal) => {
	try {
		return pubRequest(`/content/gallery/categories${query && query}`, "GET", null, signal);
	} catch (err) {
		// error handling
	}
};

export const getGalleryPageData = (query, signal) => {
	try {
		return pubRequest(`/content/gallery/images${query && query}`, "GET", null, signal);
	} catch (err) {
		// error handling
	}
};
