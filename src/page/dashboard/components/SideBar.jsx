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
	Avatar,
} from "@mui/material";
import logo from "../../../assets/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import "./styles.css";

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
					<Link to='/'>
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
					</Link>
				</Toolbar>

				<List sx={{ mt: 5, color: "white" }}>
					{/* <Box
						sx={{
							display: "flex",
							justifyContent: "center",
							mb: 8,
						}}
					>
						<Avatar
							alt={"Luis"}
							src='/static/images/avatar/1.jpg'
							sx={{ width: 80, height: 80 }}
						/>
					</Box> */}

					<Link to={"/dashboard"}>
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
					</Link>

					<Link to='/dashboard/meds'>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<i
										className='fa-solid fa-user-doctor'
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
					</Link>

					<Link to='/dashboard/promoters'>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<i
										className='fa-solid fa-user-tie'
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
					</Link>

					<Link to='/dashboard/blogs'>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<i
										className='fa-solid fa-square-rss'
										style={{
											color: "white",
											fontSize: 18,
											marginLeft: 5,
										}}
									></i>
								</ListItemIcon>
								<Grid container>
									<ListItemText>Blog</ListItemText>
								</Grid>
							</ListItemButton>
						</ListItem>
					</Link>

					<Link to='/dashboard/withdrawals'>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<i
										className='fa-solid fa-money-bill-transfer'
										style={{
											color: "white",
											fontSize: 18,
											marginLeft: 5,
										}}
									></i>
								</ListItemIcon>
								<Grid container>
									<ListItemText>Retiros</ListItemText>
								</Grid>
							</ListItemButton>
						</ListItem>
					</Link>
					<Link to='/dashboard/speciality'>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<i
										className='fa-solid fa-list'
										style={{
											color: "white",
											fontSize: 18,
											marginLeft: 5,
										}}
									></i>
								</ListItemIcon>
								<Grid container>
									<ListItemText>Especialidades</ListItemText>
								</Grid>
							</ListItemButton>
						</ListItem>
					</Link>

					<Link to='/dashboard/requests'>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<i
										className='fa-solid fa-clock'
										style={{
											color: "white",
											fontSize: 18,
											marginLeft: 5,
										}}
									></i>
								</ListItemIcon>
								<Grid container>
									<ListItemText>Solicitudes</ListItemText>
								</Grid>
							</ListItemButton>
						</ListItem>
					</Link>
				</List>
			</Drawer>
		</Box>
	);
};
