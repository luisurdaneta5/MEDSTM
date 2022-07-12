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
	Grid,
	Typography,
	FormControl,
	OutlinedInput,
	InputAdornment,
} from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect } from "react";
import { Api } from "../../../api";
import moment from "moment";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

moment.locale("es-mx");

function createData(id, name, lastname, status, date, type) {
	return { id, name, lastname, status, date, type };
}

export const RequestScreen = () => {
	const [users, setUsers] = useState([]);

	const dispatch = useDispatch();

	useEffect(() => {
		Api.get("/user/requests/inactive")
			.then((response) => {
				setUsers(response.data.data);
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);

	const rows = users.map((user) => {
		if (user.type === "3") {
			const data = "Profesional de la Salud";
			return createData(
				user.id,
				user.name,
				user.lastname,
				user.status,
				moment(user.created_at).format("DD/MM/YYYY"),
				data
			);
		}

		if (user.type === "4") {
			const data = "Promotor";
			return createData(
				user.id,
				user.name,
				user.lastname,
				user.status,
				moment(user.created_at).format("DD/MM/YYYY"),
				data
			);
		}
	});

	//filtro
	const [search, setSearch] = useState("");

	const handleSearch = (e) => {
		setSearch(e.target.value);
	};

	let results = [];

	if (!search) {
		results = rows;
	} else {
		results = rows.filter((row) =>
			(row.name + " " + row.lastname + " " + row.type)
				.toLowerCase()
				.includes(search.toLowerCase().trim())
		);
	}

	//Paginacion

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
			<Box sx={{ mb: 5 }}>
				<Typography variant='h6' componet='div'>
					Solicitudes de Ingreso
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
					/>
				</FormControl>
			</Box>
			<TableContainer
				component={Paper}
				sx={{ border: "1px solid black" }}
			>
				<Table sx={{ minWidth: 650 }} size='small'>
					<TableHead>
						<TableRow>
							<TableCell align='left'>Nombre</TableCell>

							<TableCell align='left'>Cargo</TableCell>
							<TableCell align='center'>
								Fecha Solicitud
							</TableCell>
							<TableCell align='center'>Acciones</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{results >= 0 ? (
							<TableRow>
								<TableCell colSpan={5} align='center'>
									No se encontro ninguna información...
								</TableCell>
							</TableRow>
						) : (
							results
								.slice(
									page * rowsPerPage,
									page * rowsPerPage + rowsPerPage
								)
								.map((row, index) => (
									<TableRow
										key={index}
										sx={{
											"&:last-child td, &:last-child th":
												{
													border: 0,
												},
										}}
									>
										<TableCell align='left'>
											{row.name} {row.lastname}
										</TableCell>
										<TableCell align='left'>
											{row.type}
										</TableCell>

										{/* {row.documents.map((document) => (
											<TableCell align='left'>
												<Button
													variant='contained'
													size='small'
													startIcon={<DownloadIcon />}
													componet='a'
													href={document.url}
												>
													Descargar
												</Button>
											</TableCell>
										))} */}

										{/* <TableCell align='center'>
											{row.status === 3 && (
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
										</TableCell> */}

										<TableCell align='center'>
											{row.date}
										</TableCell>

										<TableCell align='right'>
											<Grid
												container
												spacing={1}
												sx={{
													display: "flex",
													justifyContent:
														"space-between",
												}}
											>
												<Grid item sm={4}>
													<Link
														to={`/dashboard/user/profile/${row.id}`}
													>
														<Button
															variant='contained'
															size='small'
															fullWidth
														>
															VER
														</Button>
													</Link>
												</Grid>

												<Grid item sm={4}>
													<Button
														variant='contained'
														size='small'
														fullWidth
													>
														APROBAR
													</Button>
												</Grid>

												<Grid item sm={4}>
													<Button
														variant='contained'
														size='small'
														fullWidth
														color='error'
													>
														RECHAZAR
													</Button>
												</Grid>
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
