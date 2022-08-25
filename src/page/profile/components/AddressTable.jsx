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
	Modal,
	Typography,
	TextField,
} from "@mui/material";
import { useForm } from "../../../hooks/useForm";
import Api from "../../../api/Api";
import { toast } from "react-toastify";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

export const AddressTable = ({ addresse }) => {
	const uid = localStorage.getItem("id");
	const [open, setOpen] = useState(false);
	const [formValues, handleInputChange] = useForm();

	const { address } = formValues;
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

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!address) {
			toast.error("Porfavor ingrese una Direccion Valida", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		} else {
			Api.post("/address/create", { uid: uid, address: address })
				.then((res) => {
					setOpen(false);
					toast.success(res.data.message, {
						position: "top-right",
						autoClose: 2000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};
	return (
		<Box>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<form onSubmit={handleSubmit}>
					<Box sx={style}>
						<TextField
							id=''
							label=''
							value={address}
							onChange={handleInputChange}
							name='address'
							placeholder='Ingrese Direccion'
							size='small'
							fullWidth
						/>
						<Box
							sx={{
								display: "flex",
								mt: 2,
								justifyContent: "flex-end",
							}}
						>
							<Button
								variant='contained'
								color='primary'
								size='small'
								type='submit'
							>
								agregar
							</Button>
						</Box>
					</Box>
				</form>
			</Modal>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					mt: 0,
				}}
			>
				<Typography color='primary'>MIS DIRECCIONES</Typography>
				<Button variant='contained' size='small' onClick={handleOpen}>
					Agregar Direccion
				</Button>
			</Box>
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
