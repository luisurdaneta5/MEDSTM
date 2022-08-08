import { Route, Routes } from "react-router-dom";
import { BlogCreateScreen } from "../page/dashboard/blog/BlogCreateScreen";
import { BlogEditScreen } from "../page/dashboard/blog/BlogEditScreen";
import { BlogScreen } from "../page/dashboard/blog/BlogScreen";
import { IndexScreen } from "../page/dashboard/index/IndexScreen";
import { MedsScreen } from "../page/dashboard/meds/MedsScreen";
import { ProfileScreen } from "../page/dashboard/profile/ProfileScreen";
import { PromoterScreen } from "../page/dashboard/promoters/PromoterScreen";
import { RequestScreen } from "../page/dashboard/request/RequestScreen";
import { SpecialityCreateScreen } from "../page/dashboard/speciality/SpecialityCreateScreen";
import { SpecialityEditScreen } from "../page/dashboard/speciality/SpecialityEditScreen";
import { SpecialityScreen } from "../page/dashboard/speciality/SpecialityScreen";
import { WithdraScreen } from "../page/dashboard/withdrawals/WithdraScreen";

export const DashboardRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<IndexScreen />} />
			<Route path='/meds' element={<MedsScreen />} />
			<Route path='/promoters' element={<PromoterScreen />} />
			<Route path='/requests' element={<RequestScreen />} />

			<Route path='/blogs' element={<BlogScreen />} />
			<Route path='/blog/create' element={<BlogCreateScreen />} />
			<Route path='/blog/edit/:id' element={<BlogEditScreen />} />

			<Route path='/speciality' element={<SpecialityScreen />} />
			<Route
				path='/speciality/create'
				element={<SpecialityCreateScreen />}
			/>
			<Route
				path='/speciality/edit/:id'
				element={<SpecialityEditScreen />}
			/>

			<Route path='/withdrawals' element={<WithdraScreen />} />
			<Route path='/user/profile/:id' element={<ProfileScreen />} />
		</Routes>
	);
};
