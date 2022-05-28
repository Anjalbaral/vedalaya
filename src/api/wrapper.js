import CONSTANTS from "../globals/constant";
import { blobToBase64 } from "../helpers/blobToBase64";
import fireSpark from "../helpers/spark";
import { store } from "../redux/store";
import * as Types from "../redux/types";

const getResponse = async (response) => {
	const contentType = response.headers.get("content-type");

	// for json response
	if (contentType === "application/json") {
		const json = await response.json();
		return { response, json };
	}

	// for image response
	if (contentType === "image/jpeg") {
		response
			.blob()
			.then(blobToBase64)
			.then((base64image) => {
				return { response, base64image };
			});
	}
};

const pubRequest = async (url, method, body, signal) => {
	try {
		if (window.navigator.onLine) {
			const mainCall = async () => {
				return await fetch(`${CONSTANTS.SERVER_URL}${url}`, {
					method: method,
					credentials: "include",
					body: method !== "GET" ? JSON.stringify(body) : null,
					signal: signal,
					headers: {
						"Content-Type": "application/json"
					}
				});
			};

			var response = await getResponse(await mainCall());
			return response;
		} else {
			fireSpark("error", "you are offline!!");
		}
	} catch (err) {
		throw err;
	}
};

export { pubRequest };
