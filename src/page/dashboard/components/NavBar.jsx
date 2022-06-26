import { AppBar, IconButton, Toolbar, Grid, Typography } from "@mui/material";
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";

export const NavBar = ({ drawerWidth }) => {
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
				<IconButton
					color='inherit'
					edge='start'
					sx={{ nr: 2, display: { sm: "none" } }}
				>
					<MenuOutlined />
				</IconButton>
				<Grid
					container
					direction='row'
					justifyContent='space-between'
					alignItems={"center"}
				>
					<Typography variant='h6' componet='div'>
						Dashboard
					</Typography>
					<IconButton color='inherit'>
						<LogoutOutlined />
					</IconButton>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};
