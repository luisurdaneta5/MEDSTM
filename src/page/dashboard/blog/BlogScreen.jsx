import React from "react";
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
import { Link, useNavigate } from "react-router-dom";
import { Api } from "../../../api";
import moment from "moment";

import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { setDeleteBlog } from "../../../store/slices/dashboard";

function createData(id, image, title, date) {
	return { id, image, title, date };
}

export const BlogScreen = () => {
	const dispatch = useDispatch();

	const navigate = useNavigate();
	const [items, setItems] = useState([]);

	useEffect(() => {
		Api.get("/blog/get_notices")
			.then((res) => {
				setItems(res.data.notices);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const rows = items.map((item) => {
		return createData(item.id, item.image, item.title, item.createdAt);
	});
	// const rows = [
	// 	createData(
	// 		"https://medstmsaludesvida.com/wp-content/uploads/2022/05/MEDS-TM-Administradores.png",
	// 		"MEDSTM",
	// 		Date.now()
	// 	),
	// ];

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
			(row.title + " " + row.date)
				.toLowerCase()
				.includes(search.toLowerCase().trim())
		);
	}

	const handleViewSearch = () => {
		setIcon(true);
	};

	const handleChangePage = (e, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (e) => {
		setRowsPerPage(parseInt(e.target.value, 10));
		setPage(0);
	};

	const handleDelete = (id) => {
		Swal.fire({
			title: "¿Estas seguro?",
			text: "Una vez eliminado, no podras recuperarlo",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Si, eliminarlo",
			cancelButtonText: "Cancelar",
		}).then((result) => {
			if (result.isConfirmed) {
				dispatch(setDeleteBlog(id));
				navigate("/dashboard/blogs");
			}
		});
	};
	return (
		<DashboardLayout>
			<Link to='/dashboard/blog/create'>
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
					Blog
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
			<TableContainer
				component={Paper}
				sx={{ border: "1px solid black" }}
			>
				<Table sx={{ minWidth: 650 }} size='small'>
					<TableHead>
						<TableRow>
							<TableCell align='left'>Imagen</TableCell>
							<TableCell align='left'>Titulo</TableCell>
							<TableCell align='left'>Fecha</TableCell>
							<TableCell align='left'></TableCell>
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
										<TableCell>
											<img
												src={row.image}
												alt=''
												width='100px'
											/>
										</TableCell>
										<TableCell component='th' scope='row'>
											{row.title}
										</TableCell>
										<TableCell component='th' scope='row'>
											{moment(row.date).format(
												"DD/MM/YYYY"
											)}
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
												<Grid item sm={6}>
													<Link
														to={`/dashboard/blog/edit/${row.id}`}
													>
														<Button
															variant='contained'
															size='small'
															fullWidth
														>
															Editar
														</Button>
													</Link>
												</Grid>

												<Grid item sm={6}>
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
