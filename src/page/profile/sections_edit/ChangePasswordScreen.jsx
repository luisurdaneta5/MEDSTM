import {
	Box,
	Container,
	Grid,
	Typography,
	Button,
	TextField,
	FormControl,
	OutlinedInput,
	InputAdornment,
	IconButton,
} from "@mui/material";

import "../styles.css";
import { Link, useParams } from "react-router-dom";
import { GeneralLayout } from "../../../layouts/GeneralLayout";
import { Api } from "../../../api";
import { useForm } from "../../../hooks/useForm";
import { toast } from "react-toastify";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

export const ChangePasswordScreen = () => {
	const { id } = useParams();

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	// const [formValues, handleInputChange] = useForm();

	// const { oldPassword, newPassword, confirmPassword } = formValues;

	const [values, setValues] = useState({
		oldPassword: "",
		newPassword: "",
		confirmPassword: "",
		showOldPassword: false,
		showNewPassword: false,
		showConfirmPassword: false,
	});

	const { oldPassword, newPassword, confirmPassword } = values;

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleClickShowOldPassword = () => {
		setValues({
			...values,
			showOldPassword: !values.showOldPassword,
		});
	};

	const handleClickShowNewPassword = () => {
		setValues({
			...values,
			showNewPassword: !values.showNewPassword,
		});
	};

	const handleClickShowConfirmPassword = () => {
		setValues({
			...values,
			showConfirmPassword: !values.showConfirmPassword,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (newPassword === confirmPassword) {
			Api.put("/user/change-password", {
				id,
				oldPassword,
				newPassword,
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
		} else {
			toast.error("Las contraseñas no coinciden", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
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
								Cambiar contraseña
							</Typography>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									border: "1px solid #e0e0e0",
									borderRadius: "5px",
									p: 2,
									mt: 1,
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
											Utiliza el siguiente formulario para
											cambiar la contraseña de tu cuenta
											de MEDSTM.
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
											Contraseña actual:
										</Typography>
										<FormControl sx={{}} size='small'>
											<OutlinedInput
												type={
													values.showOldPassword
														? "text"
														: "password"
												}
												value={oldPassword}
												onChange={handleChange(
													"oldPassword"
												)}
												endAdornment={
													<InputAdornment position='end'>
														<IconButton
															aria-label='toggle password visibility'
															onClick={
																handleClickShowOldPassword
															}
															onMouseDown={
																handleMouseDownPassword
															}
															edge='end'
														>
															{values.showOldPassword ? (
																<VisibilityOff />
															) : (
																<Visibility />
															)}
														</IconButton>
													</InputAdornment>
												}
												placeholder='**********'
											/>
										</FormControl>
									</Box>
									<Box
										sx={{
											mt: 3,
										}}
									>
										<Typography
											sx={{
												fontSize: "15px",
												fontWeight: "bold",
											}}
										>
											Nueva contraseña:
										</Typography>
										<FormControl sx={{}} size='small'>
											<OutlinedInput
												type={
													values.showNewPassword
														? "text"
														: "password"
												}
												value={newPassword}
												onChange={handleChange(
													"newPassword"
												)}
												endAdornment={
													<InputAdornment position='end'>
														<IconButton
															aria-label='toggle password visibility'
															onClick={
																handleClickShowNewPassword
															}
															onMouseDown={
																handleMouseDownPassword
															}
															edge='end'
														>
															{values.showNewPassword ? (
																<VisibilityOff />
															) : (
																<Visibility />
															)}
														</IconButton>
													</InputAdornment>
												}
												placeholder='**********'
											/>
										</FormControl>
									</Box>
									<Box
										sx={{
											mt: 3,
										}}
									>
										<Typography
											sx={{
												fontSize: "15px",
												fontWeight: "bold",
											}}
										>
											Introduce tu nueva contraseña otra
											vez:
										</Typography>
										<FormControl sx={{}} size='small'>
											<OutlinedInput
												type={
													values.showConfirmPassword
														? "text"
														: "password"
												}
												value={confirmPassword}
												onChange={handleChange(
													"confirmPassword"
												)}
												endAdornment={
													<InputAdornment position='end'>
														<IconButton
															aria-label='toggle password visibility'
															onClick={
																handleClickShowConfirmPassword
															}
															onMouseDown={
																handleMouseDownPassword
															}
															edge='end'
														>
															{values.showConfirmPassword ? (
																<VisibilityOff />
															) : (
																<Visibility />
															)}
														</IconButton>
													</InputAdornment>
												}
												placeholder='**********'
											/>
										</FormControl>
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
