import React from "react";
import { Routes, Route } from "react-router-dom";
import { DashboardRouter } from "./DashboardRouter";
import { PageRouter } from "./PageRouter";

export const AppRouter = () => {
	return (
		<Routes>
			<Route path='*' element={<PageRouter />} />

			<Route path='/dashboard/*' element={<DashboardRouter />} />
		</Routes>
	);
};
