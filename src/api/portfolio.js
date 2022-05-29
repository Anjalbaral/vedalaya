import { pubRequest } from "./wrapper";

export const getPortfoliosData = (query, signal) => {
	try {
		return pubRequest(`/content/portfolios/${query && query}`, "GET", null, signal);
	} catch (err) {
		// error handling
	}
};
