import { toast } from "react-toastify";
import { Api } from "../../../../api";

export const setDeleteBlog = (id) => {
	return async () => {
		try {
			const res = await Api.delete("/blog/delete/", {
				params: { id },
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
				return res.data.ok;
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
		}
	};
};
