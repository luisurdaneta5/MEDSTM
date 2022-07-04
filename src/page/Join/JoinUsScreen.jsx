import { GeneralLayout } from "../../layouts/GeneralLayout";
import { Box, Grid, Container, Typography, Paper } from "@mui/material";
import { Link } from "react-router-dom";

import "./styles.css";

export const JoinUsScreen = () => {
	return (
		<GeneralLayout>
			<Container
				maxWidth='lg'
				sx={{ mt: 4, display: "flex", flexDirection: "column" }}
			>
				<Typography
					sx={{ textAlign: "center", mb: 3, fontWeight: 800 }}
				>
					ELIGE UNO DE NUESTROS PLANES
				</Typography>
				<Grid container spacing={3}>
					<Grid item xs={4} sm={12} md={4} lg={4}>
						<Link to='/join-us/user-type/free'>
							<Paper
								sx={{
									display: "flex",
									height: "70vh",
									alignItems: "center",
									justifyContent: "center",
								}}
								className='element keep2'
							>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<Typography className='elementor-icon animate__animated animate__fadeIn'>
										<i
											className='fa-solid fa-medal'
											style={{ fontSize: 50 }}
										></i>
									</Typography>
									<Box
										sx={{
											display: "flex",
											flexDirection: "column",
											alignItems: "center",
											justifyContent: "center",
											textAlign: "center",
										}}
									>
										<Typography
											sx={{
												fontSize: 30,
												fontWeight: 800,
												mt: 2,
												color: "#147671",
											}}
										>
											GRATIS
										</Typography>
										<Box sx={{ mt: 3 }}>
											<Typography
												sx={{ color: "#147671" }}
											>
												Crea tu perfil de forma gratuita
												e ILIMITADA. Disfruta de
												auténticos beneficios MEDS TM.
											</Typography>
										</Box>
									</Box>
								</Box>
							</Paper>
						</Link>
					</Grid>

					<Grid item xs={4} sm={12} md={4} lg={4}>
						<Link to='/join-us/user-type/premiun'>
							<Paper
								sx={{
									display: "flex",
									height: "70vh",
									alignItems: "center",
									justifyContent: "center",
								}}
								className='element keep2'
							>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<Typography className='elementor-icon animate__animated animate__fadeIn'>
										<i
											className='fa-solid fa-medal'
											style={{ fontSize: 50 }}
										></i>
									</Typography>
									<Box
										sx={{
											display: "flex",
											flexDirection: "column",
											alignItems: "center",
											justifyContent: "center",
											textAlign: "center",
										}}
									>
										<Typography
											sx={{
												fontSize: 30,
												fontWeight: 800,
												mt: 2,
												color: "#147671",
											}}
										>
											PREMIUM
										</Typography>
										<Box sx={{ mt: 3 }}>
											<Typography
												sx={{ color: "#147671" }}
											>
												Crea tu perfil obteniendo una
												membresía ILIMITADA. Disfruta de
												beneficios según el nivel que
												escojas y sé un accionista MEDS
												TM.
											</Typography>
										</Box>
									</Box>
								</Box>
							</Paper>
						</Link>
					</Grid>
					<Grid item xs={4} sm={12} md={4} lg={4}>
						<Link to='/join-us/user-type/vip'>
							<Paper
								sx={{
									display: "flex",
									height: "70vh",
									alignItems: "center",
									justifyContent: "center",
								}}
								className='element keep2'
							>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<Typography className='elementor-icon animate__animated animate__fadeIn'>
										<i
											className='fa-solid fa-gem'
											style={{ fontSize: 50 }}
										></i>
									</Typography>
									<Box
										sx={{
											display: "flex",
											flexDirection: "column",
											alignItems: "center",
											justifyContent: "center",
											textAlign: "center",
										}}
									>
										<Typography
											sx={{
												fontSize: 30,
												fontWeight: 800,
												mt: 2,
												color: "#147671",
											}}
										>
											VIP
										</Typography>
										<Box sx={{ mt: 3 }}>
											<Typography
												sx={{ color: "#147671" }}
											>
												Crea tu perfil obteniendo una
												membresía ILIMITADA. Disfruta de
												mayores beneficios según el
												nivel que escojas y forma parte
												de los accionistas mayoritarios
												MEDS TM
											</Typography>
										</Box>
									</Box>
								</Box>
							</Paper>
						</Link>
					</Grid>
				</Grid>
			</Container>
		</GeneralLayout>
	);
};
