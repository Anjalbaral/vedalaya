import { pubRequest } from "./wrapper";

export const getContactDetails = (query, signal) => {
	try {
		return pubRequest(`/app/settings${query && query}`, "GET", null, signal);
	} catch (err) {
		// error handling
	}
};

export const getPageImages = (query, signal) => {
	try {
		return pubRequest(`/content/page_images/${query && query}`, "GET", null, signal);
	} catch (err) {
		//    error handling
	}
};

export const getCareers = (query, signal) => {
	try {
		return pubRequest(`/content/career/${query && query}`, "GET", null, signal);
	} catch (err) {
		//    error handling
	}
};
