import React from "react";
import { ToastContainer } from "react-toastify";
import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
import "moment/locale/es";

export const App = () => {
	moment.locale("es");

	return (
		<AppTheme>
			<ToastContainer theme='dark' />
			<AppRouter />
		</AppTheme>
	);
};
