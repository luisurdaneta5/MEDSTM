import {
	Box,
	Container,
	Grid,
	Typography,
	Button,
	TextField,
} from "@mui/material";

import "../styles.css";
import { useNavigate, useParams } from "react-router-dom";
import { GeneralLayout } from "../../../layouts/GeneralLayout";
import { Api } from "../../../api";
import { useForm } from "../../../hooks/useForm";
import { toast } from "react-toastify";

export const ChangeEmailScreen = () => {
	const { email, id } = useParams();

	const navigate = useNavigate();

	const [formValues, handleInputChange] = useForm({
		correo: email,
	});

	const { correo } = formValues;

	const handleSubmit = (e) => {
		e.preventDefault();

		Api.put("/user/profile/changeEmail", {
			email: correo,
			id,
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
			.catch((err) => {
				toast.error(err.response.data.message, {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			});
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
								Modifica tu dirección de correo electrónico
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
											Dirección de correo electrónico
											actual:
											<br />
											luis.urdaneta488@gmail.com
											<br />
											<br />
											Escribe a continuación la nueva
											dirección de correo electrónico con
											la que deseas asociar tu cuenta.
											Enviaremos un código de verificación
											a esa dirección.
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
											Nueva dirección de correo
											electrónico
										</Typography>
										<TextField
											id=''
											label=''
											value={correo}
											name='correo'
											size='small'
											fullWidth
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
											fullWidth
											color='secondary'
											sx={{
												color: "white",
											}}
											type='submit'
										>
											Continuar
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
