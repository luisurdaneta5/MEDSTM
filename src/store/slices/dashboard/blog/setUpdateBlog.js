import { toast } from "react-toastify";
import { Api } from "../../../../api";

export const setUpdateBlog = (id, title, content, editor, image) => {
	let formData = new FormData();
	formData.append("id", id);
	formData.append("title", title);
	formData.append("content", content);
	formData.append("editor", editor);
	formData.append("image", image);
	return async () => {
		try {
			const res = await Api.put("/blog/update", formData, {
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
