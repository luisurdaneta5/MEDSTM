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

export const AddressTable = ({ addresse }) => {
	function createData(name) {
		return { name };
	}

	const addresses = addresse.map((address) => createData(address.address));
	// const refers = [
	// 	createData("John", "Doe", "Gratis", "3.5$"),
	// 	createData("John", "Doe", "Basic", "12345"),
	// 	createData("John", "Doe", "Diamante", "12345"),
	// 	createData("John", "Doe", "Esmeralda", "12345"),
	// 	createData("John", "Doe", "Oro", "12345"),
	// ];
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
							<TableCell align='left'>Direcciones</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{addresses >= 0 ? (
							<TableRow>
								<TableCell colSpan={3} align='center'>
									Este usuario no posee Direcciones
								</TableCell>
							</TableRow>
						) : (
							addresses.map((address, index) => (
								<TableRow key={index}>
									<TableCell align='left'>
										{address.name}
									</TableCell>

									<TableCell align='right'>
										<Button
											variant='contained'
											size='small'
											color='error'
										>
											<i className='fas fa-trash'></i>
										</Button>
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
				count={addresses.length}
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
