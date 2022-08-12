import { useState } from "react";
import {
	Box,
	FormControl,
	IconButton,
	InputAdornment,
	OutlinedInput,
	Paper,
	Typography,
	Container,
	Divider,
	Grid,
	Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HighlightOffTwoToneIcon from "@mui/icons-material/HighlightOffTwoTone";
import { GeneralLayout } from "../../layouts/GeneralLayout";
import "./styles.css";
import { useForm } from "../../hooks/useForm";
import { ReactWorldCountriesMap } from "react-world-countries-map";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getCountriesData } from "../../store/slices/ui/getCountriesData";
import { useDispatch, useSelector } from "react-redux";
import { Api } from "../../api";

export const HomeScreen = () => {
	const dispatch = useDispatch();

	const { countries } = useSelector((state) => state.ui);

	const [specialities, setSpecialities] = useState([]);

	useEffect(() => {
		dispatch(getCountriesData());

		Api.get("/specialities")
			.then((res) => {
				setSpecialities(res.data.specialities);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const navigate = useNavigate();

	const [formValues, handleInputChange, reset] = useForm({
		search: "",
	});

	const { search } = formValues;

	const onSearchSubmit = (e) => {
		e.preventDefault();
		if (search.trim().length <= 1) return;
		navigate(`/search?query=${search.toLowerCase().trim()}`);
	};

	const [icon, setIcon] = useState(false);

	const handleViewSearch = () => {
		setIcon(true);
	};

	const handleClearSearch = () => {
		setIcon(false);
		reset();
	};

	return (
		<GeneralLayout>
			<Box
				className={"box-img"}
				sx={{
					height: "550px",
					backgroundImage: {
						xl: `url(src/assets/meds-xl.png)`,
						lg: `url(src/assets/meds-lg.png)`,
					},
				}}
			>
				<Box className='box-position'>
					<Paper
						className='paper-st'
						sx={{
							backgroundColor: "primary.main",
						}}
					>
						<Typography variant='h5' color='white'>
							ENCUENTRA TU MEJOR DOCTOR <br /> DONDE QUIERA QUE
							ESTES
						</Typography>

						<Typography sx={{ mt: 3 }}>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Quo consequatur porro nulla dolore nesciunt
							expedita, nam atque qui a ex. Hic, nobis voluptatem.
							Eum, expedita. Officia, officiis. Consequuntur, ut
							consequatur.
						</Typography>
						<form onSubmit={onSearchSubmit}>
							<Box sx={{ mt: 3 }}>
								<FormControl fullWidth variant='outlined'>
									<OutlinedInput
										type='text'
										value={search}
										name='search'
										placeholder='Buscar...'
										startAdornment={
											<InputAdornment position='start'>
												<SearchIcon />
											</InputAdornment>
										}
										endAdornment={
											icon && (
												<InputAdornment position='end'>
													<IconButton
														onClick={
															handleClearSearch
														}
													>
														<HighlightOffTwoToneIcon />
													</IconButton>
												</InputAdornment>
											)
										}
										size='small'
										autoComplete='off'
										onChange={handleInputChange}
										onFocus={handleViewSearch}
									/>
								</FormControl>
							</Box>
						</form>
					</Paper>
				</Box>
			</Box>

			<Container maxWidth='lg'>
				<Box sx={{ display: "flex", alignItems: "center", mt: 6 }}>
					<Typography variant='h5' sx={{ fontWeight: 800 }}>
						Encuentre médicos en cualquier parte del Mundo
					</Typography>
					<Divider
						sx={{
							ml: 2,
							width: "80px",
							borderColor: "primary.main",
							borderWidth: "2px",
						}}
					/>
				</Box>
				<Typography>
					Tenemos Medicos de todas partes del mundo al alcanze de un
					solo click...
				</Typography>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
					className='SizeMap'
				>
					<ReactWorldCountriesMap
						tooltipBgColor='#ff8304'
						color='#018f98'
						value-suffix='Medicos'
						size='responsive'
						data={countries}
					/>
					{/* <img src={map} alt='' width='70%' /> */}
				</Box>
			</Container>

			<Box
				sx={{
					backgroundColor: "primary.main",
					mt: 2,
					padding: "60px",
				}}
			>
				<Container maxWidth='lg'>
					<Grid container spacing={5}>
						<Grid item xs={12} sm={6}>
							<Typography
								color='white'
								sx={{
									fontSize: "20px",
									fontWeight: 600,
								}}
							>
								Es un Medico apasionado y puede brindar
								servicios de <br />
								clase mundial ?
							</Typography>
							<Divider
								sx={{
									borderColor: "white",
									borderWidth: "1px",
									width: "100%",
									mb: 1,
								}}
							/>
							<Typography sx={{ color: "white" }}>
								There are many variations of passages of Lorem
								Ipsum available, but the majority
								<br /> have suffered Lorem Ipsum
							</Typography>
							<Button
								fullWidth
								variant='contained'
								sx={{
									mt: 2,
									backgroundColor: "white",
									color: "primary.main",
									"&:hover": {
										backgroundColor: "black",
										color: "white",
									},
								}}
							>
								Registrate Ahora
							</Button>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Typography
								color='white'
								sx={{
									fontSize: "20px",
									fontWeight: 600,
								}}
							>
								Es un Medico apasionado y puede brindar
								servicios de <br />
								clase mundial ?
							</Typography>
							<Divider
								sx={{
									borderColor: "white",
									borderWidth: "1px",
									width: "100%",
									mb: 1,
								}}
							/>
							<Typography sx={{ color: "white" }}>
								There are many variations of passages of Lorem
								Ipsum available, but the majority
								<br /> have suffered Lorem Ipsum
							</Typography>
							<Button
								fullWidth
								variant='contained'
								sx={{
									mt: 2,
									backgroundColor: "white",
									color: "primary.main",
									"&:hover": {
										backgroundColor: "black",
										color: "white",
									},
								}}
							>
								Registrate Ahora
							</Button>
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Box sx={{ mb: 8 }}>
				<Container maxWidth='lg'>
					<Box sx={{ display: "flex", alignItems: "center", mt: 6 }}>
						<Typography variant='h5' sx={{ fontWeight: 800 }}>
							Encuentre médicos por Departamentos
						</Typography>
						<Divider
							sx={{
								ml: 2,
								width: "80px",
								borderColor: "primary.main",
								borderWidth: "2px",
							}}
						/>
					</Box>
					<Typography>Explicacion de esta seccion</Typography>
					<Box sx={{ mt: 4 }}>
						<Grid container spacing={2}>
							{specialities.map((speciality) => (
								<Grid item xl={3} lg={3} key={speciality.id}>
									<Box className='keep draw'>
										<Box
											sx={{
												display: " flex",
												flexDirection: "column",
												justifyContent: "center",
												alignItems: "center",
											}}
										>
											<img
												src='https://bfesteticadental.com/wp-content/uploads/2017/06/Odontologia-Caracas-Venezuela-BF-Estetica-Dental-1024x682.jpg'
												alt={speciality.name}
												width='260px'
												height='163px'
											/>
											<Typography sx={{ mt: 1 }}>
												{speciality.name}
											</Typography>
										</Box>
									</Box>
								</Grid>
							))}
						</Grid>
					</Box>
				</Container>
			</Box>
		</GeneralLayout>
	);
};
