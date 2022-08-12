import { toast } from "react-toastify";
import { Api } from "../../../api";
import { setLoginSuccess, startLogin, setLogout } from "./authSlice";

export const setLogin = (email, password, eventSuccessLogin = () => {}) => {
	return async (dispatch) => {
		dispatch(startLogin());

		try {
			const res = await Api.post("/auth/login", { email, password });

			localStorage.setItem("token", res.data.token);
			localStorage.setItem("type", res.data.type);
			localStorage.setItem("token-init-date", new Date().getTime());

			dispatch(
				setLoginSuccess({
					id: res.data.id,
					type: res.data.type,
					name: res.data.name + " " + res.data.lastname,
				})
			);

			if (res.data.token) {
				eventSuccessLogin(res.data.type);
			}
		} catch (error) {
			dispatch(setLogout());

			toast.error(error.response.data.message, {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});

			toast.error(error.response.data.errors.email.msg, {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
		// dispatch(setLoginSuccess(email, password));
	};
};
