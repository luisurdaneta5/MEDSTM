import { toast } from "react-toastify";
import { Api } from "../../../../api";

export const setDeleteSpeciality = (id) => {
	return async () => {
		try {
			const res = await Api.delete(`/specialities/delete/`, {
				params: {
					id,
				},
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
			toast.error(error.response.message, {
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
