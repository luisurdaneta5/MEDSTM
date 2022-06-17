import React from "react";
import {
	Container,
	AppBar,
	Box,
	Toolbar,
	Typography,
	IconButton,
	Button,
	Divider,
	Grid,
} from "@mui/material";

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

import logo from "../assets/logo.png";

export const GeneralLayout = ({ children }) => {
	const pages = ["INICIO", "UNETE", "CONTACTANOS"];

	return (
		<>
			<Box
				sx={{
					backgroundColor: "primary.main",
				}}
			>
				<Container maxWidth='lg'>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							padding: "5px",
						}}
					>
						<Box>
							<Typography variant='' color='white'>
								FAQ'
							</Typography>
						</Box>
						<Box
							sx={{
								display: "flex",
							}}
						>
							{/* <Typography variant='' color='white'>
								Siguenos
							</Typography> */}
							<Typography
								component='a'
								href='http://instagram.com'
								sx={{ color: "white" }}
							>
								<InstagramIcon />
							</Typography>
							<Typography
								component='a'
								href='http://instagram.com'
								sx={{ color: "white" }}
							>
								<FacebookOutlinedIcon />
							</Typography>
							<Typography
								component='a'
								href='http://instagram.com'
								sx={{ color: "white" }}
							>
								<LinkedInIcon />
							</Typography>
							<Typography
								component='a'
								href='http://instagram.com'
								sx={{ color: "white" }}
							>
								<TwitterIcon />
							</Typography>
						</Box>
					</Box>
				</Container>
			</Box>
			<AppBar position='static' sx={{ backgroundColor: "white" }}>
				<Container maxWidth='lg'>
					<Toolbar disableGutters>
						<Box sx={{ display: "flex", alignItems: "center" }}>
							<img src={logo} alt='medstm' width='100' />
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
								}}
							>
								<Typography
									noWrap
									component='a'
									href='/'
									sx={{
										fontSize: "15px",
										fontFamily: "Montserrat, sans-serif",
										fontWeight: 800,

										color: "black",
										textDecoration: "none",
									}}
								>
									MEDS TM
								</Typography>
								<Typography sx={{ color: "black" }}>
									Directorio Sanitario Internacional
								</Typography>
							</Box>
						</Box>

						<Box
							sx={{
								flexGrow: 1,
								display: { xs: "flex", md: "none" },
							}}
						>
							<IconButton
								size='large'
								aria-label='account of current user'
								aria-controls='menu-appbar'
								aria-haspopup='true'
								// onClick={handleOpenNavMenu}
								color='inherit'
							></IconButton>
						</Box>

						<Typography
							variant='h5'
							noWrap
							component='a'
							href=''
							sx={{
								mr: 2,
								display: { xs: "flex", md: "none" },
								flexGrow: 1,
								fontFamily: "monospace",
								fontWeight: 700,
								letterSpacing: ".3rem",
								color: "inherit",
								textDecoration: "none",
							}}
						>
							LOGO
						</Typography>
						<Box
							sx={{
								flexGrow: 1,
								display: { xs: "none", md: "flex" },
								color: "black",
								justifyContent: "flex-end",
							}}
						>
							<Button
								// onClick={handleCloseNavMenu}
								sx={{
									my: 2,
									color: "black",
									display: "block",
								}}
							>
								Inicio
							</Button>
							<Button
								// onClick={handleCloseNavMenu}
								sx={{
									my: 2,
									color: "black",
									display: "block",
								}}
							>
								UNETE
							</Button>
							<Button
								// onClick={handleCloseNavMenu}
								sx={{
									my: 2,
									color: "black",
									display: "block",
								}}
							>
								noticias
							</Button>
							<Button
								// onClick={handleCloseNavMenu}
								sx={{
									my: 2,
									color: "black",
									display: "block",
								}}
							>
								Contactanos
							</Button>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>

			{children}

			<footer>
				<Container maxWidth='lg' sx={{ mt: 3 }}>
					<Divider
						sx={{
							"&.MuiDivider-root": {
								borderColor: "primary.main",
								borderWidth: "1px",
							},
						}}
					/>
					<Grid container spacing={3} sx={{ padding: "20px" }}>
						<Grid item xs={12} sm={4}>
							<Box sx={{ display: "flex", alignItems: "center" }}>
								<img src={logo} alt='' />

								<Typography
									noWrap
									component='a'
									href='/'
									sx={{
										fontSize: "15px",
										fontFamily: "Montserrat, sans-serif",
										fontWeight: 800,

										color: "black",
										textDecoration: "none",
									}}
								>
									MEDS TM
								</Typography>
							</Box>
						</Grid>
						<Grid item xs={12} sm={4}>
							<Typography
								color='initial'
								sx={{
									fontSize: "25px",
									fontWeight: 700,
									ml: 1,
								}}
							>
								SIGUENOS!
							</Typography>
							<Box sx={{ display: "flex", mt: 2 }}>
								<IconButton>
									<InstagramIcon />
								</IconButton>
								<IconButton>
									<FacebookOutlinedIcon />
								</IconButton>
								<IconButton>
									<LinkedInIcon />
								</IconButton>
								<IconButton>
									<TwitterIcon />
								</IconButton>
							</Box>
						</Grid>
						<Grid item xs={12} sm={4}>
							<Typography
								color='initial'
								sx={{
									fontSize: "25px",
									fontWeight: 700,
								}}
							>
								CONTACTANOS!
							</Typography>
							<Typography sx={{ mt: 2 }}>
								123-A, Lorem ipsum consectetur adipiscing elit{" "}
								<br />
								Phone: +91-xxx xxx xxxx
								<br />
								Email:info@medicaltourism.india
								<br />
							</Typography>
						</Grid>
					</Grid>

					<Divider
						sx={{
							"&.MuiDivider-root": {
								borderColor: "primary.main",
								borderWidth: "1px",
								mt: 2,
							},
						}}
					/>
					<Typography sx={{ padding: "10px" }}>
						Copyright © 2022 MEDS TM | Powered by MEDS TM
					</Typography>
				</Container>
			</footer>
		</>
	);
};
