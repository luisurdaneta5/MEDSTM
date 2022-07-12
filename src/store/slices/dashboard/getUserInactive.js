import { Api } from "../../../api";

export const getUserInactive = (data) => {
	return async () => {
		await Api.post("/user/request/inactive", data, {
			headers: { "Content-Type": "application/json" },
		})
			.then((response) => {
				return response.data;
			})
			.catch((error) => {
				return error;
			});
	};
};
