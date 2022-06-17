import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomeScreen } from "../page/home/HomeScreen";

export const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<HomeScreen />} />
		</Routes>
	);
};
