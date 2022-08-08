import { toast } from "react-toastify";
import { Api } from "../../../api";

export const setRegister = (
	user,
	firstName,
	lastName,
	email,
	country,
	city,
	province,
	country_code,
	phone,
	file1,
	file2
) => {
	let formData = new FormData();

	if (user === "sales-promoter") {
		formData.append("type", 4);
	}

	if (user === "professional-healthcare") {
		formData.append("type", 3);
		formData.append("file1", file1);
		formData.append("file2", file2);
	}

	formData.append("name", firstName);
	formData.append("lastname", lastName);
	formData.append("email", email);
	formData.append("country", country);
	formData.append("city", city);
	formData.append("province", province);
	formData.append("country_code", country_code);
	formData.append("phone", phone);

	return async () => {
		try {
			const resp = await Api.post("/user/create", formData, {
				headers: { "Content-Type": "multipart/form-data" },
			});

			if (resp.data.ok) {
				toast.success(resp.data.message, {
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			}
		} catch (error) {
			console.log(error);
			toast.error(error.response.data.message, {
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});

			if (!firstName) {
				const msg = error.response.data.errors.name.msg;
				toast.error(msg, {
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			}

			if (!lastName) {
				const msg = error.response.data.errors.lastname.msg;
				toast.error(msg, {
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			}

			if (!email) {
				const msg = error.response.data.errors.email.msg;
				toast.error(msg, {
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			}

			if (!country) {
				const msg = error.response.data.errors.country.msg;
				toast.error(msg, {
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			}

			if (!city) {
				const msg = error.response.data.errors.city.msg;
				toast.error(msg, {
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			}

			if (!province) {
				const msg = error.response.data.errors.province.msg;
				toast.error(msg, {
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			}

			if (!phone) {
				const msg = error.response.data.errors.phone.msg;
				toast.error(msg, {
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			}

			if (!file1) {
				const msg = error.response.data.errors.file1.msg;
				toast.error(msg, {
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			}

			if (!file2) {
				const msg = error.response.data.errors.file2.msg;
				toast.error(msg, {
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			}

			// console.log(error);
		}
	};
};
