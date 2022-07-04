import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { GeneralLayout } from "../../layouts/GeneralLayout";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import "./styles.css";

export const UserTypeScreen = () => {
	const { plan } = useParams();

	return (
		<GeneralLayout>
			<Container
				maxWidth='lg'
				sx={{ mt: 4, display: "flex", flexDirection: "column" }}
			>
				<Typography
					sx={{ textAlign: "center", mb: 3, fontWeight: 800 }}
				>
					QUE TIPO DE USUARIO DESEAS?
				</Typography>
				<Grid container spacing={3}>
					<Grid item xs={4} sm={12} md={6} lg={6}>
						<Link
							to={`/join-us/user-type/${plan}/professional-healthcare`}
						>
							<Paper
								sx={{
									display: "flex",
									height: "70vh",
									alignItems: "center",
									justifyContent: "center",
								}}
								className='element keep3'
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
											className='fa-solid fa-user-md'
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
											PROFESIONAL SANITARIO
										</Typography>
										<Box sx={{ mt: 3 }}>
											<Typography
												sx={{ color: "#147671" }}
											>
												Crea tu perfil profesional
												visible públicamente desde
												cualquier lugar del mundo; en
												nuestro directorio internacional
												de profesionales de la salud,
												nuestras redes sociales y
												motores de búsqueda google.
											</Typography>
										</Box>
									</Box>
								</Box>
							</Paper>
						</Link>
					</Grid>

					<Grid item xs={4} sm={12} md={6} lg={6}>
						<Link to={`/join-us/user-type/${plan}/sales-promoter`}>
							<Paper
								sx={{
									display: "flex",
									height: "70vh",
									alignItems: "center",
									justifyContent: "center",
								}}
								className='element keep3'
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
											className='fa-solid fa-user-tie'
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
											PROMOTOR DE VENTAS
										</Typography>
										<Box sx={{ mt: 3 }}>
											<Typography
												sx={{ color: "#147671" }}
											>
												Crea tu perfil y forma parte del
												equipo MEDS TM como exclusivo
												promotor de ventas. Este miembro
												del equipo empresarial será
												quien le indique al cliente
												(profesional de la salud o
												promotor de ventas) aquel
												producto o servicio (membresía)
												que vaya acorde a sus
												expectativas y necesidades.
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
