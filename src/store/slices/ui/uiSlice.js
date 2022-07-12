import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
	name: "ui",
	initialState: {
		countries: [],
	},
	reducers: {
		setCountries: (state, action) => {
			state.countries = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setCountries } = uiSlice.actions;
