import { Api } from "../../../api";

export const getPayments = async (setPayments) => {
	Api.get("/payments/get")
		.then((res) => {
			setPayments(res.data.payments);
		})
		.catch((err) => {
			console.log(err);
		});
};
