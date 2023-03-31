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
	Button,
	Skeleton,
	CircularProgress,
} from "@mui/material";
import { GeneralLayout } from "../../layouts/GeneralLayout";
import { countries } from "../../data/countries";
import { useEffect, useState } from "react";
import photo from "../../assets/yo.jpg";
import { Link, useNavigate, useParams } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import HighlightOffTwoToneIcon from "@mui/icons-material/HighlightOffTwoTone";
import { useForm } from "../../hooks/useForm";

import publicidad from "../../assets/publicidad.jpeg";
import { Api } from "../../api";

export const SearchScreen = () => {
	const [checked, setChecked] = useState(false);
	const [icon, setIcon] = useState(false);
	const [count, setCount] = useState(0);
	const [loading, setLoading] = useState(false);
	const [variable, setVariable] = useState("");
	const navigate = useNavigate();
	const { query } = useParams();
	const initialState = {
		search: query,
	};
	const [formValues, handleInputChange, reset] = useForm(initialState);
	const { search } = formValues;
	const [data, setData] = useState([]);
	const [page, setPage] = useState(0);

	var arraySearch = search.split(" ");

	useEffect(() => {
		const pageAsNumber = parseInt(page);
		Api.get("/searchs/get", {
			params: {
				arraySearch,
				page: pageAsNumber,
				size: 5,
			},
		}).then((res) => {
			setLoading(true);
			setCount(res.data.users.count);
			setPage(pageAsNumber + 1);
			setData(res.data.users.rows);
			setTimeout(() => {
				setLoading(false);
			}, 2000);
		});
	}, [variable]);

	// const onSearchSubmit = (e) => {
	// 	e.preventDefault();
	// 	var arraySearch = search.split(" ");

	// 	Api.get("/searchs/get", {
	// 		params: {
	// 			arraySearch,
	// 		},
	// 	}).then((res) => {
	// 		setData(res.data.results);
	// 	});
	// };

	const handleChecked = (e) => {
		setChecked(!checked);
		// console.log(e.target.defaultValue);
	};

	const handlePagination = (page) => {
		const pageAsNumber = parseInt(page - 1);

		Api.get("/searchs/get", {
			params: {
				arraySearch,
				page: pageAsNumber,
				size: 5,
			},
		}).then((res) => {
			setLoading(true);
			setCount(res.data.users.count);
			setPage(pageAsNumber + 1);
			setData(res.data.users.rows);
			setTimeout(() => {
				setLoading(false);
			}, 1000);
		});
	};

	const handleViewSearch = () => {
		setIcon(true);
	};

	const handleClearSearch = () => {
		setIcon(false);
		reset();
		console.log("Busqueda reiniciada");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setVariable(search);
		setPage(0);
	};

	return (
		<GeneralLayout>
			<Container maxWidth='lg' sx={{ mt: 4 }} component='div'>
				<Grid container spacing={0}>
					<Grid item sm={12}>
						<form onSubmit={handleSubmit}>
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
												<IconButton onClick={handleClearSearch}>
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

					{loading ? (
						<Grid item sm={12}>
							<Box sx={{ display: "flex", placeItems: "center", mt: 20, ml: "45%", mb: "22%" }}>
								<CircularProgress size={80} />
							</Box>
						</Grid>
					) : data.length == 0 ? (
						<Grid item sm={12} sx={{ mt: 3 }}>
							<Alert severity='error'>No se encontro nungun resultado para la busqueda</Alert>
						</Grid>
					) : (
						<Grid item sm={12}>
							<Box sx={{ mt: 3 }}>
								{data.map((user) => (
									<Card
										key={user.id}
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
														borderRadius: "150px 150px 150px 150px",
													}}
												>
													<img src={user.documents[0].url} alt='avatar' width='100%' />
												</Avatar>
												{/* <Box>
													<IconButton>
														<i className='fas fa-medal' style={{ fontSize: 25 }}></i>
													</IconButton>
												</Box> */}
											</Grid>
											<Grid item sm={9}>
												{/* <Link to='/profile'> */}
												<Typography
													component='span'
													sx={{
														fontSize: 17,
														fontWeight: "bold",
														color: "#018f98",
													}}
												>
													Dr. {user.name} {user.lastname} {user.specialities.map((s) => " - " + s.speciality)}
												</Typography>
												<Typography variant='body1' color='initial'>
													{user.city} - {user.province} - {user.country}
												</Typography>
												{/* </Link> */}

												{user.addresses.length != 0 && (
													<List>
														<ListItem>Direcciones</ListItem>
														{user.addresses.map((address, index) => (
															<ListItem key={index}>
																<Box
																	sx={{
																		display: "flex",
																	}}
																>
																	<LocationOnIcon sx={{ fontSize: 20 }} />
																	<Typography
																		sx={{
																			ml: 1,
																			fontSize: 13,
																		}}
																	>
																		{address.address}
																	</Typography>
																</Box>
															</ListItem>
														))}
													</List>
												)}

												{/* <Box
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
														<i className='fa-brands fa-instagram' style={{ fontSize: 25 }}></i>
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
														<i className='fa-brands fa-facebook' style={{ fontSize: 25 }}></i>
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
														<i className='fa-brands fa-twitter' style={{ fontSize: 25 }}></i>
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
														<i className='fa-brands fa-linkedin' style={{ fontSize: 25 }}></i>
													</IconButton>
												</Box> */}
											</Grid>
											<Grid item sm={12}>
												<Box
													sx={{
														display: "flex",
														justifyContent: "space-between",
													}}
												>
													{user.plan == "Gratis" && (
														<IconButton
															sx={{
																ml: 14.6,
															}}
														>
															<i className='fas fa-medal' style={{ color: "green", fontSize: 25 }}></i>
														</IconButton>
													)}

													{user.plan == "Basico" && (
														<IconButton
															sx={{
																ml: 14.6,
															}}
														>
															<i className='fas fa-medal' style={{ color: "rgb(0, 0, 128)", fontSize: 25 }}></i>
														</IconButton>
													)}

													{user.plan == "Bronce" && (
														<IconButton
															sx={{
																ml: 14.6,
															}}
														>
															<i className='fas fa-medal' style={{ color: "rgb(128, 0, 0)", fontSize: 25 }}></i>
														</IconButton>
													)}

													{user.plan == "Plata" && (
														<IconButton
															sx={{
																ml: 14.6,
															}}
														>
															<i className='fas fa-medal' style={{ color: "rgb(51, 51, 51)", fontSize: 25 }}></i>
														</IconButton>
													)}

													{user.plan == "Oro" && (
														<IconButton
															sx={{
																ml: 14.6,
															}}
														>
															<i className='fas fa-medal' style={{ color: "rgb(255, 153, 0)", fontSize: 25 }}></i>
														</IconButton>
													)}

													{user.plan == "Zafiro" && (
														<IconButton
															sx={{
																ml: 14.6,
															}}
														>
															<i className='fa-solid fa-gem' style={{ color: "rgb(255, 153, 0)", fontSize: 25 }}></i>
														</IconButton>
													)}

													{user.plan == "Rubi" && (
														<IconButton
															sx={{
																ml: 14.6,
															}}
														>
															<i className='fa-solid fa-gem' style={{ color: "rgb(255, 0, 0)", fontSize: 25 }}></i>
														</IconButton>
													)}

													{user.plan == "Esmeralda" && (
														<IconButton
															sx={{
																ml: 14.6,
															}}
														>
															<i className='fa-solid fa-gem' style={{ color: "rgb(0, 128, 0)", fontSize: 25 }}></i>
														</IconButton>
													)}

													{user.plan == "Diamante" && (
														<IconButton
															sx={{
																ml: 14.6,
															}}
														>
															<i className='fa-solid fa-gem' style={{ color: "rgb(0, 128, 0)", fontSize: 25 }}></i>
														</IconButton>
													)}

													{user.rss !== null && (
														<Box
															sx={{
																display: "flex",
																justifyContent: "flex-end",
															}}
														>
															{user.rss.instagram !== "" && (
																<IconButton
																	component='a'
																	href={user.rss.instagram}
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
																	<i className='fa-brands fa-instagram' style={{ fontSize: 25 }}></i>
																</IconButton>
															)}

															{user.rss.facebook !== "" && (
																<IconButton
																	component='a'
																	href={user.rss.facebook}
																	target='_blank'
																	sx={{
																		"& :hover": {
																			color: "#1877f2",
																		},
																	}}
																>
																	<i className='fa-brands fa-facebook' style={{ fontSize: 25 }}></i>
																</IconButton>
															)}

															{user.rss.twitter !== "" && (
																<IconButton
																	component='a'
																	href={user.rss.twitter}
																	target='_blank'
																	sx={{
																		"& :hover": {
																			color: "#1d9bf0",
																		},
																	}}
																>
																	<i className='fa-brands fa-twitter' style={{ fontSize: 25 }}></i>
																</IconButton>
															)}

															{user.rss.linkedin !== "" && (
																<IconButton
																	component='a'
																	href={user.rss.linkedin}
																	target='_blank'
																	sx={{
																		"& :hover": {
																			color: "#0a66c2",
																		},
																	}}
																>
																	<i className='fa-brands fa-linkedin' style={{ fontSize: 25 }}></i>
																</IconButton>
															)}
														</Box>
													)}
												</Box>
											</Grid>
										</Grid>
									</Card>
								))}

								<Stack spacing={2} sx={{ mt: 5, alignItems: " center" }}>
									<Pagination
										onChange={(e, value) => {
											handlePagination(value);
										}}
										page={page}
										count={Math.ceil(count / 5)}
										variant='outlined'
										color='primary'
										hideNextButton={false}
										hidePrevButton={false}
									/>
								</Stack>
							</Box>
						</Grid>
					)}
				</Grid>
			</Container>
		</GeneralLayout>
	);
};
