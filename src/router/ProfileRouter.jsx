import { Route, Routes } from "react-router-dom";
import { ProfileEditScreen } from "../page/profile/ProfileEditScreen";
import { ProfileScreen } from "../page/profile/ProfileScreen";

export const ProfileRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<ProfileScreen />} />
			<Route path='/edit' element={<ProfileEditScreen />} />
		</Routes>
	);
};
