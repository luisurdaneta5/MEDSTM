import {
	Box,
	Divider,
	Drawer,
	Toolbar,
	Typography,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	ListItemIcon,
	Grid,
} from "@mui/material";
import logo from "../../../assets/logo.png";
import HomeIcon from "@mui/icons-material/Home";

export const SideBar = ({ drawerWidth = 240 }) => {
	return (
		<Box
			component='nav'
			sx={{
				width: {
					sm: drawerWidth,
				},
				flexShrink: {
					sm: 0,
				},
			}}
		>
			<Drawer
				variant='permanent'
				open
				sx={{
					display: { xs: "block" },
					"& .MuiDrawer-paper": {
						backgroundColor: "#181818",
						boxSizing: "border-box",
						width: drawerWidth,
					},
				}}
			>
				<Toolbar>
					<Typography variant='h6' component='div'>
						<img
							src={logo}
							alt='medstm'
							width={"90%"}
							style={{
								paddingTop: 10,
								paddingLeft: 10,
								paddingRight: 10,
							}}
						/>
					</Typography>
				</Toolbar>

				<List sx={{ mt: 5, color: "white" }}>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<HomeIcon sx={{ color: "white" }} />
							</ListItemIcon>
							<Grid container>
								<ListItemText>Inicio</ListItemText>
							</Grid>
						</ListItemButton>
					</ListItem>

					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<i
									class='fa-solid fa-user-doctor'
									style={{
										color: "white",
										fontSize: 18,
										marginLeft: 5,
									}}
								></i>
							</ListItemIcon>
							<Grid container>
								<ListItemText>Medicos</ListItemText>
							</Grid>
						</ListItemButton>
					</ListItem>

					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<i
									class='fa-solid fa-user-tie'
									style={{
										color: "white",
										fontSize: 18,
										marginLeft: 5,
									}}
								></i>
							</ListItemIcon>
							<Grid container>
								<ListItemText>Promotores</ListItemText>
							</Grid>
						</ListItemButton>
					</ListItem>
				</List>
			</Drawer>
		</Box>
	);
};
