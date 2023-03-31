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
	Chip,
} from "@mui/material";

import { useState, useEffect } from "react";

import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { Api } from "../../../api";
import moment from "moment";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getPayments } from "../../../store/slices/ui/getPayments";

function createData(user, username, amount, transaccion, plan, date, userId, paymentId, status) {
	return { user, username, amount, transaccion, plan, date, userId, paymentId, status };
}

export const PaymentScreen = () => {
	const [payments, setPayments] = useState([]);

	const rows = payments.map((payment) => {
		return createData(
			payment.user.name + " " + payment.user.lastname,
			payment.binanceUser,
			payment.amount,
			payment.transactionId,
			payment.plan,
			payment.createdAt,
			payment.user.id,
			payment.id,
			payment.status
		);
	});

	useEffect(() => {
		getPayments(setPayments);
	}, []);

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
		results = rows.filter((row) => (row.user + " " + row.username + " " + row.amount + " " + row.plan + " " + row.date).toLowerCase().includes(search.toLowerCase().trim()));
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

	const handleSetPaymentSucces = (userId, date, plan, paymentId) => {
		Swal.fire({
			title: "Estas seguro de aceptar el pago?",
			showCancelButton: true,
			confirmButtonText: "Si, seguro",
			confirmButtonColor: "#018f98",
		}).then((result) => {
			if (result.isConfirmed) {
				Api.put("/payments/setPaymentSucces", {
					userId,
					date,
					plan,
					paymentId,
				})
					.then((res) => {
						toast.success(res.data.message);
					})
					.catch((err) => {
						console.log(err);
					});
			}
		});
	};
	return (
		<DashboardLayout>
			<Box sx={{ mb: 5 }}>
				<Typography variant='h6' componet='div'>
					Pagos y/o Cambios de Plan
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
				<Table sx={{ minWidth: 650 }} size='small'>
					<TableHead>
						<TableRow>
							<TableCell align='left'>Nombre</TableCell>
							<TableCell align='left'>Usuario Binance</TableCell>
							<TableCell align='left'>Monto</TableCell>
							<TableCell align='left'>Transaccion</TableCell>
							<TableCell align='left'>Plan</TableCell>
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
							results.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
								<TableRow
									key={index}
									sx={{
										"&:last-child td, &:last-child th": {
											border: 0,
										},
									}}
								>
									<TableCell>{row.user}</TableCell>
									<TableCell component='th' scope='row'>
										{row.username}
									</TableCell>
									<TableCell component='th' scope='row'>
										$ {row.amount}
									</TableCell>

									<TableCell component='th' scope='row'>
										{row.transaccion}
									</TableCell>
									<TableCell component='th' scope='row'>
										{row.plan}
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

										{row.plan === "Basico" && (
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

									<TableCell component='th' scope='row'>
										{moment(row.date).format("LLL")}
									</TableCell>

									<TableCell align='right'>
										{row.status == 0 && (
											<Grid
												container
												spacing={1}
												sx={{
													display: "flex",
													justifyContent: "space-between",
												}}
											>
												<Grid item sm={12}>
													<Link to={`/dashboard/payments/details/${row.paymentId}`}>
														<Button variant='contained' size='small' fullWidth>
															Ver detalles
														</Button>
													</Link>
												</Grid>
											</Grid>
										)}
										{row.status == 1 && <Chip label='Pago Aceptado' color='success' variant='outlined' />}
										{row.status == 2 && <Chip label='Pago Rechazado' color='error' variant='outlined' />}
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
