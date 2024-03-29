import { getEnvVariables } from "./getEnvVariables";

const { VITE_API_URL } = getEnvVariables();

const baseUrl = VITE_API_URL;

export const fetchSinToken = (endpoint, data, method = "GET") => {
	const url = `${baseUrl}/${endpoint}`;

	if (method === "GET") {
		return fetch(url);
	} else {
		return fetch(url, {
			method,
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(data),
		});
	}
};
