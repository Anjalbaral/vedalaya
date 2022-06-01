import { pubRequest } from "./wrapper";

export const getProductCategories = (query, signal) => {
	try {
		return pubRequest(`/products/item_categories${query && query}`, "GET", null, signal);
	} catch (err) {
		// handle error
	}
};

export const getProductItems = (query, signal) => {
	try {
		return pubRequest(`/products/items${query && query}`, "GET", null, signal);
	} catch (err) {
		// handle error
	}
};

export const getProductColors = (query, signal) => {
	try {
		return pubRequest(`/products/colors${query && query}`, "GET", null, signal);
	} catch (err) {
		// handle error
	}
};

export const getProductSizes = (query, signal) => {
	try {
		return pubRequest(`/products/sizes${query && query}`, "GET", null, signal);
	} catch (err) {
		// handle error
	}
};

export const getProductMaterials = (query, signal) => {
	try {
		return pubRequest(`/products/materials${query && query}`, "GET", null, signal);
	} catch (err) {
		// handle error
	}
};
