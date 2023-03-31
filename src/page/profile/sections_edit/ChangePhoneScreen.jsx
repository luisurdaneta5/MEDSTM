import {
	Box,
	Container,
	Grid,
	Typography,
	Button,
	TextField,
} from "@mui/material";

import "../styles.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GeneralLayout } from "../../../layouts/GeneralLayout";
import { useForm } from "../../../hooks/useForm";
import { Api } from "../../../api";
import { toast } from "react-toastify";

export const ChangePhoneScreen = () => {
	const { p, id } = useParams();

	const navigate = useNavigate();

	const [formValues, handleInputChange] = useForm({
		phone: p,
	});

	const { phone } = formValues;

	const handleSubmit = (e) => {
		e.preventDefault();

		Api.put("/user/profile/changePhone", {
			id,
			phone,
		})
			.then((res) => {
				toast.success(res.data.message, {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});

				navigate("/profile/edit");
			})
			.catch((err) => console.log(err));
	};

	return (
		<GeneralLayout>
			<Container maxWidth='sm'>
				<form onSubmit={handleSubmit}>
					<Grid container spacing={2} sx={{ mt: 2 }}>
						<Grid item xs={12}>
							<Typography
								sx={{
									fontSize: "25px",
									mt: 2,
								}}
							>
								Cambiar número de teléfono móvil
							</Typography>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									border: "1px solid #e0e0e0",
									borderRadius: "5px",
									p: 2,
									mt: 2,
								}}
							>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
									}}
								>
									<Box>
										<Typography
											sx={{
												fontSize: "13px",
											}}
										>
											Al inscribir un número de celular,
											aceptas recibir notificaciones de
											seguridad automatizadas a través de
											mensaje de texto de MEDSTM. Pueden
											aplicarse tarifas por mensajes y
											datos. La frecuencia de los mensajes
											varía.
										</Typography>
									</Box>
									<Box
										sx={{
											mt: 2,
										}}
									>
										<Typography
											sx={{
												fontSize: "15px",
												fontWeight: "bold",
											}}
										>
											Nuevo Movil
										</Typography>
										<TextField
											id=''
											label=''
											value={phone}
											size='small'
											name='phone'
											onChange={handleInputChange}
										/>
									</Box>
									<Box
										sx={{
											mt: 3,
										}}
									>
										<Button
											variant='contained'
											size='small'
											color='secondary'
											sx={{
												color: "white",
											}}
											type='submit'
										>
											Guardar Cambios
										</Button>
									</Box>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</form>
			</Container>
		</GeneralLayout>
	);
};
