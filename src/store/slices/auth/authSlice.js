import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
	name: "auth",
	initialState: {
		user: {},
		isAuthenticated: false,
		isLoading: false,
	},
	reducers: {
		startLogin: (state) => {
			state.isLoading = true;
		},
		setLoginSuccess: (state, action) => {
			state.user.uid = action.payload.id;
			state.user.type = action.payload.type;
			state.user.name = action.payload.name;
			state.isAuthenticated = true;
			state.isLoading = false;
		},
		setLogout: (state) => {
			state.isAuthenticated = false;
			state.isLoading = false;
		},
	},
});

// Action creators are generated for each case reducer function
export const { auth, startLogin, setLoginSuccess, setLogout } =
	authSlice.actions;
