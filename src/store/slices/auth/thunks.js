import { toast } from "react-toastify";
import { authApi } from "../../../api";

export const setRegister = (
	firstName,
	lastName,
	email,
	country,
	city,
	province,
	country_code,
	phone
) => {
	const data = {
		name: firstName,
		lastname: lastName,
		email: email,
		country: country,
		city: city,
		province: province,
		country_code: country_code,
		phone: phone,
	};

	return async () => {
		try {
			const resp = await authApi.post("/user/meds/create", data);

			if (resp.data.ok) {
				toast.success("Solicitud Enviada Correctamente", {
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			}
		} catch (error) {
			toast("hola", {
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			console.log(error);
		}
	};
};
