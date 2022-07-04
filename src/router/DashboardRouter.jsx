import { Route, Routes } from "react-router-dom";
import { IndexScreen } from "../page/dashboard/index/IndexScreen";

export const DashboardRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<IndexScreen />} />
		</Routes>
	);
};
