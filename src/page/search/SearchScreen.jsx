import {
	Box,
	Checkbox,
	Container,
	Grid,
	List,
	ListItem,
	Paper,
	Typography,
	Select,
	FormControl,
	MenuItem,
	Input,
	Card,
	Avatar,
	IconButton,
	OutlinedInput,
	InputAdornment,
	Stack,
	Pagination,
	Alert,
} from "@mui/material";
import { GeneralLayout } from "../../layouts/GeneralLayout";
import { countries } from "../../data/countries";
import { useState } from "react";
import photo from "../../assets/yo.jpg";
import { Link, useNavigate } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import HighlightOffTwoToneIcon from "@mui/icons-material/HighlightOffTwoTone";
import { useForm } from "../../hooks/useForm";

import publicidad from "../../assets/publicidad.jpeg";

export const SearchScreen = () => {
	const navigate = useNavigate();
	const initialState = {
		search: "",
	};

	const [formValues, handleInputChange, reset] = useForm(initialState);
	const { search } = formValues;

	const onSearchSubmit = (e) => {
		e.preventDefault();
		navigate(`?query=${search.toLowerCase().trim()}`);
	};

	const [checked, setChecked] = useState(false);
	const [icon, setIcon] = useState(false);

	const handleChecked = (e) => {
		setChecked(!checked);
		// console.log(e.target.defaultValue);
	};

	const handleViewSearch = () => {
		setIcon(true);
	};

	const handleClearSearch = () => {
		setIcon(false);
		reset();
		console.log("Busqueda reiniciada");
	};

	return (
		<GeneralLayout>
			<Container maxWidth='lg' sx={{ mt: 4 }} component='div'>
				<Grid container spacing={0}>
					<Grid item sm={12}>
						<form onSubmit={onSearchSubmit}>
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
													onClick={handleClearSearch}
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
						</form>
					</Grid>
					<Grid item sm={12} sx={{ mt: 3 }}>
						<Alert severity='error'>
							No se encontro nungun resultado para la busqueda
						</Alert>
					</Grid>
					<Grid item sm={12}>
						<Box sx={{ mt: 3 }}>
							<Card
								sx={{
									p: 3,
									mb: 2,
									border: "1px solid #018f98",
									borderRadius: "10px",
								}}
							>
								<Grid container spacign={2}>
									<Grid
										item
										sm={3}
										sx={{
											display: "flex",
											flexDirection: "column",
											justifyContent: "center",
											alignItems: "center",
										}}
									>
										<Avatar
											sx={{
												width: 150,
												height: 150,
												borderStyle: "double",
												borderWidth: "5px 5px 5px 5px",
												borderRadius:
													"150px 150px 150px 150px",
											}}
										>
											<img
												src={photo}
												alt='avatar'
												width='100%'
											/>
										</Avatar>
										<Box>
											<IconButton>
												<i
													className='fas fa-medal'
													style={{ fontSize: 25 }}
												></i>
											</IconButton>
										</Box>
									</Grid>
									<Grid item sm={9}>
										<Link to='/profile'>
											<Typography
												component='span'
												sx={{
													fontSize: 17,
													fontWeight: "bold",
													color: "#018f98",
												}}
											>
												Dr. Luis Urdaneta - Ortopedista
												y Traumatólogo - Ortopedista
												Infantil - Cirujano
												Reconstructivo de Miembros
												Inferiores
											</Typography>
										</Link>

										<List>
											<ListItem>Direcciones</ListItem>
											<ListItem>
												<Box
													sx={{
														display: "flex",
													}}
												>
													<LocationOnIcon
														sx={{ fontSize: 20 }}
													/>
													<Typography
														sx={{
															ml: 1,
															fontSize: 13,
														}}
													>
														Centro Médico Medikal
														Garzota.
													</Typography>
												</Box>
											</ListItem>
										</List>
										<Box
											sx={{
												display: "flex",
												justifyContent: "flex-end",
											}}
										>
											<IconButton
												component='a'
												href='http://facebook.com/'
												target='_blank'
												sx={{
													"& :hover": {
														color: "transparent",
														background:
															"-webkit-radial-gradient(30% 107%, circle, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);",
														backgroundClip: "text",
													},
												}}
											>
												<i
													className='fa-brands fa-instagram'
													style={{ fontSize: 25 }}
												></i>
											</IconButton>
											<IconButton
												component='a'
												href='http://facebook.com/'
												target='_blank'
												sx={{
													"& :hover": {
														color: "#1877f2",
													},
												}}
											>
												<i
													className='fa-brands fa-facebook'
													style={{ fontSize: 25 }}
												></i>
											</IconButton>
											<IconButton
												component='a'
												href='http://facebook.com/'
												target='_blank'
												sx={{
													"& :hover": {
														color: "#1d9bf0",
													},
												}}
											>
												<i
													className='fa-brands fa-twitter'
													style={{ fontSize: 25 }}
												></i>
											</IconButton>
											<IconButton
												component='a'
												href='http://facebook.com/'
												target='_blank'
												sx={{
													"& :hover": {
														color: "#0a66c2",
													},
												}}
											>
												<i
													className='fa-brands fa-linkedin'
													style={{ fontSize: 25 }}
												></i>
											</IconButton>
										</Box>
									</Grid>
								</Grid>
							</Card>
							<Card
								sx={{
									p: 3,
									border: "1px solid #018f98",
									borderRadius: "10px",
								}}
							>
								<Grid container spacign={2}>
									<Grid
										item
										sm={3}
										sx={{
											display: "flex",
											flexDirection: "column",
											justifyContent: "center",
											alignItems: "center",
										}}
									>
										<Avatar
											sx={{
												width: 150,
												height: 150,
												borderStyle: "double",
												borderWidth: "5px 5px 5px 5px",
												borderRadius:
													"150px 150px 150px 150px",
											}}
										>
											<img
												src={photo}
												alt='avatar'
												width='100%'
											/>
										</Avatar>
										<Box>
											<IconButton>
												<i
													className='fas fa-gem'
													style={{ fontSize: 25 }}
												></i>
											</IconButton>
										</Box>
									</Grid>
									<Grid item sm={9}>
										<Link to='/profile'>
											<Typography
												component='span'
												sx={{
													fontSize: 17,
													fontWeight: "bold",
													color: "#018f98",
												}}
											>
												Dr. Luis Urdaneta - Ortopedista
												y Traumatólogo - Ortopedista
												Infantil - Cirujano
												Reconstructivo de Miembros
												Inferiores
											</Typography>
										</Link>

										<List>
											<ListItem>Direcciones</ListItem>
											<ListItem>
												<Box
													sx={{
														display: "flex",
													}}
												>
													<LocationOnIcon
														sx={{ fontSize: 20 }}
													/>
													<Typography
														sx={{
															ml: 1,
															fontSize: 13,
														}}
													>
														Centro Médico Medikal
														Garzota.
													</Typography>
												</Box>
											</ListItem>
										</List>
										<Box
											sx={{
												display: "flex",
												justifyContent: "flex-end",
											}}
										>
											<IconButton
												component='a'
												href='http://facebook.com/'
												target='_blank'
												sx={{
													"& :hover": {
														color: "transparent",
														background:
															"-webkit-radial-gradient(30% 107%, circle, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);",
														backgroundClip: "text",
													},
												}}
											>
												<i
													className='fa-brands fa-instagram'
													style={{ fontSize: 25 }}
												></i>
											</IconButton>
											<IconButton
												component='a'
												href='http://facebook.com/'
												target='_blank'
												sx={{
													"& :hover": {
														color: "#1877f2",
													},
												}}
											>
												<i
													className='fa-brands fa-facebook'
													style={{ fontSize: 25 }}
												></i>
											</IconButton>
											<IconButton
												component='a'
												href='http://facebook.com/'
												target='_blank'
												sx={{
													"& :hover": {
														color: "#1d9bf0",
													},
												}}
											>
												<i
													className='fa-brands fa-twitter'
													style={{ fontSize: 25 }}
												></i>
											</IconButton>
											<IconButton
												component='a'
												href='http://facebook.com/'
												target='_blank'
												sx={{
													"& :hover": {
														color: "#0a66c2",
													},
												}}
											>
												<i
													className='fa-brands fa-linkedin'
													style={{ fontSize: 25 }}
												></i>
											</IconButton>
										</Box>
									</Grid>
								</Grid>
							</Card>
							<Stack
								spacing={2}
								sx={{ mt: 4, alignItems: " center" }}
							>
								<Pagination
									count={10}
									variant='outlined'
									color='primary'
								/>
							</Stack>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</GeneralLayout>
	);
};
