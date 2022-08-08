import { toast } from "react-toastify";
import { Api } from "../../../../api";
export const setNewSpeciality = (name, img) => {
	let formData = new FormData();

	formData.append("name", name);
	formData.append("img", img);

	return async () => {
		try {
			const res = await Api.post("/specialities/create", formData, {
				headers: { "Content-Type": "multipart/form-data" },
			});

			if (res.data.ok) {
				toast.success(res.data.message, {
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
			toast.error(error.message, {
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
	};
};
