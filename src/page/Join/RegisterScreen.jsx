import { GeneralLayout } from "../../layouts/GeneralLayout";
import {
	Box,
	Container,
	Grid,
	InputLabel,
	TextField,
	Typography,
	Checkbox,
	Button,
	Input,
	Autocomplete,
} from "@mui/material";
import { countries } from "../../data/countries";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setRegister } from "../../store/slices/auth";

const initialState = {
	firstName: "",
	lastName: "",
	email: "",
	country: "",
	city: "",
	province: "",
	country_code: "",
	phone: "",
	file1: "",
	file2: "",
};

export const RegisterScreen = () => {
	const { user } = useParams();

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [formValues, handleInputChange] = useForm(initialState);
	const { firstName, lastName, email, city, province, phone } = formValues;

	const [country_value, setCountry_value] = useState({
		country: "",
		country_code: "",
	});
	const { country, country_code } = country_value;

	const [file1, setFile1] = useState();

	const handleFileChange1 = ({ target }) => {
		setFile1(target.files[0]);
	};

	const [file2, setFile2] = useState();

	const handleFileChange2 = ({ target }) => {
		setFile2(target.files[0]);
	};

	const [checked, setChecked] = useState(false);

	const handleCheckBoxChange = (event) => {
		setChecked(event.target.checked);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (checked) {
			if (user === "professional-healthcare") {
				if (file1 === undefined) {
					toast("Ingrese Curriculum", {
						type: "error",
						autoClose: 5000,
						position: "top-right",
						draggable: true,
					});

					if (file2 === undefined) {
						toast("Ingrese un Titulo Universitario", {
							type: "error",
							autoClose: 5000,
							position: "top-right",
							draggable: true,
						});
					}
				} else {
					dispatch(
						setRegister(
							user,
							firstName,
							lastName,
							email,
							country,
							city,
							province,
							country_code,
							phone,
							file1,
							file2
						)
					);
				}
			} else {
				dispatch(
					setRegister(
						user,
						firstName,
						lastName,
						email,
						country,
						city,
						province,
						country_code,
						phone
					)
				);
			}

			// navigate("/", {
			// 	replace: true,
			// });
		} else {
			toast("Porfavor, debe aceptar los terminos y condiciones", {
				type: "error",
				autoClose: 5000,
				position: "top-right",
				draggable: true,
			});
		}
	};
	return (
		<GeneralLayout>
			<Container maxWidth='lg' sx={{ mt: 4 }}>
				<Box sx={{ padding: 3, height: "auto" }}>
					<Box>
						<Typography
							sx={{
								fontSize: 18,
								textAlign: "center",
								fontweight: 800,
							}}
						>
							SOLICITUD DE REGISTRO
						</Typography>
					</Box>
					<form onSubmit={handleSubmit} encType='multipart/form-data'>
						<Grid container spacing={2} sx={{ mt: 3 }}>
							<Grid item lg={6}>
								<TextField
									id=''
									label='Nombre'
									name='firstName'
									value={firstName}
									size='small'
									fullWidth
									onChange={handleInputChange}
								/>
							</Grid>
							<Grid item lg={6}>
								<TextField
									id=''
									label='Apellido'
									name='lastName'
									value={lastName}
									size='small'
									fullWidth
									onChange={handleInputChange}
								/>
							</Grid>
							<Grid item lg={6}>
								<TextField
									id=''
									label='Correo Electronico'
									name='email'
									value={email}
									size='small'
									fullWidth
									placeholder='example@example.com'
									onChange={handleInputChange}
								/>
							</Grid>
							<Grid item lg={6}>
								<TextField
									id=''
									label='Telefono'
									name='phone'
									value={phone}
									size='small'
									fullWidth
									placeholder='+1 (555) 555-5555'
									onChange={handleInputChange}
								/>
							</Grid>
							<Grid item lg={4} sx={{ mt: 1 }}>
								<Autocomplete
									id='country-select-demo'
									options={countries}
									autoHighlight
									getOptionLabel={(option) => option.label}
									onChange={(event, value) =>
										setCountry_value({
											country: value.label,
											country_code: value.code,
										})
									}
									renderOption={(props, option) => (
										<Box
											component='li'
											sx={{
												"& > img": {
													mr: 2,
													flexShrink: 0,
												},
											}}
											{...props}
										>
											<img
												loading='lazy'
												width='20'
												src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
												srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
												alt=''
											/>
											{option.label}
										</Box>
									)}
									name='country'
									renderInput={(params) => (
										<TextField
											{...params}
											label='Pais'
											inputProps={{
												...params.inputProps,
												autoComplete: "new-password", // disable autocomplete and autofill
											}}
											size='small'
										/>
									)}
								/>
							</Grid>

							<Grid item lg={4} sx={{ mt: 1 }}>
								<TextField
									id=''
									label='Provincia/Estado'
									value={province}
									name='province'
									size='small'
									fullWidth
									placeholder=''
									onChange={handleInputChange}
								/>
							</Grid>
							<Grid item lg={4} sx={{ mt: 1 }}>
								<TextField
									id=''
									label='Ciudad/Municipio'
									value={city}
									name='city'
									size='small'
									fullWidth
									placeholder=''
									onChange={handleInputChange}
								/>
							</Grid>
							{user === "professional-healthcare" ? (
								<Grid container spacing={2} sx={{ mt: 1 }}>
									<Grid item lg={6}>
										<InputLabel
											sx={{
												textAlign: "center",
												mb: 2,
												fontWeight: "bold",
											}}
										>
											Curriculum
										</InputLabel>
										<Input
											type='file'
											className='dropzone'
											fullWidth
											disableUnderline={true}
											onChange={handleFileChange1}
											name='file1'
											required
										/>
									</Grid>

									<Grid item lg={6}>
										<InputLabel
											sx={{
												textAlign: "center",
												mb: 2,
												fontWeight: "bold",
											}}
										>
											Titulo Universitario
										</InputLabel>
										<Input
											type='file'
											className='dropzone'
											fullWidth
											disableUnderline={true}
											onChange={handleFileChange2}
											name='file2'
										/>
									</Grid>
								</Grid>
							) : null}

							<Grid item lg={12}>
								<Typography color='red' sx={{ fontSize: 13 }}>
									Nota: luego del registro se debe esperar un
									lapso de x para la revision de documentos
									enviados en dicho formulario, posterior
									recivira un corero con la aprobacion de los
									mismo
								</Typography>
							</Grid>
							<Grid item lg={12}>
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										textAlign: "center",
									}}
								>
									<Checkbox
										checked={checked}
										onChange={handleCheckBoxChange}
										name='terms'
									/>

									<Typography sx={{ fontSize: 15 }}>
										Acepto los terminos y condiciones{" "}
										<span style={{ color: "red" }}>
											(*)
										</span>
									</Typography>
								</Box>
							</Grid>
						</Grid>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<Button
								variant='contained'
								color='primary'
								sx={{ mt: 3 }}
								onClick={handleSubmit}
								type='submit'
							>
								Registrarte
							</Button>
						</Box>
					</form>
				</Box>
			</Container>
		</GeneralLayout>
	);
};
