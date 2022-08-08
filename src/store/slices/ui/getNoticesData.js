import { Api } from "../../../api";
import { setNotices, startLoading } from "./uiSlice";

export const getNoticesData = (page = 0) => {
	return async (dispatch) => {
		dispatch(startLoading());

		const pageAsNumber = parseInt(page);

		const { data } = await Api.get("/notices", {
			params: {
				page: pageAsNumber,
				size: 5,
			},
		});

		dispatch(
			setNotices({
				notices: data.notices.rows,
				page: pageAsNumber + 1,
				totalpages: Math.ceil(data.notices.count / 5),
			})
		);
	};
};
