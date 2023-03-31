import { GeneralLayout } from "../../layouts/GeneralLayout";
import {
	Avatar,
	Box,
	Container,
	Grid,
	Typography,
	Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { Api } from "../../api";
import { useSelector } from "react-redux";

export const ProfileEditScreen = () => {
	const id = localStorage.getItem("id");
	const [data, setData] = useState([]);

	const { name, lastname, phone, email } = data;

	useEffect(() => {
		Api.get("/user/profile", {
			params: {
				id,
			},
		})
			.then((res) => setData(res.data.user))
			.catch((err) => console.log(err));
	}, []);

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
										{name} {lastname}
									</Typography>
								</Box>
								<Box>
									<Link
										to={`/profile/edit/change_name/${name}/${lastname}/${id}`}
									>
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
									</Link>
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
										{phone}
									</Typography>
								</Box>
								<Box>
									<Link
										to={`/profile/edit/change_phone/${phone}/${id}`}
									>
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
									</Link>
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
										{email}
									</Typography>
								</Box>
								<Box>
									<Link
										to={`/profile/edit/change_email/${email}/${id}`}
									>
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
									</Link>
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
									<Link
										to={`/profile/edit/change_password/${id}`}
									>
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
									</Link>
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
									<Link
										to={`/profile/edit/social_networks/${id}`}
									>
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
									</Link>
								</Box>
							</Box>
						</Box>
						<Box
							sx={{
								mt: 1,
							}}
						>
							<Link to='/profile'>
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
