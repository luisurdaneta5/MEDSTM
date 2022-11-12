import { useNavigate } from "react-router-dom";
import { Api } from "../../../api";
import { setLoginSuccess, setLogout } from "./authSlice";

export const CheckToken = () => {
	return async (dispatch) => {
		const token = localStorage.getItem("token");

		if (!token) {
			return dispatch(setLogout());
		}

		try {
			const { data } = await Api.get("/auth/renew");

			localStorage.setItem("token", data.token);
			localStorage.setItem("token-init-date", new Date().getTime());
			dispatch(
				setLoginSuccess({
					id: data.uid,
					name: data.name,
					type: data.type,
				})
			);
		} catch (error) {
			localStorage.clear();
			dispatch(setLogout());
		}
	};
};
