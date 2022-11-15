import { DashboardLayout } from "../../../layouts/DashboardLayout";
import {
	Box,
	Container,
	TextField,
	Typography,
	Grid,
	Autocomplete,
	InputAdornment,
	Button,
	IconButton,
	FormControl,
	OutlinedInput,
	Avatar,
	Badge,
	Input,
	FormHelperText,
} from "@mui/material";
import { countries } from "../../../data/countries";
import { useState } from "react";
import { useForm } from "../../../hooks/useForm";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { styled } from "@mui/material/styles";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { ModalImg } from "./components/ModalImg";
import { toast } from "react-toastify";
import Api from "../../../api/Api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const SmallAvatar = styled(Avatar)(({ theme }) => ({
	width: 30,
	height: 30,
	border: `2px solid ${theme.palette.background.paper}`,
}));

export const MedsEditScreen = () => {
	const { id } = useParams();
	console.log(id);

	// useEffect(() => {
	// 	Api.get("/user/dashboard/editUser");
	// }, []);

	const [open, setOpen] = useState(false);
	const [avatar, setAvatar] = useState("");
	const handleOpen = () => setOpen(true);

	const navigate = useNavigate();

	const [errors, setErrors] = useState({
		name: false,
		lastname: false,
		email: false,
		phone: false,
		province: false,
		city: false,
		password: false,
		confirmPassword: false,
	});

	const [country_value, setCountry_value] = useState({
		country: "",
		country_code: "",
	});

	const { country, country_code } = country_value;

	const [values, setValues] = useState({
		password: "",
		confirmPassword: "",
		showPassword: false,
		showConfirmPassword: false,
	});

	const { password, confirmPassword, showPassword, showConfirmPassword } =
		values;

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword,
		});
	};

	const handleClickShowConfirmPassword = () => {
		setValues({
			...values,
			showConfirmPassword: !values.showConfirmPassword,
		});
	};
	const [formValues, handleInputChange] = useForm({
		name: "",
		lastname: "",
		email: "",
		phone: "",
		province: "",
		city: "",
	});

	const { name, lastname, email, phone, province, city } = formValues;

	const handleImgProfileSet = () => {
		setOpen(true);
	};

	const [preview, setPreview] = useState(null);

	const onClose = () => {
		setPreview(null);
	};

	const onCrop = (preview) => {
		setPreview(preview);
	};

	const onBeforeFileLoad = (elem) => {
		setAvatar(elem.target.files[0]);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<DashboardLayout>
			<Container maxWidth='lg'>
				<Box sx={{ mb: 5 }}>
					<Typography variant='h6' componet='div'>
						Editar Profesional de la Salud
					</Typography>
				</Box>

				<Box>
					<form onSubmit={handleSubmit}>
						<Grid container spacing={2}>
							<Grid
								item
								lg={12}
								sx={{
									display: "flex",
									justifyContent: "center",
									mb: 3,
								}}
							>
								<Badge
									overlap='circular'
									anchorOrigin={{
										vertical: "bottom",
										horizontal: "right",
										width: "100px",
										height: "100px",
									}}
									badgeContent={
										<IconButton
											onClick={handleImgProfileSet}
										>
											<CameraAltIcon></CameraAltIcon>
										</IconButton>
									}
								>
									<Avatar
										alt='Travis Howard'
										src={preview}
										sx={{
											width: "90px",
											height: "90px",
										}}
									/>
								</Badge>
								<ModalImg
									open={open}
									onClose={onClose}
									onCrop={onCrop}
									setOpen={setOpen}
									onBeforeFileLoad={onBeforeFileLoad}
								/>
							</Grid>
							<Grid item lg={6}>
								<Box>
									<TextField
										label='Nombre'
										size='small'
										variant='outlined'
										fullWidth
										name='name'
										value={name}
										onChange={handleInputChange}
										autoComplete='off'
										helperText={
											errors.name && "Campo requerido"
										}
										error={errors.name}
									/>
								</Box>
							</Grid>
							<Grid item lg={6}>
								<Box>
									<TextField
										label='Apellido'
										size='small'
										variant='outlined'
										fullWidth
										name='lastname'
										value={lastname}
										onChange={handleInputChange}
										autoComplete='off'
										helperText={
											errors.lastname && "Campo requerido"
										}
										error={errors.lastname}
									/>
								</Box>
							</Grid>
							<Grid item lg={6}>
								<Box>
									<TextField
										label='Correo Electronico'
										size='small'
										variant='outlined'
										fullWidth
										name='email'
										value={email}
										onChange={handleInputChange}
										autoComplete='off'
										helperText={
											errors.email && "Campo requerido"
										}
										error={errors.email}
									/>
								</Box>
							</Grid>
							<Grid item lg={6}>
								<Box>
									<TextField
										label='Telefono'
										size='small'
										variant='outlined'
										fullWidth
										name='phone'
										value={phone}
										onChange={handleInputChange}
										autoComplete='off'
										helperText={
											errors.phone && "Campo requerido"
										}
										error={errors.phone}
									/>
								</Box>
							</Grid>

							<Grid item lg={4}>
								<Box>
									<Autocomplete
										error
										id='country-select-demo'
										options={countries}
										autoHighlight
										getOptionLabel={(option) =>
											option.label
										}
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
													autoComplete:
														"new-password", // disable autocomplete and autofill
												}}
												size='small'
											/>
										)}
									/>
								</Box>
							</Grid>
							<Grid item lg={4}>
								<Box>
									<TextField
										label='Provincia/Estado'
										size='small'
										variant='outlined'
										fullWidth
										name='province'
										value={province}
										onChange={handleInputChange}
										helperText={
											errors.province && "Campo requerido"
										}
										error={errors.province}
									/>
								</Box>
							</Grid>
							<Grid item lg={4}>
								<Box>
									<TextField
										label='Ciudad/Municipio'
										size='small'
										variant='outlined'
										fullWidth
										name='city'
										value={city}
										onChange={handleInputChange}
										helperText={
											errors.city && "Campo requerido"
										}
										error={errors.city}
									/>
								</Box>
							</Grid>

							<Grid item lg={6}>
								<Box>
									<FormControl fullWidth>
										<Typography
											sx={{
												fontSize: "15px",
											}}
										>
											Contaseña
										</Typography>
										<OutlinedInput
											autoComplete='off'
											size='small'
											variant='outlined'
											type={
												values.showPassword
													? "text"
													: "password"
											}
											endAdornment={
												<InputAdornment position='end'>
													<IconButton
														aria-label='toggle password visibility'
														onClick={
															handleClickShowPassword
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
											fullWidth
											value={password}
											onChange={handleChange("password")}
											error={errors.password}
										/>
										{errors.password && (
											<FormHelperText
												sx={{ color: "#d32f2f" }}
											>
												Campo requerido
											</FormHelperText>
										)}
									</FormControl>
								</Box>
							</Grid>

							<Grid item lg={6}>
								<Box>
									<FormControl fullWidth>
										<Typography
											sx={{
												fontSize: "15px",
											}}
										>
											Repetir contraseña
										</Typography>
										<OutlinedInput
											autoComplete='off'
											size='small'
											variant='outlined'
											type={
												values.showConfirmPassword
													? "text"
													: "password"
											}
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
											fullWidth
											value={confirmPassword}
											onChange={handleChange(
												"confirmPassword"
											)}
											error={errors.confirmPassword}
										/>
										{errors.confirmPassword && (
											<FormHelperText
												sx={{ color: "#d32f2f" }}
											>
												Campo requerido
											</FormHelperText>
										)}
									</FormControl>
								</Box>
							</Grid>
						</Grid>
						<Box
							sx={{
								mt: 4,
								display: "flex",
								justifyContent: "center",
							}}
						>
							<Button
								variant='contained'
								color='primary'
								type='submit'
							>
								Registrar
							</Button>
						</Box>
					</form>
				</Box>
			</Container>
		</DashboardLayout>
	);
};
