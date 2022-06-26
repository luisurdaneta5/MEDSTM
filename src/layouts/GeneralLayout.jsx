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

import { Link } from "react-router-dom";

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

import logo_letra from "../assets/logo_simple.png";
import logo from "../assets/logo.png";

import letras from "../assets/letras.png";

export const GeneralLayout = ({ children }) => {
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
							<Link to='/login'>
								<Typography sx={{ mr: 2, color: "white" }}>
									Iniciar Sesion
								</Typography>
							</Link>

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
						</Box>
					</Box>
				</Container>
			</Box>
			<AppBar
				position='sticky'
				sx={{ backgroundColor: "white" }}
				className='animate__animated animate__fadeIn'
			>
				<Container maxWidth='lg'>
					<Toolbar disableGutters>
						<Box sx={{ display: "flex", alignItems: "center" }}>
							<img src={logo_letra} alt='medstm' width='60px' />

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
							<Link
								to='/'
								style={{
									textDecoration: "none",
									color: "black",
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
							</Link>

							<Link
								to='/join-us'
								style={{
									color: "black",
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
									UNETE
								</Button>
							</Link>

							<Link to='/blog'>
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
							</Link>

							<Link to='/contact-us'>
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
							</Link>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>

			{children}

			<footer>
				<Container maxWidth='lg' sx={{ mt: 5 }}>
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
								<img src={logo} alt='medts' width='80%' />

								{/* <Typography
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
								</Typography> */}
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
							<Box
								sx={{
									display: "flex",
									mt: 2,
									justifyContent: "left",
									alignItems: "center",
								}}
							>
								<IconButton>
									<InstagramIcon />
								</IconButton>
								<IconButton>
									<FacebookOutlinedIcon />
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
