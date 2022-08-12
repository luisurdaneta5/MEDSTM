import { GeneralLayout } from "../../layouts/GeneralLayout";
import {
	Avatar,
	Box,
	Container,
	Grid,
	Typography,
	Button,
} from "@mui/material";
import { useState } from "react";
import Swal from "sweetalert2";
import "./styles.css";
import { Link } from "react-router-dom";

export const ProfileEditScreen = () => {
	return (
		<GeneralLayout>
			<Container maxWidth='sm'>
				<Grid container spacing={2} sx={{ mt: 2 }}>
					<Grid item xs={12}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								borderTop: "1px solid #e0e0e0",
								borderLeft: "1px solid #e0e0e0",
								borderRight: "1px solid #e0e0e0",
								borderTopLeftRadius: "5px",
								borderTopRightRadius: "5px",
								p: 2,
								mt: 5,
							}}
						>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
								}}
							>
								<Box>
									<Typography
										sx={{
											fontSize: "15px",
											fontWeight: "bold",
										}}
									>
										Nombre:
									</Typography>
									<Typography
										sx={{
											fontSize: "15px",
										}}
									>
										Luis Urdaneta
									</Typography>
								</Box>
								<Box>
									<Button
										variant='contained'
										color='secondary'
										sx={{
											fontSize: "11px",
											width: "20px",
											color: "white",
										}}
									>
										editar
									</Button>
								</Box>
							</Box>
						</Box>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								borderTop: "1px solid #e0e0e0",
								borderLeft: "1px solid #e0e0e0",
								borderRight: "1px solid #e0e0e0",

								p: 2,
							}}
						>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
								}}
							>
								<Box>
									<Typography
										sx={{
											fontSize: "15px",
											fontWeight: "bold",
										}}
									>
										Telefono:
									</Typography>
									<Typography
										sx={{
											fontSize: "15px",
										}}
									>
										+5804127646787
									</Typography>
								</Box>
								<Box>
									<Button
										variant='contained'
										color='secondary'
										sx={{
											fontSize: "11px",
											width: "20px",
											color: "white",
										}}
									>
										editar
									</Button>
								</Box>
							</Box>
						</Box>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								borderTop: "1px solid #e0e0e0",
								borderLeft: "1px solid #e0e0e0",
								borderRight: "1px solid #e0e0e0",

								p: 2,
							}}
						>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
								}}
							>
								<Box>
									<Typography
										sx={{
											fontSize: "15px",
											fontWeight: "bold",
										}}
									>
										Correo Electronico:
									</Typography>
									<Typography
										sx={{
											fontSize: "15px",
										}}
									>
										luis.urdaneta488@gmail.com
									</Typography>
								</Box>
								<Box>
									<Button
										variant='contained'
										color='secondary'
										sx={{
											fontSize: "11px",
											width: "20px",
											color: "white",
										}}
									>
										editar
									</Button>
								</Box>
							</Box>
						</Box>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								borderTop: "1px solid #e0e0e0",
								borderLeft: "1px solid #e0e0e0",
								borderRight: "1px solid #e0e0e0",

								p: 2,
							}}
						>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
								}}
							>
								<Box>
									<Typography
										sx={{
											fontSize: "15px",
											fontWeight: "bold",
										}}
									>
										Contraseña:
									</Typography>
									<Typography
										sx={{
											fontSize: "15px",
										}}
									>
										*******
									</Typography>
								</Box>
								<Box>
									<Button
										variant='contained'
										color='secondary'
										sx={{
											fontSize: "11px",
											width: "20px",
											color: "white",
										}}
									>
										editar
									</Button>
								</Box>
							</Box>
						</Box>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								borderTop: "1px solid #e0e0e0",
								borderLeft: "1px solid #e0e0e0",
								borderRight: "1px solid #e0e0e0",
								borderBottom: "1px solid #e0e0e0",
								p: 2,
							}}
						>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
								}}
							>
								<Box>
									<Typography
										sx={{
											fontSize: "15px",
											fontWeight: "bold",
										}}
									>
										Redes Sociales:
									</Typography>
									<Typography
										sx={{
											fontSize: "15px",
										}}
									>
										Administra las redes sociales que
										ofreces a los usuarios que implementen
										busquedas en el sitio web
									</Typography>
								</Box>
								<Box>
									<Button
										variant='contained'
										color='secondary'
										sx={{
											fontSize: "11px",
											width: "20px",
											color: "white",
										}}
									>
										editar
									</Button>
								</Box>
							</Box>
						</Box>
						<Box
							sx={{
								mt: 1,
							}}
						>
							<Link to='/dashboard/profile'>
								<Button
									variant='contained'
									color='primary'
									size='small'
								>
									finalizado
								</Button>
							</Link>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</GeneralLayout>
	);
};
