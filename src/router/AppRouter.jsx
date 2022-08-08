import React from "react";
import { Routes, Route } from "react-router-dom";
import { DashboardRouter } from "./DashboardRouter";
import { PageRouter } from "./PageRouter";
import { PrivateRoute } from "./PrivateRoute";
import { ProfileRouter } from "./ProfileRouter";

export const AppRouter = () => {
	return (
		<Routes>
			<Route path='*' element={<PageRouter />} />

			<Route
				path='/dashboard/*'
				element={
					<PrivateRoute>
						<DashboardRouter />
					</PrivateRoute>
				}
			/>

			<Route
				path='/dashboard/profile/*'
				element={
					<PrivateRoute>
						<ProfileRouter />
					</PrivateRoute>
				}
			/>
		</Routes>
	);
};
