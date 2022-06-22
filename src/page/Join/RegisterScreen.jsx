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
} from "@mui/material";
import { countries } from "../../data/countries";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { toast } from "react-toastify";

const initialState = {
	firstName: "",
	lastName: "",
	email: "",
	country: "",
	city: "",
	province: "",
	country_code: "",
	phone: "",
};
export const RegisterScreen = () => {
	const { user } = useParams();

	const navigate = useNavigate();

	const [formValues, handleInputChange] = useForm(initialState);

	const {
		firstName,
		lastName,
		email,
		country,
		city,
		province,
		country_code,
		phone,
	} = formValues;

	const [checked, setChecked] = useState(false);

	const handleCheckBoxChange = (event) => {
		setChecked(event.target.checked);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (checked) {
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
							<Grid item lg={4}>
								<FormControl fullWidth>
									<InputLabel
										id='demo-simple-select-label'
										sx={{ mt: -1 }}
									>
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
								</FormControl>
							</Grid>

							<Grid item lg={4}>
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
							<Grid item lg={4}>
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
