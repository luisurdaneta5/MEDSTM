import { DashboardLayout } from "../../../layouts/DashboardLayout";
import {
	Box,
	TableContainer,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	Paper,
	TablePagination,
	Button,
	Alert,
	Grid,
	Tooltip,
	Typography,
	FormControl,
	OutlinedInput,
	InputAdornment,
	Fab,
	Avatar,
} from "@mui/material";

import { useState, useEffect } from "react";

import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { Api } from "../../../api";
import { Link } from "react-router-dom";

function createData(id, avatar, name, lastname, plan, vencimiento, status) {
	return { id, avatar, name, lastname, plan, vencimiento, status };
}

export const MedsScreen = () => {
	const [meds, setMeds] = useState([]);

	useEffect(() => {
		Api.get(`/user/all?type=3`)
			.then((res) => {
				setMeds(res.data.users);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const rows = meds.map((med) => {
		return createData(med.id, med.documents[0].url, med.name, med.lastname, med.plan, Date.now(), med.status);
	});

	const [rowsPerPage, setRowsPerPage] = useState(10);
	const [page, setPage] = useState(0);

	const [search, setSearch] = useState("");

	const handleSearch = (e) => {
		setSearch(e.target.value);
	};

	let results = [];

	if (!search) {
		results = rows;
	} else {
		results = rows.filter((row) =>
			(row.name + " " + row.lastname + " " + row.plan + " " + row.status)
				.toLowerCase()
				.includes(search.toLowerCase().trim())
		);
	}

	const [icon, setIcon] = useState(false);

	const handleViewSearch = () => {
		setIcon(true);
	};

	const handleClearSearch = () => {
		setIcon(false);
		reset();
		console.log("Busqueda reiniciada");
	};

	const handleChangePage = (e, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (e) => {
		setRowsPerPage(parseInt(e.target.value, 10));
		setPage(0);
	};

	// const handleDelete = (id) => {
	// 	Api.delete("/user/dashboard/deleteUser", {
	// 		params: {
	// 			id,
	// 		},
	// 	}).then((res) => {
	// 		toast.success(res.data.message, {
	// 			position: "top-right",
	// 			autoClose: 5000,
	// 			hideProgressBar: false,
	// 			closeOnClick: true,
	// 			pauseOnHover: true,
	// 			draggable: true,
	// 			progress: undefined,
	// 		});
	// 		navigate("/dashboard/meds");
	// 	});
	// };
	return (
		<DashboardLayout>
			<Link to='/dashboard/meds/create'>
				<Tooltip title='Crear Nuevo'>
					<Fab
						color='primary'
						aria-label='add'
						sx={{
							position: "fixed",
							bottom: "2rem",
							right: "2rem",
						}}
					>
						<AddIcon />
					</Fab>
				</Tooltip>
			</Link>

			<Box sx={{ mb: 5 }}>
				<Typography variant='h6' componet='div'>
					Profesionales de la Salud
				</Typography>
			</Box>
			<Box sx={{ mt: 3, mb: 2 }}>
				<FormControl fullWidth variant='outlined'>
					<OutlinedInput
						type='text'
						value={search}
						name='search'
						placeholder='Buscar...'
						startAdornment={
							<InputAdornment position='start'>
								<SearchIcon />
							</InputAdornment>
						}
						size='small'
						autoComplete='off'
						onChange={handleSearch}
						onFocus={handleViewSearch}
					/>
				</FormControl>
			</Box>
			<TableContainer component={Paper} sx={{ border: "1px solid black" }}>
				{/* <Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						textAlign: "center",
						mt: 2,
						mb: 2,
					}}
				>
					<CircularProgress />
				</Box> */}
				<Table sx={{ minWidth: 650 }} size='small'>
					<TableHead>
						<TableRow>
							<TableCell align='left'>Avatar</TableCell>
							<TableCell align='left'>Nombre</TableCell>
							<TableCell align='center'>Plan</TableCell>
							<TableCell align='center'>Status</TableCell>
							<TableCell align='center'>Vencimiento</TableCell>
							<TableCell align='center'>Acciones</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{results >= 0 ? (
							<TableRow>
								<TableCell colSpan={6} align='center'>
									No hay datos disponibles...
								</TableCell>
							</TableRow>
						) : (
							results.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
								<TableRow
									key={row.id}
									sx={{
										"&:last-child td, &:last-child th": {
											border: 0,
										},
									}}
								>
									<TableCell>
										<Avatar alt={row.name} src={row.avatar} />
									</TableCell>
									<TableCell component='th' scope='row'>
										{row.name} {row.lastname}
									</TableCell>
									<TableCell align='center'>
										{row.plan === "Gratis" && (
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

										{row.plan === "Basic" && (
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

										{row.plan === "Bronce" && (
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

										{row.plan === "Plata" && (
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

										{row.plan === "Oro" && (
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

										{row.plan === "Zafiro" && (
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

										{row.plan === "Rubi" && (
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

										{row.plan === "Esmeralda" && (
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

										{row.plan === "Diamante" && (
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
									<TableCell align='center'>
										{row.status === 1 ? (
											<Alert
												severity='success'
												size='small'
												sx={{
													textAlign: "center",
												}}
											>
												Activo
											</Alert>
										) : (
											<Alert
												severity='error'
												size='small'
												sx={{
													textAlign: "center",
												}}
											>
												Inactivo
											</Alert>
										)}
									</TableCell>
									<TableCell align='center'>
										{row.plan === "Gratis" ? <Typography>Ilimitada</Typography> : row.vencimiento}
									</TableCell>

									<TableCell align='right'>
										<Grid
											container
											spacing={1}
											sx={{
												display: "flex",
												justifyContent: "space-between",
											}}
										>
											<Grid item sm={12}>
												<Link to={`/dashboard/meds/edit/${row.id}`}>
													<Button variant='contained' size='small' fullWidth>
														Editar
													</Button>
												</Link>
											</Grid>

											{/* <Grid item sm={6}>
												<Button
													variant='contained'
													size='small'
													fullWidth
													color='error'
													onClick={() => handleDelete(row.id)}
												>
													Eliminar
												</Button>
											</Grid> */}
										</Grid>
									</TableCell>
								</TableRow>
							))
						)}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[10, 20, 30]}
				component='div'
				count={rows.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
				labelDisplayedRows={({ from, to, count }) => {
					return "" + from + "-" + to + " a " + count;
				}}
				labelRowsPerPage='Filas por página'
			/>
		</DashboardLayout>
	);
};
