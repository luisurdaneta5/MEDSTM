import React from "react";
import { ToastContainer } from "react-toastify";
import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
	return (
		<AppTheme>
			<ToastContainer theme='dark' />
			<AppRouter />
		</AppTheme>
	);
};
