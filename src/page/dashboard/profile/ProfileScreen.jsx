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
	Paper,
	TableBody,
	TableRow,
	Tooltip,
	TablePagination,
	Button,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserInactive } from "../../../store/slices/dashboard/getUserInactive";

function createData(name, lastname, plan, code) {
	return { name, lastname, plan, code };
}

const refers = [
	createData("Luis", "Urdaneta", "Gratis", "12345"),
	createData("Luis", "Quiroz", "Diamante", "12345"),
];

export const ProfileScreen = () => {
	const { id } = useParams();

	const data = {
		id: id,
	};

	const [user, setUser] = useState();

	useEffect(() => {
		const datos = getUserInactive(data);
		console.log(datos);
	}, []);

	console.log(user);

	const [rowsPerPage, setRowsPerPage] = useState(10);
	const [page, setPage] = useState(0);

	const handleChangePage = (e, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (e) => {
		setRowsPerPage(parseInt(e.target.value, 10));
		setPage(0);
	};
	return (
		<DashboardLayout>
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
									Luis Urdaneta
								</Typography>
							</Box>

							<Box sx={{ mt: 3 }}>
								<Typography
									sx={{ fontWeight: "bold", fontSize: 13 }}
								>
									Fecha Solicitud:
								</Typography>

								<Typography>07/08/2022</Typography>
							</Box>

							<Box sx={{ mt: 3 }}>
								<Typography
									sx={{ fontWeight: "bold", fontSize: 13 }}
								>
									Especialidades:
								</Typography>
								<Typography color='initial' component='ul'>
									<Typography component='li'>
										Traumatologo
									</Typography>
								</Typography>
							</Box>
						</Grid>

						<Grid item xs={6}>
							<Box>
								<Typography
									sx={{ fontWeight: "bold", fontSize: 13 }}
								>
									Cargo:
								</Typography>
								<Typography color='initial'>
									Promotor
								</Typography>
							</Box>

							<Box sx={{ mt: 3 }}>
								<Typography
									sx={{ fontWeight: "bold", fontSize: 13 }}
								>
									Fecha Solicitud:
								</Typography>

								<Typography>07/08/2022</Typography>
							</Box>
						</Grid>

						<Grid item xs={6}>
							<Box>
								<Typography
									sx={{ fontWeight: "bold", fontSize: 13 }}
								>
									Curriculum:
								</Typography>
								<Button
									variant='contained'
									size='small'
									fullWidth
									startIcon={<DownloadIcon />}
								>
									Descargar
								</Button>
							</Box>
						</Grid>
						<Grid item xs={6}>
							<Box>
								<Typography
									sx={{ fontWeight: "bold", fontSize: 13 }}
								>
									Titulo Universitario:
								</Typography>
								<Typography color='initial'>
									Luis Urdaneta
								</Typography>
							</Box>
						</Grid>
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
								{refers.map((refer, index) => (
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
								))}
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
