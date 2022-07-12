import { Route, Routes } from "react-router-dom";
import { IndexScreen } from "../page/dashboard/index/IndexScreen";
import { MedsScreen } from "../page/dashboard/meds/MedsScreen";
import { ProfileScreen } from "../page/dashboard/profile/ProfileScreen";
import { PromoterScreen } from "../page/dashboard/promoters/PromoterScreen";
import { RequestScreen } from "../page/dashboard/request/RequestScreen";

export const DashboardRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<IndexScreen />} />
			<Route path='/meds' element={<MedsScreen />} />
			<Route path='/promoters' element={<PromoterScreen />} />
			<Route path='/requests' element={<RequestScreen />} />
			<Route path='/user/profile/:id' element={<ProfileScreen />} />
		</Routes>
	);
};
