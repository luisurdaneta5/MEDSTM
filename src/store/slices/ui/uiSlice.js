import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
	name: "ui",
	initialState: {
		page: 0,
		totalpages: 0,
		countries: [],
		notices: [],
		isLoading: false,
	},
	reducers: {
		startLoading: (state) => {
			state.isLoading = true;
		},

		setCountries: (state, action) => {
			state.countries = action.payload;
		},

		setNotices: (state, action) => {
			state.isLoading = false;
			state.notices = action.payload.notices;
			state.page = action.payload.page;
			state.totalpages = action.payload.totalpages;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setCountries, setNotices, startLoading } = uiSlice.actions;
