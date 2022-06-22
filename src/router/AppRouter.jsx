import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomeScreen } from "../page/home/HomeScreen";
import { JoinUsScreen } from "../page/Join/JoinUsScreen";
import { FreeScreen } from "../page/Join/plans/free/FreeScreen";
import { PremiunScreen } from "../page/Join/plans/premiun/PremiunScreen";
import { VipScreen } from "../page/Join/plans/vip/VipScreen";
import { RegisterScreen } from "../page/Join/RegisterScreen";
import { UserTypeScreen } from "../page/Join/UserTypeScreen";

export const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<HomeScreen />} />

			<Route path='/join-us' element={<JoinUsScreen />} />
			<Route
				path='/join-us/user-type/:plan'
				element={<UserTypeScreen />}
			/>

			<Route
				path='/join-us/user-type/free/:user'
				element={<FreeScreen />}
			/>

			<Route
				path='/join-us/user-type/premiun/:user'
				element={<PremiunScreen />}
			/>

			<Route
				path='/join-us/user-type/vip/:user'
				element={<VipScreen />}
			/>

			<Route path='/register/:user' element={<RegisterScreen />} />
			<Route path='/join-us/premiun' element={<JoinUsScreen />} />
			<Route path='/join-us/vip' element={<JoinUsScreen />} />
		</Routes>
	);
};
