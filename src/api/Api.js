import axios from "axios";
import { getEnvVariables } from "../helpers";

const { VITE_API_URL } = getEnvVariables();

const Api = axios.create({
	baseURL: VITE_API_URL,
});

//intersector for axios requests
Api.interceptors.request.use((config) => {
	config.headers = {
		...config.headers,
		"x-token": localStorage.getItem("token"),
	};
	return config;
});

export default Api;
