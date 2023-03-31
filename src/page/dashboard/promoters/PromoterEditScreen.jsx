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
	FormLabel,
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
import { useDispatch } from "react-redux";

const SmallAvatar = styled(Avatar)(({ theme }) => ({
	width: 30,
	height: 30,
	border: `2px solid ${theme.palette.background.paper}`,
}));

export const PromoterEditScreen = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const [data, setData] = useState({});

	useEffect(() => {
		Api.get("/user/dashboard/editUser", {
			params: {
				id,
			},
		})
			.then((res) => {
				const data = {
					name: res.data.user.name,
					lastname: res.data.user.lastname,
					phone: res.data.user.phone,
					email: res.data.user.email,
					province: res.data.user.province,
					city: res.data.user.city,
					avatar_id: res.data.user.documents[0].id,
				};
				setData(data);
				setCountry_value({
					country: res.data.user.country,
					country_code: res.data.user.country_code,
				});
				setPreview(res.data.user.documents[0].url);
			})
			.catch((err) => console.log(err));
	}, [dispatch]);

	const { name, lastname, phone, email, province, city, avatar_id } = data;

	const handleChangeData = ({ target }) => {
		setData({
			...data,
			[target.name]: target.value,
		});
	};

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

	const { password, confirmPassword, showPassword, showConfirmPassword } = values;

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

		if (password !== confirmPassword) {
			toast.error("Las contraseñas no coinciden;", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		} else {
			let formData = new FormData();

			formData.append("id", id);
			formData.append("name", name);
			formData.append("lastname", lastname);
			formData.append("phone", phone);
			formData.append("email", email);
			formData.append("country", country);
			formData.append("country_code", country_code);
			formData.append("province", province);
			formData.append("city", city);
			formData.append("avatar_id", avatar_id);
			formData.append("avatar", avatar);
			formData.append("password", password);

			Api.put("/user/dashboard/updateUser", formData, {
				headers: { "Content-Type": "multipart/form-data" },
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

					navigate("/dashboard/promoters");
				})
				.catch((err) => console.log(err));
		}
	};
	return (
		<DashboardLayout>
			<Container maxWidth='lg'>
				<Box>
					<Box sx={{ mb: 5 }}>
						<Typography variant='h6' componet='div'>
							Editar Promotor
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
											<IconButton onClick={handleImgProfileSet}>
												<CameraAltIcon></CameraAltIcon>
											</IconButton>
										}
									>
										<Avatar
											alt={name}
											src={preview}
											sx={{
												width: "90px",
												height: "90px",
											}}
										/>
									</Badge>
									<ModalImg open={open} onClose={onClose} onCrop={onCrop} setOpen={setOpen} onBeforeFileLoad={onBeforeFileLoad} />
								</Grid>
								<Grid item lg={6}>
									<Box>
										<FormControl fullWidth>
											<FormLabel
												sx={{
													fontSize: "15px",
												}}
											>
												Nombre
											</FormLabel>

											<OutlinedInput
												label=''
												size='small'
												variant='outlined'
												fullWidth
												name='name'
												value={name}
												onChange={handleChangeData}
												autoComplete='off'
												helperText={errors.name && "Campo requerido"}
												error={errors.name}
											/>
											<FormHelperText></FormHelperText>
										</FormControl>
									</Box>
								</Grid>
								<Grid item lg={6}>
									<Box>
										<FormControl fullWidth>
											<FormLabel
												sx={{
													fontSize: "15px",
												}}
											>
												Apellido
											</FormLabel>
											<OutlinedInput
												size='small'
												variant='outlined'
												fullWidth
												name='lastname'
												value={lastname}
												onChange={handleChangeData}
												autoComplete='off'
												helperText={errors.lastname && "Campo requerido"}
												error={errors.lastname}
											/>
											<FormHelperText></FormHelperText>
										</FormControl>
									</Box>
								</Grid>
								<Grid item lg={6}>
									<Box>
										<FormControl fullWidth>
											<FormLabel
												sx={{
													fontSize: "15px",
												}}
											>
												Correo Electronico
											</FormLabel>
											<OutlinedInput
												size='small'
												variant='outlined'
												fullWidth
												name='email'
												value={email}
												onChange={handleChangeData}
												autoComplete='off'
												helperText={errors.email && "Campo requerido"}
												error={errors.email}
											/>
											<FormHelperText></FormHelperText>
										</FormControl>
									</Box>
								</Grid>
								<Grid item lg={6}>
									<Box>
										<FormControl fullWidth>
											<FormLabel
												sx={{
													fontSize: "15px",
												}}
											>
												Telefono
											</FormLabel>
											<OutlinedInput
												size='small'
												variant='outlined'
												fullWidth
												name='phone'
												value={phone}
												onChange={handleChangeData}
												autoComplete='off'
												helperText={errors.phone && "Campo requerido"}
												error={errors.phone}
											/>
											<FormHelperText></FormHelperText>
										</FormControl>
									</Box>
								</Grid>

								<Grid item lg={4}>
									<Box>
										<FormLabel
											sx={{
												fontSize: "15px",
											}}
										>
											Pais
										</FormLabel>
										<Autocomplete
											error
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
														src={`https:flagcdn.com/w20/${option.code.toLowerCase()}.png`}
														srcSet={`https:flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
														alt=''
													/>
													{option.label}
												</Box>
											)}
											name='country'
											value={{
												code: country_value.country_code,
												label: country_value.country,
											}}
											renderInput={(params) => (
												<TextField
													{...params}
													inputProps={{
														...params.inputProps,
														autoComplete: "new-password",
													}}
													size='small'
												/>
											)}
										/>
									</Box>
								</Grid>
								<Grid item lg={4}>
									<Box>
										<FormControl fullWidth>
											<FormLabel
												sx={{
													fontSize: "15px",
												}}
											>
												Provincia/Estado
											</FormLabel>
											<OutlinedInput
												label=''
												size='small'
												variant='outlined'
												fullWidth
												name='province'
												value={province}
												onChange={handleChangeData}
												helperText={errors.province && "Campo requerido"}
												error={errors.province}
											/>
											<FormHelperText></FormHelperText>
										</FormControl>
									</Box>
								</Grid>
								<Grid item lg={4}>
									<Box>
										<FormControl fullWidth>
											<FormLabel
												sx={{
													fontSize: "15px",
												}}
											>
												Ciudad/Municipio
											</FormLabel>
											<OutlinedInput
												label=''
												size='small'
												variant='outlined'
												fullWidth
												name='city'
												value={city}
												onChange={handleChangeData}
												helperText={errors.city && "Campo requerido"}
												error={errors.city}
											/>
											<FormHelperText></FormHelperText>
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
												Contaseña
											</Typography>
											<OutlinedInput
												autoComplete='off'
												size='small'
												variant='outlined'
												type={values.showPassword ? "text" : "password"}
												endAdornment={
													<InputAdornment position='end'>
														<IconButton
															aria-label='toggle password visibility'
															onClick={handleClickShowPassword}
															onMouseDown={handleMouseDownPassword}
															edge='end'
														>
															{values.showOldPassword ? <VisibilityOff /> : <Visibility />}
														</IconButton>
													</InputAdornment>
												}
												placeholder='**********'
												fullWidth
												value={password}
												onChange={handleChange("password")}
												error={errors.password}
											/>
											{errors.password && <FormHelperText sx={{ color: "#d32f2f" }}>Campo requerido</FormHelperText>}
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
												type={values.showConfirmPassword ? "text" : "password"}
												endAdornment={
													<InputAdornment position='end'>
														<IconButton
															aria-label='toggle password visibility'
															onClick={handleClickShowConfirmPassword}
															onMouseDown={handleMouseDownPassword}
															edge='end'
														>
															{values.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
														</IconButton>
													</InputAdornment>
												}
												placeholder='**********'
												fullWidth
												value={confirmPassword}
												onChange={handleChange("confirmPassword")}
												error={errors.confirmPassword}
											/>
											{errors.confirmPassword && <FormHelperText sx={{ color: "#d32f2f" }}>Campo requerido</FormHelperText>}
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
								<Button variant='contained' color='primary' type='submit'>
									Editar
								</Button>
							</Box>
						</form>
					</Box>
				</Box>
			</Container>
		</DashboardLayout>
	);
};
