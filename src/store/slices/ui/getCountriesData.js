import { Api } from "../../../api";
import { setCountries } from "./uiSlice";

export const getCountriesData = () => {
	return async (dispatch) => {
		const { data } = await Api.get("/countries_available");

		dispatch(setCountries(data.countries));
	};
};
