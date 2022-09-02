import { Route, Routes } from "react-router-dom";
import { ProfileEditScreen } from "../page/profile/ProfileEditScreen";
import { ProfileScreen } from "../page/profile/ProfileScreen";
import { ChangeEmailScreen } from "../page/profile/sections_edit/ChangeEmailScreen";
import { ChangeNameScreen } from "../page/profile/sections_edit/ChangeNameScreen";
import { ChangePasswordScreen } from "../page/profile/sections_edit/ChangePasswordScreen";
import { ChangePhoneScreen } from "../page/profile/sections_edit/ChangePhoneScreen";
import { SocialNetworkScreen } from "../page/profile/sections_edit/SocialNetworkScreen";

export const ProfileRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<ProfileScreen />} />
			<Route path='/edit' element={<ProfileEditScreen />} />
			<Route
				path='/edit/change_name/:name/:lastname/:id'
				element={<ChangeNameScreen />}
			/>
			<Route
				path='/edit/change_phone/:phone/:id'
				element={<ChangePhoneScreen />}
			/>
			<Route
				path='/edit/change_email/:email/:id'
				element={<ChangeEmailScreen />}
			/>

			<Route
				path='/edit/change_password/:id'
				element={<ChangePasswordScreen />}
			/>

			<Route
				path='/edit/social_networks/:id'
				element={<SocialNetworkScreen />}
			/>
		</Routes>
	);
};
