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
	Modal,
	TextField,
	Select,
	FormControl,
	InputLabel,
	MenuItem,
} from "@mui/material";
import { useEffect } from "react";
import { Api } from "../../../api";
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

export const SpecialitiesTable = ({ my_specialities }) => {
	const uid = localStorage.getItem("id");
	const [open, setOpen] = useState(false);
	const [speciality, setSpeciality] = useState("");

	const [data, setData] = useState([]);

	useEffect(() => {
		Api.get("/specialities")
			.then((res) => {
				setData(res.data.specialities);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const handleChange = (event) => {
		setSpeciality(event.target.value);
	};

	function createData(name) {
		return { name };
	}

	const specialities = my_specialities.map((speciality) =>
		createData(speciality.speciality)
	);

	const [rowsPerPageSpeciality, setRowsPerPageSpeciality] = useState(5);
	const [pageSpeciality, setPageSpeciality] = useState(0);

	const handleChangePageSpeciality = (e, newPage) => {
		setPageSpeciality(newPage);
	};

	const handleChangeRowsPerPageSpeciality = (e) => {
		setRowsPerPageSpeciality(parseInt(e.target.value, 10));
		setPageSpeciality(0);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		Api.post("/specialities/setSpecialityUser", {
			uid: uid,
			speciality: speciality,
		})
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
				toast.error(err.response.data.message, {
					position: "top-right",
					autoClose: 2000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			});
	};
	return (
		<Box>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>
					<form onSubmit={handleSubmit}>
						<FormControl fullWidth size='small'>
							<InputLabel id='demo-simple-select-label'>
								Especialidades
							</InputLabel>
							<Select
								labelId='demo-simple-select-label'
								id='demo-simple-select'
								value={speciality}
								label='Especialidades'
								onChange={handleChange}
							>
								{data.map((item) => (
									<MenuItem key={item.id} value={item.name}>
										{item.name}
									</MenuItem>
								))}
							</Select>
						</FormControl>
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
					</form>
				</Box>
			</Modal>

			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					mt: 1,
				}}
			>
				<Typography color='primary'>ESPECIALIDADES</Typography>
				<Button variant='contained' size='small' onClick={handleOpen}>
					Agregar Especialidad
				</Button>
			</Box>
			<TableContainer sx={{ mt: 1, border: "1px solid black" }}>
				<Table size='small'>
					<TableHead>
						<TableRow>
							<TableCell align='left'>Especialidades</TableCell>
							<TableCell align='left'></TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{specialities >= 0 ? (
							<TableRow>
								<TableCell colSpan={3} align='center'>
									Este usuario no posee Especialidades
								</TableCell>
							</TableRow>
						) : (
							specialities.map((speciality, index) => (
								<TableRow key={index}>
									<TableCell align='left'>
										{speciality.name}
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
				count={specialities.length}
				rowsPerPage={rowsPerPageSpeciality}
				page={pageSpeciality}
				onPageChange={handleChangePageSpeciality}
				onRowsPerPageChange={handleChangeRowsPerPageSpeciality}
				labelDisplayedRows={({ from, to, count }) => {
					return "" + from + "-" + to + " a " + count;
				}}
				labelRowsPerPage='Filas por página'
			/>
		</Box>
	);
};
