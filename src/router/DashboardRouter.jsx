import { Route, Routes } from "react-router-dom";
import { BlogCreateScreen } from "../page/dashboard/blog/BlogCreateScreen";
import { BlogEditScreen } from "../page/dashboard/blog/BlogEditScreen";
import { BlogScreen } from "../page/dashboard/blog/BlogScreen";
import { IndexScreen } from "../page/dashboard/index/IndexScreen";
import { MedsCreateScreen } from "../page/dashboard/meds/MedsCreateScreen";
import { MedsEditScreen } from "../page/dashboard/meds/MedsEditScreen";
import { MedsScreen } from "../page/dashboard/meds/MedsScreen";
import { PaymentDetailScreen } from "../page/dashboard/payments/PaymentDetailScreen";
import { PaymentScreen } from "../page/dashboard/payments/PaymentScreen";
import { ProfileScreen } from "../page/dashboard/profile/ProfileScreen";
import { PromoterCreateScreen } from "../page/dashboard/promoters/PromoterCreateScreen";
import { PromoterEditScreen } from "../page/dashboard/promoters/PromoterEditScreen";
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
			<Route path='/meds/create' element={<MedsCreateScreen />} />
			<Route path='/meds/edit/:id' element={<MedsEditScreen />} />
			<Route path='/promoters' element={<PromoterScreen />} />
			<Route path='/promoters/create' element={<PromoterCreateScreen />} />
			<Route path='/promoters/edit/:id' element={<PromoterEditScreen />} />
			<Route path='/requests' element={<RequestScreen />} />
			<Route path='/blogs' element={<BlogScreen />} />
			<Route path='/blog/create' element={<BlogCreateScreen />} />
			<Route path='/blog/edit/:id' element={<BlogEditScreen />} />
			<Route path='/speciality' element={<SpecialityScreen />} />
			<Route path='/speciality/create' element={<SpecialityCreateScreen />} />
			<Route path='/speciality/edit/:id' element={<SpecialityEditScreen />} />
			<Route path='/withdrawals' element={<WithdraScreen />} />
			<Route path='/user/profile/:id' element={<ProfileScreen />} />
			<Route path='/payments' element={<PaymentScreen />} />
			<Route path='/payments/details/:paymentId' element={<PaymentDetailScreen />} />
		</Routes>
	);
};
