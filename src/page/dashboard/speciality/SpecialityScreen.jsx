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
	Tooltip,
	Fab,
} from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect } from "react";
import { Api } from "../../../api";
import moment from "moment";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setDeleteSpeciality } from "../../../store/slices/dashboard";

moment.locale("es-mx");

function createData(id, name) {
	return { id, name };
}

export const SpecialityScreen = () => {
	const [specialities, setSpecialities] = useState([]);

	const dispatch = useDispatch();

	useEffect(() => {
		Api.get("/specialities/get")
			.then((res) => {
				setSpecialities(res.data.specialities);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const rows = specialities.map((speciality) => {
		return createData(speciality.id, speciality.name);
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
			row.name.toLowerCase().includes(search.toLowerCase().trim())
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

	const handleDelete = (id) => {
		dispatch(setDeleteSpeciality(id));
	};

	return (
		<DashboardLayout>
			<Tooltip title='Crear Nuevo'>
				<Link to='/dashboard/speciality/create'>
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
				</Link>
			</Tooltip>
			<Box sx={{ mb: 5 }}>
				<Typography variant='h6' componet='div'>
					Especialidades
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
							<TableCell align='left'>Especialidad</TableCell>
							<TableCell align='left'></TableCell>
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
											{row.name}
										</TableCell>

										<TableCell align='right'>
											<Grid
												container
												spacing={1}
												sx={{
													display: "flex",
													justifyContent: "flex-end",
												}}
											>
												<Grid item sm={2}>
													<Link
														to={`/dashboard/speciality/edit/${row.id}`}
													>
														<Button
															variant='contained'
															size='small'
															fullWidth
														>
															editar
														</Button>
													</Link>
												</Grid>

												<Grid item sm={2}>
													<Button
														variant='contained'
														size='small'
														fullWidth
														color='error'
														onClick={() => {
															handleDelete(
																row.id
															);
														}}
													>
														Eliminar
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
				count={200}
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
