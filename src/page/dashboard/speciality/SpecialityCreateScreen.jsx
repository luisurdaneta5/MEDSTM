import { DashboardLayout } from "../../../layouts/DashboardLayout";
import { Container, Box, TextField, Typography, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { setNewSpeciality } from "../../../store/slices/dashboard";

export const SpecialityCreateScreen = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [name, setName] = useState("");
	const [image, setImage] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(setNewSpeciality(name, image));
		navigate("/dashboard/speciality");
	};
	return (
		<DashboardLayout>
			<Container maxWidth='lg'>
				<Box sx={{ mb: 5 }}>
					<Typography variant='h6' componet='div'>
						Crear Nueva Especialidad
					</Typography>
				</Box>
				<form onSubmit={handleSubmit}>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
						}}
					>
						<label
							style={{
								fontWeight: "bold",
							}}
						>
							Especialidad:
						</label>
						<TextField
							id='outlined-basic'
							label=''
							size='small'
							autoComplete='off'
							name='name'
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</Box>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							mt: 2,
						}}
					>
						<label
							style={{
								fontWeight: "bold",
							}}
						>
							Imagen:
						</label>
						<input
							type='file'
							className='dropzone'
							name='img'
							accept='image/png,image/jpeg'
							onChange={(e) => setImage(e.target.files[0])}
						/>
					</Box>
					<Box
						sx={{
							display: "flex",
							justifyContent: "flex-end",
							mt: 3,
						}}
					>
						<Button
							variant='contained'
							color='primary'
							type='submit'
						>
							Enviar
						</Button>

						<Button
							variant='contained'
							color='error'
							sx={{ ml: 2 }}
						>
							cancelar
						</Button>
					</Box>
				</form>
			</Container>
		</DashboardLayout>
	);
};
