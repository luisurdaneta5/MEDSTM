import { React, useEffect, useState } from "react";
import { GeneralLayout } from "../../layouts/GeneralLayout";
import {
	Box,
	Grid,
	Container,
	Typography,
	Avatar,
	Tooltip,
	Button,
	TableContainer,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	TablePagination,
	TextField,
	IconButton,
} from "@mui/material";
import { Api } from "../../api";
import usdt from "../../assets/usdt.png";
import moment from "moment";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

export const ProfileScreen = () => {
	const { uid } = useSelector((state) => state.auth.user);
	const [image, setImage] = useState("");

	useEffect(() => {}, []);

	function createData(name, lastname, plan, code) {
		return { name, lastname, plan, code };
	}

	// const refers = Referrals.map((referral) => {
	// 	return createData(
	// 		referral.User.name,
	// 		referral.User.lastname,
	// 		referral.User.plan,
	// 		"12345"
	// 	);
	// });

	const refers = [
		createData("John", "Doe", "Gratis", "3.5$"),
		createData("John", "Doe", "Basic", "12345"),
		createData("John", "Doe", "Diamante", "12345"),
		createData("John", "Doe", "Esmeralda", "12345"),
		createData("John", "Doe", "Oro", "12345"),
	];

	const [rowsPerPageRefer, setRowsPerPageRefer] = useState(5);
	const [pageRefer, setPageRefer] = useState(0);

	const handleChangePageRefer = (e, newPage) => {
		setPageRefer(newPage);
	};

	const handleChangeRowsPerPageRefer = (e) => {
		setRowsPerPageRefer(parseInt(e.target.value, 10));
		setPageRefer(0);
	};

	const [rowsPerPageSpeciality, setRowsPerPageSpeciality] = useState(5);
	const [pageSpeciality, setPageSpeciality] = useState(0);

	const handleChangePageSpeciality = (e, newPage) => {
		setPageSpeciality(newPage);
	};

	const handleChangeRowsPerPageSpeciality = (e) => {
		setRowsPerPageSpeciality(parseInt(e.target.value, 10));
		setPageSpeciality(0);
	};

	const handleChangeImage = (e) => {
		let timerInterval;

		const formData = new FormData();

		formData.append("image", e.target.files[0]);
		formData.append("uid", uid);
		// formData.append("id", id);

		Api.post("/user/upload/avatar", formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		}).then((res) => {
			console.log(res);
		});

		Swal.fire({
			title: "Subiendo imagen",
			html: "Por favor espere.",
			timer: 3000,
			timerProgressBar: true,
			didOpen: () => {
				Swal.showLoading();
			},
			willClose: () => {
				clearInterval(timerInterval);
			},
		}).then((result) => {
			/* Read more about handling dismissals below */
			if (result.dismiss === Swal.DismissReason.timer) {
				toast.success("Su avatar ha sido actualizado", {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			}
		});
	};

	return (
		<GeneralLayout>
			<Container maxWidth='lg'>
				<Grid container spacing={2}>
					<Grid
						item
						xs={6}
						sx={{
							display: "flex",
							flexDirection: "column",
							border: "1px solid black",
							borderRadius: "5px",
							mt: 5,
						}}
					>
						<Link to='/profile/edit'>
							<Box
								sx={{
									display: "flex",
									justifyContent: "flex-end",
									mr: 3,
								}}
							>
								<Typography
									variant='h6'
									color='primary'
									sx={{ cursor: "pointer" }}
								>
									<Tooltip title='Editar'>
										<i className='fas fa-edit'></i>
									</Tooltip>
								</Typography>
							</Box>
						</Link>
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								flexDirection: "column",
								alignItems: "center",
								mt: 4,
							}}
						>
							<Avatar
								alt='Luis Urdaneta'
								src='static/images/avatars/luis.jpg'
								sx={{
									width: "100px",
									height: "100px",
								}}
							/>
							<Tooltip title='Cambiar imagen'>
								<Box
									component='div'
									className='file-select'
									sx={{
										display: "flex",
										justifyContent: "center",
										mt: 2,
									}}
								>
									<input
										type='file'
										className='dropzone'
										name='image'
										onChange={handleChangeImage}
									/>
								</Box>
							</Tooltip>
						</Box>

						<Grid
							item
							xs={12}
							sx={{
								display: "flex",
								justifyContent: "center",
								mt: 2,
							}}
						>
							<Box>
								<IconButton
									component='a'
									href='http://facebook.com/'
									target='_blank'
									sx={{
										"& :hover": {
											color: "transparent",
											background:
												"-webkit-radial-gradient(30% 107%, circle, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);",
											backgroundClip: "text",
										},
									}}
								>
									<i
										className='fa-brands fa-instagram'
										style={{ fontSize: 25 }}
									></i>
								</IconButton>
								<IconButton
									component='a'
									href='http://facebook.com/'
									target='_blank'
									sx={{
										"& :hover": {
											color: "#1877f2",
										},
									}}
								>
									<i
										className='fa-brands fa-facebook'
										style={{ fontSize: 25 }}
									></i>
								</IconButton>
								<IconButton
									component='a'
									href='http://facebook.com/'
									target='_blank'
									sx={{
										"& :hover": {
											color: "#1d9bf0",
										},
									}}
								>
									<i
										className='fa-brands fa-twitter'
										style={{ fontSize: 25 }}
									></i>
								</IconButton>
								<IconButton
									component='a'
									href='http://facebook.com/'
									target='_blank'
									sx={{
										"& :hover": {
											color: "#0a66c2",
										},
									}}
								>
									<i
										className='fa-brands fa-linkedin'
										style={{ fontSize: 25 }}
									></i>
								</IconButton>
							</Box>
						</Grid>
						<Grid container spacing={6} sx={{ padding: 3 }}>
							<Grid item xs={6}>
								<Box sx={{}}>
									<Typography
										sx={{
											fontWeight: "bold",
											fontSize: 13,
										}}
									>
										Nombre:
									</Typography>
									<Typography color='initial'>
										Luis Urdaneta
									</Typography>
								</Box>

								<Box sx={{ mt: 3 }}>
									<Typography
										sx={{
											fontWeight: "bold",
											fontSize: 13,
										}}
									>
										Fecha Ingreso:
									</Typography>

									<Typography>08/08/2000</Typography>
								</Box>

								<Box sx={{ mt: 3 }}>
									<Typography
										sx={{
											fontWeight: "bold",
											fontSize: 13,
										}}
									>
										Correo Electronico:
									</Typography>

									<Typography>
										Luis.urdaneta488@yahoo.com.ve
									</Typography>
								</Box>
							</Grid>

							<Grid item xs={6}>
								<Box sx={{ mt: 0 }}>
									<Typography
										sx={{
											fontWeight: "bold",
											fontSize: 13,
										}}
									>
										Telefono
									</Typography>

									<Typography>+5825625262</Typography>
								</Box>

								<Box sx={{ mt: 3 }}>
									<Typography
										sx={{
											fontWeight: "bold",
											fontSize: 13,
										}}
									>
										Pais
									</Typography>

									<Typography>Venezuela</Typography>
								</Box>
							</Grid>
							<Grid
								item
								xs={12}
								sx={{
									display: "flex",
									justifyContent: "space-between",
								}}
							>
								<Box>
									<Typography
										sx={{
											fontWeight: "bold",
											fontSize: 13,
										}}
									>
										Plan:
									</Typography>
									<Typography>
										Gratis{" "}
										<Tooltip title='Gratis'>
											<i
												className='fa-solid fa-medal'
												style={{
													fontSize: 18,
													color: "green",
													cursor: "pointer",
												}}
											></i>
										</Tooltip>{" "}
									</Typography>
								</Box>

								<Box>
									<Typography
										sx={{
											fontWeight: "bold",
											fontSize: 13,
										}}
									>
										Fecha Vencimiento:
									</Typography>
									<Typography>08/22/2020</Typography>
								</Box>
								<Box sx={{ mt: 2 }}>
									<Typography>
										<Button
											variant='contained'
											size='small'
										>
											Cambiar Plan
										</Button>
									</Typography>
								</Box>
							</Grid>
							<Grid
								item
								xs={12}
								sx={{
									display: "flex",
									justifyContent: "space-between",
								}}
							>
								<Box>
									<Typography
										sx={{
											fontWeight: "bold",
											fontSize: 13,
										}}
									>
										Fondos Disponibles:
									</Typography>
									<Typography
										sx={{
											display: "flex",
											justifyContent: "space-between",
											textAlign: "center",
											alignItems: "center",
											fontWeight: "bold",
											fontSize: 25,
										}}
									>
										<span>$ 0.00</span>
										<img src={usdt} alt='usdt' width={30} />
									</Typography>
								</Box>

								<Box sx={{ mt: 2 }}>
									<Typography>
										<Button
											variant='contained'
											size='small'
										>
											Solicitar Retiro
										</Button>
									</Typography>
								</Box>
							</Grid>
						</Grid>
					</Grid>

					<Grid item xs={6}>
						<Grid container spacing={2} sx={{ mt: 1 }}>
							<Grid item xs={9}>
								<TextField
									id=''
									label=''
									value='Codigo de referido'
									size='small'
									disabled
									fullWidth
								/>
							</Grid>
							<Grid item xs={3}>
								<Button variant='contained' fullWidth>
									Copiar
								</Button>
							</Grid>
						</Grid>
						<Box
							sx={{
								display: "flex",

								mt: 2,
							}}
						>
							<Typography color='primary'>
								MIS REFERIDOS
							</Typography>
						</Box>
						<TableContainer
							sx={{ mt: 1, border: "1px solid black" }}
						>
							<Table size='small'>
								<TableHead>
									<TableRow>
										<TableCell align='left'>
											Referido
										</TableCell>
										<TableCell align='left'>Plan</TableCell>
										<TableCell align='left'>%</TableCell>
									</TableRow>
								</TableHead>

								<TableBody>
									{refers >= 0 ? (
										<TableRow>
											<TableCell
												colSpan={3}
												align='center'
											>
												Este usuario no posee Referidos
											</TableCell>
										</TableRow>
									) : (
										refers.map((refer, index) => (
											<TableRow key={index}>
												<TableCell align='left'>
													{refer.name}{" "}
													{refer.lastname}
												</TableCell>
												<TableCell align='left'>
													{refer.plan ===
														"Gratis" && (
														<Tooltip title='Gratis'>
															<i
																className='fa-solid fa-medal'
																style={{
																	fontSize: 18,
																	color: "green",
																	cursor: "pointer",
																}}
															></i>
														</Tooltip>
													)}

													{refer.plan === "Basic" && (
														<Tooltip title='Basica'>
															<i
																className='fa-solid fa-medal'
																style={{
																	fontSize: 18,
																	color: "#000080",
																	cursor: "pointer",
																}}
															></i>
														</Tooltip>
													)}

													{refer.plan ===
														"Bronce" && (
														<Tooltip title='Bronce'>
															<i
																className='fa-solid fa-medal'
																style={{
																	fontSize: 18,
																	color: "#800000",
																	cursor: "pointer",
																}}
															></i>
														</Tooltip>
													)}

													{refer.plan === "Plata" && (
														<Tooltip title='Plata'>
															<i
																className='fa-solid fa-medal'
																style={{
																	fontSize: 18,
																	color: "#333333",
																	cursor: "pointer",
																}}
															></i>
														</Tooltip>
													)}

													{refer.plan === "Oro" && (
														<Tooltip title='Oro'>
															<i
																className='fa-solid fa-medal'
																style={{
																	fontSize: 18,
																	color: "#ff9900",
																	cursor: "pointer",
																}}
															></i>
														</Tooltip>
													)}

													{refer.plan ===
														"Zafiro" && (
														<Tooltip title='Zafiro'>
															<i
																className='fa-solid fa-gem'
																style={{
																	fontSize: 18,
																	color: "#800080",
																	cursor: "pointer",
																}}
															></i>
														</Tooltip>
													)}

													{refer.plan === "Rubi" && (
														<Tooltip title='Rubi'>
															<i
																className='fa-solid fa-gem'
																style={{
																	fontSize: 18,
																	color: "#ff0000",
																	cursor: "pointer",
																}}
															></i>
														</Tooltip>
													)}

													{refer.plan ===
														"Esmeralda" && (
														<Tooltip title='Esmeralda'>
															<i
																className='fa-solid fa-gem'
																style={{
																	fontSize: 18,
																	color: "#008000",
																	cursor: "pointer",
																}}
															></i>
														</Tooltip>
													)}

													{refer.plan ===
														"Diamante" && (
														<Tooltip title='Diamante'>
															<i
																className='fa-solid fa-gem'
																style={{
																	fontSize: 18,
																	color: "#ff00ff",
																	cursor: "pointer",
																}}
															></i>
														</Tooltip>
													)}
												</TableCell>
												<TableCell align='left'>
													{refer.code}
												</TableCell>
											</TableRow>
										))
									)}
								</TableBody>
							</Table>
						</TableContainer>
						<TablePagination
							rowsPerPageOptions={[5]}
							component='div'
							count={refers.length}
							rowsPerPage={rowsPerPageRefer}
							page={pageRefer}
							onPageChange={handleChangePageRefer}
							onRowsPerPageChange={handleChangeRowsPerPageRefer}
							labelDisplayedRows={({ from, to, count }) => {
								return "" + from + "-" + to + " a " + count;
							}}
							labelRowsPerPage='Filas por página'
						/>

						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								mt: 1,
							}}
						>
							<Typography color='primary'>
								ESPECIALIDADES
							</Typography>
							<Button variant='contained' size='small'>
								Agregar Especialidad
							</Button>
						</Box>
						<TableContainer
							sx={{ mt: 1, border: "1px solid black" }}
						>
							<Table size='small'>
								<TableHead>
									<TableRow>
										<TableCell align='left'>
											Especialidades
										</TableCell>
										<TableCell align='left'></TableCell>
									</TableRow>
								</TableHead>

								<TableBody>
									{refers >= 0 ? (
										<TableRow>
											<TableCell
												colSpan={3}
												align='center'
											>
												Este usuario no posee
												Especialidades
											</TableCell>
										</TableRow>
									) : (
										refers.map((refer, index) => (
											<TableRow key={index}>
												<TableCell align='left'>
													{refer.name}{" "}
													{refer.lastname}
												</TableCell>

												<TableCell align='right'>
													<Button
														variant='contained'
														size='small'
														color='error'
													>
														<i className='fas fa-trash'></i>
													</Button>
												</TableCell>
											</TableRow>
										))
									)}
								</TableBody>
							</Table>
						</TableContainer>
						<TablePagination
							rowsPerPageOptions={[5]}
							component='div'
							count={refers.length}
							rowsPerPage={rowsPerPageSpeciality}
							page={pageSpeciality}
							onPageChange={handleChangePageSpeciality}
							onRowsPerPageChange={
								handleChangeRowsPerPageSpeciality
							}
							labelDisplayedRows={({ from, to, count }) => {
								return "" + from + "-" + to + " a " + count;
							}}
							labelRowsPerPage='Filas por página'
						/>
					</Grid>
					<Grid item xs={6}>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								mt: 1,
							}}
						>
							<Typography color='primary'>MIS RETIROS</Typography>
						</Box>
						<TableContainer
							sx={{ mt: 1, border: "1px solid black" }}
						>
							<Table size='small'>
								<TableHead>
									<TableRow>
										<TableCell align='left'>
											Referido
										</TableCell>
										<TableCell align='left'>Plan</TableCell>
										<TableCell align='left'>%</TableCell>
									</TableRow>
								</TableHead>

								<TableBody>
									{refers >= 0 ? (
										<TableRow>
											<TableCell
												colSpan={3}
												align='center'
											>
												Este usuario no posee Referidos
											</TableCell>
										</TableRow>
									) : (
										refers.map((refer, index) => (
											<TableRow key={index}>
												<TableCell align='left'>
													{refer.name}{" "}
													{refer.lastname}
												</TableCell>
												<TableCell align='left'>
													{refer.plan ===
														"Gratis" && (
														<Tooltip title='Gratis'>
															<i
																className='fa-solid fa-medal'
																style={{
																	fontSize: 18,
																	color: "green",
																	cursor: "pointer",
																}}
															></i>
														</Tooltip>
													)}

													{refer.plan === "Basic" && (
														<Tooltip title='Basica'>
															<i
																className='fa-solid fa-medal'
																style={{
																	fontSize: 18,
																	color: "#000080",
																	cursor: "pointer",
																}}
															></i>
														</Tooltip>
													)}

													{refer.plan ===
														"Bronce" && (
														<Tooltip title='Bronce'>
															<i
																className='fa-solid fa-medal'
																style={{
																	fontSize: 18,
																	color: "#800000",
																	cursor: "pointer",
																}}
															></i>
														</Tooltip>
													)}

													{refer.plan === "Plata" && (
														<Tooltip title='Plata'>
															<i
																className='fa-solid fa-medal'
																style={{
																	fontSize: 18,
																	color: "#333333",
																	cursor: "pointer",
																}}
															></i>
														</Tooltip>
													)}

													{refer.plan === "Oro" && (
														<Tooltip title='Oro'>
															<i
																className='fa-solid fa-medal'
																style={{
																	fontSize: 18,
																	color: "#ff9900",
																	cursor: "pointer",
																}}
															></i>
														</Tooltip>
													)}

													{refer.plan ===
														"Zafiro" && (
														<Tooltip title='Zafiro'>
															<i
																className='fa-solid fa-gem'
																style={{
																	fontSize: 18,
																	color: "#800080",
																	cursor: "pointer",
																}}
															></i>
														</Tooltip>
													)}

													{refer.plan === "Rubi" && (
														<Tooltip title='Rubi'>
															<i
																className='fa-solid fa-gem'
																style={{
																	fontSize: 18,
																	color: "#ff0000",
																	cursor: "pointer",
																}}
															></i>
														</Tooltip>
													)}

													{refer.plan ===
														"Esmeralda" && (
														<Tooltip title='Esmeralda'>
															<i
																className='fa-solid fa-gem'
																style={{
																	fontSize: 18,
																	color: "#008000",
																	cursor: "pointer",
																}}
															></i>
														</Tooltip>
													)}

													{refer.plan ===
														"Diamante" && (
														<Tooltip title='Diamante'>
															<i
																className='fa-solid fa-gem'
																style={{
																	fontSize: 18,
																	color: "#ff00ff",
																	cursor: "pointer",
																}}
															></i>
														</Tooltip>
													)}
												</TableCell>
												<TableCell align='left'>
													{refer.code}
												</TableCell>
											</TableRow>
										))
									)}
								</TableBody>
							</Table>
						</TableContainer>
						<TablePagination
							rowsPerPageOptions={[5]}
							component='div'
							count={refers.length}
							rowsPerPage={rowsPerPageRefer}
							page={pageRefer}
							onPageChange={handleChangePageRefer}
							onRowsPerPageChange={handleChangeRowsPerPageRefer}
							labelDisplayedRows={({ from, to, count }) => {
								return "" + from + "-" + to + " a " + count;
							}}
							labelRowsPerPage='Filas por página'
						/>
					</Grid>
					<Grid item xs={6}>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								mt: 0,
							}}
						>
							<Typography color='primary'>
								MIS DIRECCIONES
							</Typography>
							<Button variant='contained' size='small'>
								Agregar Direccion
							</Button>
						</Box>
						<TableContainer
							sx={{ mt: 1, border: "1px solid black" }}
						>
							<Table size='small'>
								<TableHead>
									<TableRow>
										<TableCell align='left'>
											Direcciones
										</TableCell>
									</TableRow>
								</TableHead>

								<TableBody>
									{refers >= 0 ? (
										<TableRow>
											<TableCell
												colSpan={3}
												align='center'
											>
												Este usuario no posee Referidos
											</TableCell>
										</TableRow>
									) : (
										refers.map((refer, index) => (
											<TableRow key={index}>
												<TableCell align='left'>
													{refer.name}{" "}
													{refer.lastname}
												</TableCell>

												<TableCell align='right'>
													<Button
														variant='contained'
														size='small'
														color='error'
													>
														<i className='fas fa-trash'></i>
													</Button>
												</TableCell>
											</TableRow>
										))
									)}
								</TableBody>
							</Table>
						</TableContainer>
						<TablePagination
							rowsPerPageOptions={[5]}
							component='div'
							count={refers.length}
							rowsPerPage={rowsPerPageRefer}
							page={pageRefer}
							onPageChange={handleChangePageRefer}
							onRowsPerPageChange={handleChangeRowsPerPageRefer}
							labelDisplayedRows={({ from, to, count }) => {
								return "" + from + "-" + to + " a " + count;
							}}
							labelRowsPerPage='Filas por página'
						/>
					</Grid>
				</Grid>
			</Container>
		</GeneralLayout>
	);
};
