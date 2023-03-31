import { AppBar, IconButton, Toolbar, Grid, Typography } from "@mui/material";
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setLogout } from "../../../store/slices/auth";
import { useNavigate } from "react-router-dom";

export const NavBar = ({ drawerWidth }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogout = () => {
		dispatch(setLogout());
		localStorage.clear();
		navigate("/");
	};

	return (
		<AppBar
			position='fixed'
			sx={{
				width: {
					sm: `calc(100% - ${drawerWidth}px)`,
					ml: { sm: `${drawerWidth}px` },
				},
			}}
		>
			<Toolbar>
				<IconButton color='inherit' edge='start' sx={{ nr: 2, display: { sm: "none" } }}>
					<MenuOutlined />
				</IconButton>
				<Grid container direction='row' justifyContent='space-between' alignItems={"center"}>
					<Typography variant='h6' componet='div'></Typography>

					<IconButton color='inherit' onClick={handleLogout}>
						<LogoutOutlined />
					</IconButton>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};
