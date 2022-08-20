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
	Typography,
} from "@mui/material";

export const ReferralsTable = ({ referrals }) => {
	function createData(name, lastname, plan) {
		return { name, lastname, plan };
	}

	// const refers = [createData("Luis", "Urdaneta", "Gratis")];

	const refers = referrals.map((refer) =>
		createData(refer.user.name, refer.user.lastname, refer.user.plan)
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
			<Box
				sx={{
					display: "flex",

					mt: 2,
				}}
			>
				<Typography color='primary'>MIS REFERIDOS</Typography>
			</Box>
			<TableContainer sx={{ mt: 1, border: "1px solid black" }}>
				<Table size='small'>
					<TableHead>
						<TableRow>
							<TableCell align='left'>Referido</TableCell>
							<TableCell align='left'>Plan</TableCell>
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
