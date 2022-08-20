import { Navigate } from "react-router-dom";

export const PrivateRouteDashboard = ({ children }) => {
	const token = localStorage.getItem("token");
	const type = localStorage.getItem("type");
	if (!token) {
		return <Navigate to='/' />;
	} else if (type !== "5") {
		return <Navigate to='/' />;
	} else {
		return children;
	}
};
