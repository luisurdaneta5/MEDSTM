import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
	const token = localStorage.getItem("token");
	const type = localStorage.getItem("type");
	if (!token) {
		return <Navigate to='/' />;
	} else if (type === "4" || type === "3") {
		return children;
	} else if (type === "5") {
		return children;
	}
};
