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
	Typography,
} from "@mui/material";
import moment from "moment";
import usdt from "../../../assets/usdt.png";

export const WithdrawalsTable = ({ withdrawals }) => {
	function createData(amount, wallet, date) {
		return { amount, wallet, date };
	}

	const withdrawalss = withdrawals.map((withdrawal) =>
		createData(withdrawal.amount, withdrawal.wallet, withdrawal.createdAt)
	);

	const [rowsPerPageWithdrawal, setRowsPerPageWithdrawal] = useState(5);
	const [pageWithdrawal, setPageWithdrawal] = useState(0);

	const handleChangePageWithdrawal = (e, newPage) => {
		setPageWithdrawal(newPage);
	};

	const handleChangeRowsPerPageWithdrawal = (e) => {
		setRowsPerPageWithdrawal(parseInt(e.target.value, 10));
		setPageWithdrawal(0);
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
									<TableCell
										align='left'
										sx={{
											display: "flex",
											alignItems: "center",
										}}
									>
										<Typography sx={{ mr: 1 }}>
											$ {withdrawal.amount.toFixed(2)}
										</Typography>
										<img src={usdt} alt='usdt' width={20} />
									</TableCell>
									<TableCell align='left'>
										{withdrawal.wallet}
									</TableCell>
									<TableCell align='left'>
										{moment().format(
											"DD/MM/YYYY",
											withdrawal.date
										)}
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
				rowsPerPage={rowsPerPageWithdrawal}
				page={pageWithdrawal}
				onPageChange={handleChangePageWithdrawal}
				onRowsPerPageChange={handleChangeRowsPerPageWithdrawal}
			/>
		</Box>
	);
};
