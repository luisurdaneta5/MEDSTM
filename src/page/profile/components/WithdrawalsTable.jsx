import React, { useState } from "react";
import {
	Box,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TablePagination,
	TableRow,
	Tooltip,
	Button,
} from "@mui/material";

export const WithdrawalsTable = ({ withdrawals }) => {
	function createData(amount, wallet, date) {
		return { amount, wallet, date };
	}

	const withdrawalss = withdrawals.map((withdrawal) =>
		createData(withdrawal.amount, withdrawal.wallet, withdrawal.date)
	);

	const [rowsPerPageRefer, setRowsPerPageRefer] = useState(5);
	const [pageRefer, setPageRefer] = useState(0);

	const handleChangePageRefer = (e, newPage) => {
		setPageRefer(newPage);
	};

	const handleChangeRowsPerPageRefer = (e) => {
		setRowsPerPageRefer(parseInt(e.target.value, 10));
		setPageRefer(0);
	};
	return (
		<Box>
			<TableContainer sx={{ mt: 1, border: "1px solid black" }}>
				<Table size='small'>
					<TableHead>
						<TableRow>
							<TableCell align='left'>Monto</TableCell>
							<TableCell align='left'>Wallet</TableCell>
							<TableCell align='left'>Fecha</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{withdrawalss >= 0 ? (
							<TableRow>
								<TableCell colSpan={3} align='center'>
									Este usuario no posee Retiros
								</TableCell>
							</TableRow>
						) : (
							withdrawalss.map((withdrawal, index) => (
								<TableRow key={index}>
									<TableCell align='left'>
										{withdrawal.amount}
									</TableCell>
									<TableCell align='left'>
										{withdrawal.wallet}
									</TableCell>
									<TableCell align='left'>
										{withdrawal.date}
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
				count={withdrawalss.length}
				rowsPerPage={rowsPerPageRefer}
				page={pageRefer}
				onPageChange={handleChangePageRefer}
				onRowsPerPageChange={handleChangeRowsPerPageRefer}
				labelDisplayedRows={({ from, to, count }) => {
					return "" + from + "-" + to + " a " + count;
				}}
				labelRowsPerPage='Filas por página'
			/>
		</Box>
	);
};
