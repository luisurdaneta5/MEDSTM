import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import { DashboardRouter } from "./DashboardRouter";
import { PageRouter } from "./PageRouter";
import { ProfileRouter } from "./ProfileRouter";
import { useDispatch } from "react-redux";
import { CheckToken } from "../store/slices/auth";
import { PrivateRoute } from "./PrivateRoute";
import { DashboardRouter } from "./DashboardRouter";
import { PrivateRouteDashboard } from "./PrivateRouteDashboard";
import { LoginScreen } from "../page/auth/LoginScreen";
// import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(CheckToken());
	}, [dispatch]);

	return (
		<Routes>
			<Route path='/*' element={<PageRouter />} />

			<Route
				path='/profile/*'
				element={
					<PrivateRoute>
						<ProfileRouter />
					</PrivateRoute>
				}
			/>

			<Route
				path='/dashboard/*'
				element={
					<PrivateRouteDashboard>
						<DashboardRouter />
					</PrivateRouteDashboard>
				}
			/>
		</Routes>
	);
};
