import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
	name: "auth",
	initialState: {
		name: "Luis Urdaneta",
	},
	reducers: {
		//Esto ahora sera mis acciones
	},
});

// Action creators are generated for each case reducer function
export const { auth } = authSlice.actions;
