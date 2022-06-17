import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomeScreen } from "../page/home/HomeScreen";
import { JoinUsScreem } from "../page/Join/JoinUsScreem";

export const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<HomeScreen />} />
			<Route path='/join-us' element={<JoinUsScreem />} />
		</Routes>
	);
};
