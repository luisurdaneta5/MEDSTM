import { DashboardLayout } from "../../../layouts/DashboardLayout";
import { Container, Box, TextField, Typography, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Api } from "../../../api";
import { setUpdateSpeciality } from "../../../store/slices/dashboard";

export const SpecialityEditScreen = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [name, setName] = useState("");
	const [image, setImage] = useState();
	const [swicth, setSwicth] = useState(false);
	const handleSwicth = () => {
		setSwicth(!swicth);
	};

	useEffect(() => {
		Api.get("/specialities", {
			params: {
				id,
			},
		})
			.then((res) => {
				setName(res.data.speciality.name);
				setImage(res.data.speciality.img);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(setUpdateSpeciality(id, name, image));
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

					<Box sx={{ mt: 2 }}>
						{swicth ? (
							<input
								type='file'
								className='dropzone'
								name='img'
								accept='image/png,image/jpeg'
								onChange={(e) => setImage(e.target.files[0])}
							/>
						) : (
							<Box
								onClick={handleSwicth}
								component='div'
								className='img-container'
							>
								<Box component='p' className='div-text'>
									Click para cambiar la imagen
								</Box>
								<img
									src={
										"https://medstmsaludesvida.com/wp-content/uploads/2022/05/MEDS-TM-Administradores.png"
									}
									width='100%'
									alt='medstm'
								/>
							</Box>
						)}
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
