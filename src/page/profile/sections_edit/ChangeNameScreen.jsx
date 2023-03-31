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

export const ChangeNameScreen = () => {
	const navigate = useNavigate();
	const { n, lname, id } = useParams();

	const [formValues, handleInputChange] = useForm({
		name: n,
		lastname: lname,
	});

	const { name, lastname } = formValues;

	const handleSubmit = (e) => {
		e.preventDefault();

		Api.put("/user/profile/changeName", {
			id,
			name: name,
			lastname: lastname,
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
								Cambiar mi Nombre
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
											Si quieres cambiar el nombre
											asociado a tu cuenta de cliente de
											MEDSTM, puedes hacerlo a
											continuación. Asegúrate de hacer
											clic en el botón Guardar cambios
											cuando hayas terminado.
										</Typography>
									</Box>

									<Grid container spacing={2}>
										<Grid item lg={6}>
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
													Nombre:
												</Typography>
												<TextField
													id=''
													label=''
													value={name}
													size='small'
													fullWidth
													name='name'
													onChange={handleInputChange}
												/>
											</Box>
										</Grid>
										<Grid item lg={6}>
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
													Apellido:
												</Typography>
												<TextField
													id=''
													label=''
													value={lastname}
													size='small'
													fullWidth
													name='lastname'
													onChange={handleInputChange}
												/>
											</Box>
										</Grid>
									</Grid>

									<Box
										sx={{
											mt: 3,
										}}
									>
										<Button
											type='submit'
											variant='contained'
											size='small'
											color='secondary'
											sx={{
												color: "white",
											}}
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
