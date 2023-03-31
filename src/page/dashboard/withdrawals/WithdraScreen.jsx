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
import { Api } from "../../../api";
import moment from "moment";

function createData(user, amount, wallet, date) {
	return { user, amount, wallet, date };
}

export const WithdraScreen = () => {
	// const rows = [createData("Luis Urdaneta", "3.00", "TSEDSCCDRTSDGTYSDFSYsdewffd", Date.now())];

	const [withdrawals, setWithdrawals] = useState([]);

	useEffect(() => {
		Api.get("/withdrawals/get")
			.then((res) => {
				setWithdrawals(res.data.withdrawals);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const rows = withdrawals.map((withdrawal) => {
		return createData(withdrawal.user.name + " " + withdrawal.user.lastname, withdrawal.amount, withdrawal.wallet, withdrawal.createdAt, withdrawal.id);
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
		results = rows.filter((row) => (row.title + " " + row.date).toLowerCase().includes(search.toLowerCase().trim()));
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

	return (
		<DashboardLayout>
			<Box sx={{ mb: 5 }}>
				<Typography variant='h6' componet='div'>
					Retiros
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
							<TableCell align='left'>Usuario</TableCell>
							<TableCell align='left'>Monto</TableCell>
							<TableCell align='left'>Billetera</TableCell>
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
										$ {row.amount}
									</TableCell>
									<TableCell component='th' scope='row'>
										{row.wallet}
									</TableCell>

									<TableCell component='th' scope='row'>
										{moment(row.date).format("LLL")}
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
											<Grid item sm={6}>
												<Button variant='contained' size='small' fullWidth>
													Pagado
												</Button>
											</Grid>

											<Grid item sm={6}>
												<Button variant='contained' size='small' fullWidth color='error'>
													Rechazado
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
