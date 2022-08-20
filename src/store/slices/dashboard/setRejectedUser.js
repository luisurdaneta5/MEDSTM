import { Api } from "../../../api";
import Swal from "sweetalert2";

export const setRejectedUser = (id) => {
	return async () => {
		try {
			const res = await Api.delete(`/user/rejected/${id}`);

			if (res.data.ok) {
				Swal.fire({
					title: "Proceso exitoso",
					text: res.data.message,
					icon: "success",
					confirmButtonColor: "#018f98",
				});
			} else {
				Swal.fire({
					title: "error",
					text: res.data.message,
					icon: "error",
					confirmButtonColor: "#018f98",
				});
			}
		} catch (error) {
			console.log(error);
		}
	};
};
