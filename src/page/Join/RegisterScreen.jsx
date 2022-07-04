import { GeneralLayout } from "../../layouts/GeneralLayout";
import {
	Box,
	Container,
	FormControl,
	Grid,
	InputLabel,
	Select,
	TextField,
	Typography,
	MenuItem,
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

	const [country_value, setCountry_value] = useState({
		country: "",
		country_code: "",
	});

	const { country, country_code } = country_value;

	const { firstName, lastName, email, city, province, phone, file1, file2 } =
		formValues;

	const [checked, setChecked] = useState(false);

	const handleCheckBoxChange = (event) => {
		setChecked(event.target.checked);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (checked) {
			dispatch(
				setRegister(
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
			navigate("/", {
				replace: true,
			});
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
					<form onSubmit={handleSubmit}>
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
								{/* <FormControl fullWidth>
									<InputLabel id='demo-simple-select-label'>
										Pais
									</InputLabel>
									<Select
										labelId='demo-simple-select-label'
										id='demo-simple-select'
										value={country}
										name='country'
										label='Pais'
										size='small'
										onChange={handleInputChange}
									>
										{countries.map((country) => (
											<MenuItem
												key={country.code}
												value={country.code}
											>
												{country.country}
											</MenuItem>
										))}
									</Select>
								</FormControl> */}

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
							<input
								type='hidden'
								value={user}
								name='type_user'
							/>

							<Grid item lg={6}>
								<InputLabel
									sx={{
										textAlign: "center",
										mb: 2,
										mt: 1,
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
									value={file1}
									onChange={handleInputChange}
									name='file1'
								/>
							</Grid>
							<Grid item lg={6}>
								<InputLabel
									sx={{
										textAlign: "center",
										mb: 2,
										mt: 1,
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
									value={file2}
									onChange={handleInputChange}
									name='file2'
								/>
							</Grid>
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
