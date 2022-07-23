import React, { useState } from "react";
import { DashboardLayout } from "../../../layouts/DashboardLayout";
import {
	Avatar,
	Box,
	Grid,
	Table,
	TableCell,
	TableContainer,
	TableHead,
	Typography,
	TableBody,
	TableRow,
	Tooltip,
	TablePagination,
	Button,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Api } from "../../../api";
import moment from "moment";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import {
	setApprovedUser,
	setRejectedUser,
} from "../../../store/slices/dashboard";

export const ProfileScreen = () => {
	const { id } = useParams();

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [user, setUser] = useState({
		Referrals: [],
	});

	const {
		name,
		lastname,
		country,
		email,
		phone,
		status,
		Documents,
		Referrals,
		date_request,
	} = user;

	useEffect(() => {
		Api.get("/user/request/inactive", {
			headers: { "Content-Type": "application/json" },
			params: { id },
		})
			.then((res) => {
				setUser(res.data.user);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	function createData(name, lastname, plan, code) {
		return { name, lastname, plan, code };
	}

	const refers = Referrals.map((referral) => {
		return createData(
			referral.User.name,
			referral.User.lastname,
			referral.User.plan,
			"12345"
		);
	});

	const [rowsPerPage, setRowsPerPage] = useState(10);
	const [page, setPage] = useState(0);

	const handleChangePage = (e, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (e) => {
		setRowsPerPage(parseInt(e.target.value, 10));
		setPage(0);
	};

	const handleApproved = () => {
		Swal.fire({
			title: "",
			text: "Estas seguro que deseas aprobar este usuario?",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#018f98",
			cancelButtonColor: "#d33",
			confirmButtonText: "Si, aprobar",
			cancelButtonText: "Cancelar",
		}).then((result) => {
			if (result.isConfirmed) {
				dispatch(setApprovedUser(id));
			}
		});
	};

	const handleRejected = () => {
		Swal.fire({
			title: "",
			text: "Estas seguro que deseas rechazar la solicitud de este usuario?",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#018f98",
			cancelButtonColor: "#d33",
			confirmButtonText: "Si, rechazar",
			cancelButtonText: "Cancelar",
		}).then((result) => {
			if (result.isConfirmed) {
				dispatch(setRejectedUser(id));
				navigate("/dashboard/requests", { replace: true });
			}
		});
	};

	return (
		<DashboardLayout>
			<Box
				sx={{
					display: "flex",

					justifyContent: "flex-end",
				}}
			>
				<Box sx={{ mr: 2 }}>
					<Button variant='contained' onClick={handleApproved}>
						Aprobar
					</Button>
				</Box>
				<Box>
					<Button
						variant='contained'
						color='error'
						onClick={handleRejected}
					>
						Rechazar
					</Button>
				</Box>
			</Box>
			<Grid container spacing={2}>
				<Grid
					item
					xs={6}
					sx={{
						display: "flex",
						flexDirection: "column",
						border: "1px solid black",
						mt: 5,
					}}
				>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							mt: 4,
							mb: 5,
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
					</Box>
					<Grid container spacing={6} sx={{ padding: 3 }}>
						<Grid item xs={6}>
							<Box sx={{}}>
								<Typography
									sx={{ fontWeight: "bold", fontSize: 13 }}
								>
									Nombre:
								</Typography>
								<Typography color='initial'>
									{name} {lastname}
								</Typography>
							</Box>

							<Box sx={{ mt: 3 }}>
								<Typography
									sx={{ fontWeight: "bold", fontSize: 13 }}
								>
									Fecha Solicitud:
								</Typography>

								<Typography>
									{moment(date_request).format("DD/MM/YYYY")}
								</Typography>
							</Box>

							<Box sx={{ mt: 3 }}>
								<Typography
									sx={{ fontWeight: "bold", fontSize: 13 }}
								>
									Correo Electronico:
								</Typography>

								<Typography>{email}</Typography>
							</Box>

							{status !== 3 && (
								<Box sx={{ mt: 3 }}>
									<Typography
										sx={{
											fontWeight: "bold",
											fontSize: 13,
										}}
									>
										Especialidades:
									</Typography>
									<Typography color='initial' component='ul'>
										<Typography component='li'>
											Traumatologo
										</Typography>
									</Typography>
								</Box>
							)}
						</Grid>

						<Grid item xs={6}>
							<Box>
								<Typography
									sx={{ fontWeight: "bold", fontSize: 13 }}
								>
									Cargo:
								</Typography>
								<Typography color='initial'>
									{user.type === "4"
										? "Promotor"
										: "Profesional de la Salud"}
								</Typography>
							</Box>

							<Box sx={{ mt: 3 }}>
								<Typography
									sx={{ fontWeight: "bold", fontSize: 13 }}
								>
									Telefono
								</Typography>

								<Typography>{phone}</Typography>
							</Box>

							<Box sx={{ mt: 3 }}>
								<Typography
									sx={{ fontWeight: "bold", fontSize: 13 }}
								>
									Pais
								</Typography>

								<Typography>{country}</Typography>
							</Box>
						</Grid>

						{Documents &&
							Documents.map((document) => (
								<Grid item xs={6} key={document.id}>
									<Box>
										<Typography
											sx={{
												fontWeight: "bold",
												fontSize: 13,
											}}
										>
											{document.type === "1"
												? "Curriculum"
												: "Titulo Universitario"}
										</Typography>
										<Button
											variant='contained'
											size='small'
											fullWidth
											startIcon={<DownloadIcon />}
											component='a'
											href={document.url}
											download
											target='_blank'
										>
											Descargar
										</Button>
									</Box>
								</Grid>
							))}
					</Grid>
				</Grid>
				<Grid item xs={6}>
					<TableContainer sx={{ mt: 3, border: "1px solid black" }}>
						<Table size='small'>
							<TableHead>
								<TableRow>
									<TableCell align='left'>
										Referidos
									</TableCell>
									<TableCell align='left'>Plan</TableCell>
									<TableCell align='left'>Codigo</TableCell>
								</TableRow>
							</TableHead>

							<TableBody>
								{refers >= 0 ? (
									<TableRow>
										<TableCell colSpan={3} align='center'>
											Este usuario no posee Referidos
										</TableCell>
									</TableRow>
								) : (
									refers.map((refer, index) => (
										<TableRow key={index}>
											<TableCell align='left'>
												{refer.name} {refer.lastname}
											</TableCell>
											<TableCell align='left'>
												{refer.plan === "Gratis" && (
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

												{refer.plan === "Bronce" && (
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

												{refer.plan === "Zafiro" && (
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

												{refer.plan === "Esmeralda" && (
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

												{refer.plan === "Diamante" && (
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
						rowsPerPage={rowsPerPage}
						page={page}
						onPageChange={handleChangePage}
						onRowsPerPageChange={handleChangeRowsPerPage}
						labelDisplayedRows={({ from, to, count }) => {
							return "" + from + "-" + to + " a " + count;
						}}
						labelRowsPerPage='Filas por página'
					/>
				</Grid>
			</Grid>
		</DashboardLayout>
	);
};
