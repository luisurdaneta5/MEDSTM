import React, { useState, useEffect } from "react";
import {
	Container,
	AppBar,
	Box,
	Toolbar,
	Typography,
	IconButton,
	Button,
	Divider,
	Grid,
	Modal,
	FormControl,
	InputLabel,
	Input,
	TextField,
	OutlinedInput,
	InputAdornment,
	CircularProgress,
	Tooltip,
} from "@mui/material";

import { Link, useNavigate } from "react-router-dom";

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import logo_letra from "../assets/logo_simple.png";
import logo from "../assets/logo.png";

import letras from "../assets/letras.png";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../store/slices/auth/setLogin";
import { setLogout } from "../store/slices/auth";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	borderRadius: "5px",
	boxShadow: 24,
	p: 4,
};

export const GeneralLayout = ({ children }) => {
	const dispatch = useDispatch();
	const { isLoading, isAuthenticated } = useSelector((state) => state.auth);

	const navigate = useNavigate();

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const [email, setEmail] = useState("");

	const [values, setValues] = useState({
		password: "",
		showPassword: false,
	});

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword,
		});
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const to_navigate = (type) => {
			if (type === "5") {
				navigate("/dashboard");
			} else if (type === "3") {
				navigate("/profile");
			} else if (type === "4") {
				navigate("/profile");
			}
		};
		dispatch(setLogin(email, values.password, to_navigate));
	};

	const handleLogout = () => {
		localStorage.clear();
		dispatch(setLogout());
		navigate("/", { replace: true });
	};

	return (
		<>
			<Box
				sx={{
					backgroundColor: "primary.main",
				}}
			>
				<Container maxWidth='lg'>
					<Modal
						open={open}
						onClose={handleClose}
						aria-labelledby='modal-modal-title'
						aria-describedby='modal-modal-description'
					>
						<Box sx={style}>
							<form onSubmit={handleSubmit}>
								<Box
									sx={{
										display: "flex",
										justifyContent: "center",
									}}
								>
									<Typography variant='h6' component='h2'>
										Bienvenidos a Medstm
									</Typography>
								</Box>
								<Box
									sx={{
										display: "flex",
										justifyContent: "center",
									}}
								>
									<Typography
										sx={{ mt: 1, fontSize: "13px" }}
									>
										Ingrese con Correo y Contraseña
									</Typography>
								</Box>

								<Box sx={{ mt: 5 }}>
									<label
										style={{
											fontSize: "13px",
											fontWeight: "bold",
										}}
									>
										Correo electronico
									</label>
									<TextField
										size='small'
										fullWidth
										placeholder='example@example.com'
										value={email}
										onChange={(e) =>
											setEmail(e.target.value)
										}
									/>
								</Box>

								<Box sx={{ mt: 2 }}>
									<label
										style={{
											fontSize: "13px",
											fontWeight: "bold",
										}}
									>
										Contraseña
									</label>
									<FormControl sx={{}} size='small' fullWidth>
										<OutlinedInput
											type={
												values.showPassword
													? "text"
													: "password"
											}
											value={values.password}
											onChange={handleChange("password")}
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
														{values.showPassword ? (
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

								<Box sx={{ mt: 2 }}>
									<Button
										variant='contained'
										color='primary'
										size='small'
										fullWidth
										type='submit'
									>
										{isLoading ? (
											<Box sx={{ display: "flex" }}>
												<CircularProgress
													sx={{
														color: "white",
													}}
													size={30}
												/>
											</Box>
										) : (
											"Ingresar"
										)}
									</Button>
								</Box>
							</form>
							<Box
								sx={{
									display: "flex",

									justifyContent: "center",
									mt: 2,
								}}
							>
								<Typography
									sx={{ display: "flex", fontSize: "15px" }}
								>
									No tienes una cuenta?
									<Link to='/join-us'>
										<Typography
											component='u'
											color='black'
											sx={{
												ml: 1,
												fontWeight: "bold",
												fontSize: "15px",
											}}
										>
											Unete
										</Typography>
									</Link>
								</Typography>
							</Box>

							<Box
								sx={{
									display: "flex",

									justifyContent: "center",
									mt: 2,
								}}
							>
								<Typography
									sx={{
										display: "flex",
										fontSize: "15px",
										backgroundColor: "#f3f5f9",
										borderRadius: "5px",
										p: 3,
									}}
								>
									Olvidate tu contraseña?
									<Link to='/join-us'>
										<Typography
											component='u'
											color='black'
											sx={{
												ml: 1,
												fontWeight: "bold",
												fontSize: "15px",
											}}
										>
											Recuperala
										</Typography>
									</Link>
								</Typography>
							</Box>
						</Box>
					</Modal>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							padding: "5px",
						}}
					>
						<Box>
							<Typography variant='' color='white'>
								FAQ'
							</Typography>
						</Box>
						<Box
							sx={{
								display: "flex",
							}}
						>
							{/* <Typography variant='' color='white'>
								Siguenos
							</Typography> */}

							{isAuthenticated ? (
								<Box
									sx={{
										display: "flex",
									}}
								>
									<Link to='/profile'>
										<Typography
											sx={{
												mr: 0,
												color: "white",
												cursor: "pointer",
											}}
										>
											IR A MI PERFIL
										</Typography>
									</Link>

									<Box
										sx={{
											ml: 2,
											cursor: "pointer",
										}}
										onClick={handleLogout}
									>
										<Tooltip title='Salir'>
											<i className='fa-solid fa-arrow-right-from-bracket'></i>
										</Tooltip>
									</Box>
								</Box>
							) : (
								<Box onClick={handleOpen}>
									<Typography
										sx={{
											mr: 0,
											color: "white",
											cursor: "pointer",
										}}
									>
										INICIAR SESION
									</Typography>
								</Box>
							)}

							{/* <Typography
								component='a'
								href='http://instagram.com'
								sx={{ color: "white" }}
							>
								<InstagramIcon />
							</Typography>
							<Typography
								component='a'
								href='http://instagram.com'
								sx={{ color: "white" }}
							>
								<FacebookOutlinedIcon />
							</Typography> */}
						</Box>
					</Box>
				</Container>
			</Box>
			<AppBar
				position='sticky'
				sx={{ backgroundColor: "white" }}
				className='animate__animated animate__fadeIn'
			>
				<Container maxWidth='lg'>
					<Toolbar disableGutters>
						<Box sx={{ display: "flex", alignItems: "center" }}>
							<img src={logo_letra} alt='medstm' width='60px' />

							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
								}}
							>
								<Typography
									noWrap
									component='a'
									href='/'
									sx={{
										ml: 2,
										fontSize: "15px",
										fontFamily: "Montserrat, sans-serif",
										fontWeight: 800,

										color: "black",
										textDecoration: "none",
									}}
								>
									MEDS TM
								</Typography>
								<Typography sx={{ ml: 2, color: "black" }}>
									Directorio Sanitario Internacional
								</Typography>
							</Box>
						</Box>

						<Box
							sx={{
								flexGrow: 1,
								display: { xs: "flex", md: "none" },
							}}
						>
							<IconButton
								size='large'
								aria-label='account of current user'
								aria-controls='menu-appbar'
								aria-haspopup='true'
								// onClick={handleOpenNavMenu}
								color='inherit'
							></IconButton>
						</Box>

						<Typography
							variant='h5'
							noWrap
							component='a'
							href=''
							sx={{
								mr: 2,
								display: { xs: "flex", md: "none" },
								flexGrow: 1,
								fontFamily: "monospace",
								fontWeight: 700,
								letterSpacing: ".3rem",
								color: "inherit",
								textDecoration: "none",
							}}
						>
							LOGO
						</Typography>
						<Box
							sx={{
								flexGrow: 1,
								display: { xs: "none", md: "flex" },
								color: "black",
								justifyContent: "flex-end",
							}}
						>
							<Link
								to='/'
								style={{
									textDecoration: "none",
									color: "black",
								}}
							>
								<Button
									// onClick={handleCloseNavMenu}
									sx={{
										my: 2,
										color: "black",
										display: "block",
									}}
								>
									Inicio
								</Button>
							</Link>

							<Link
								to='/join-us'
								style={{
									color: "black",
								}}
							>
								<Button
									// onClick={handleCloseNavMenu}
									sx={{
										my: 2,
										color: "black",
										display: "block",
									}}
								>
									UNETE
								</Button>
							</Link>

							<Link to='/blog'>
								<Button
									// onClick={handleCloseNavMenu}
									sx={{
										my: 2,
										color: "black",
										display: "block",
									}}
								>
									noticias
								</Button>
							</Link>

							<Link to='/contact-us'>
								<Button
									// onClick={handleCloseNavMenu}
									sx={{
										my: 2,
										color: "black",
										display: "block",
									}}
								>
									Contactanos
								</Button>
							</Link>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>

			{children}

			<footer>
				<Container maxWidth='lg' sx={{ mt: 5 }}>
					<Divider
						sx={{
							"&.MuiDivider-root": {
								borderColor: "primary.main",
								borderWidth: "1px",
							},
						}}
					/>
					<Grid container spacing={3} sx={{ padding: "20px" }}>
						<Grid item xs={12} sm={4}>
							<Box sx={{ display: "flex", alignItems: "center" }}>
								<img src={logo} alt='medts' width='80%' />

								{/* <Typography
									noWrap
									component='a'
									href='/'
									sx={{
										fontSize: "15px",
										fontFamily: "Montserrat, sans-serif",
										fontWeight: 800,

										color: "black",
										textDecoration: "none",
									}}
								>
									MEDS TM
								</Typography> */}
							</Box>
						</Grid>
						<Grid item xs={12} sm={4}>
							<Typography
								color='initial'
								sx={{
									fontSize: "25px",
									fontWeight: 700,
									ml: 1,
								}}
							>
								SIGUENOS!
							</Typography>
							<Box
								sx={{
									display: "flex",
									mt: 2,
									justifyContent: "left",
									alignItems: "center",
								}}
							>
								<IconButton>
									<InstagramIcon />
								</IconButton>
								<IconButton>
									<FacebookOutlinedIcon />
								</IconButton>
							</Box>
						</Grid>
						<Grid item xs={12} sm={4}>
							<Typography
								color='initial'
								sx={{
									fontSize: "25px",
									fontWeight: 700,
								}}
							>
								CONTACTANOS!
							</Typography>
							<Typography sx={{ mt: 2 }}>
								Phone: +91-xxx xxx xxxx
								<br />
								Email:info@medicaltourism.india
								<br />
							</Typography>
						</Grid>
					</Grid>

					<Divider
						sx={{
							"&.MuiDivider-root": {
								borderColor: "primary.main",
								borderWidth: "1px",
								mt: 2,
							},
						}}
					/>
					<Typography sx={{ padding: "10px" }}>
						Copyright © 2022 MEDS TM | Powered by MEDS TM
					</Typography>
				</Container>
			</footer>
		</>
	);
};
