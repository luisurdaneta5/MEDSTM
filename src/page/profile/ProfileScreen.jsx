import { React, useEffect, useState } from "react";
import { GeneralLayout } from "../../layouts/GeneralLayout";
import {
	Box,
	Grid,
	Container,
	Typography,
	Avatar,
	Tooltip,
	Button,
	TableContainer,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	TablePagination,
	TextField,
	IconButton,
} from "@mui/material";
import { Api } from "../../api";
import usdt from "../../assets/usdt.png";
import moment from "moment";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { ReferralsTable } from "./components/ReferralsTable";
import { SpecialitiesTable } from "./components/SpecialitiesTable";
import { AddressTable } from "./components/AddressTable";
import { WithdrawalsTable } from "./components/WithdrawalsTable";
import copy from "copy-to-clipboard";

export const ProfileScreen = () => {
	const uid = localStorage.getItem("id");
	const [image, setImage] = useState("");
	const [social, setSocial] = useState([]);

	const [user, setUser] = useState({
		referrals: [],
		my_specialities: [],
		addresses: [],
		withdrawals: [],
		code: [],
	});

	const [balance, setBalance] = useState(0);

	useEffect(() => {
		Api.get("/user/profile", {
			params: {
				id: uid,
			},
		})
			.then((res) => {
				setUser(res.data.user);
				setImage(res.data.avatar);
				setBalance(res.data.user.balance.balance);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	useEffect(() => {
		Api.get("/social/getSocial", {
			params: {
				id: uid,
			},
		}).then((res) => setSocial(res.data.data));
	}, []);

	const { facebook, instagram, twitter, linkedin } = social;

	const {
		name,
		lastname,
		email,
		phone,
		country,
		plan,
		my_specialities,
		referrals,
		addresses,
		withdrawals,
		createdAt,
		code,
		type,
	} = user;

	const handleChangeImage = (e) => {
		let timerInterval;

		const formData = new FormData();

		formData.append("image", e.target.files[0]);
		formData.append("uid", uid);
		formData.append("id", image.id);

		Api.post("/user/upload/avatar", formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		}).then((res) => {
			console.log(res);
		});

		Swal.fire({
			title: "Subiendo imagen",
			html: "Por favor espere.",
			timer: 3000,
			timerProgressBar: true,
			didOpen: () => {
				Swal.showLoading();
			},
			willClose: () => {
				clearInterval(timerInterval);
			},
		}).then((result) => {
			/* Read more about handling dismissals below */
			if (result.dismiss === Swal.DismissReason.timer) {
				toast.success("Su avatar ha sido actualizado", {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			}
		});
	};

	const handleCopy = () => {
		const code = document.getElementById("codeReferral").value;
		copy(code);
		toast.success("Codigo Copiado", {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	};

	return (
		<GeneralLayout>
			<Container maxWidth='lg'>
				<Grid container spacing={2}>
					<Grid
						item
						xs={6}
						sx={{
							display: "flex",
							flexDirection: "column",
							border: "1px solid black",
							borderRadius: "5px",
							mt: 5,
						}}
					>
						<Link to='/profile/edit'>
							<Box
								sx={{
									display: "flex",
									justifyContent: "flex-end",
									mr: 3,
								}}
							>
								<Typography
									variant='h6'
									color='primary'
									sx={{ cursor: "pointer" }}
								>
									<Tooltip title='Editar'>
										<i className='fas fa-edit'></i>
									</Tooltip>
								</Typography>
							</Box>
						</Link>
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								flexDirection: "column",
								alignItems: "center",
								mt: 4,
							}}
						>
							<Avatar
								alt={name}
								src={image.url}
								sx={{
									width: "100px",
									height: "100px",
									border: "1px solid black",
									borderRadius: "50%",
								}}
							/>
							<Tooltip title='Cambiar imagen'>
								<Box
									component='div'
									className='file-select'
									sx={{
										display: "flex",
										justifyContent: "center",
										mt: 2,
									}}
								>
									<input
										type='file'
										className='dropzone'
										name='image'
										onChange={handleChangeImage}
									/>
								</Box>
							</Tooltip>
						</Box>

						<Grid
							item
							xs={12}
							sx={{
								display: "flex",
								justifyContent: "center",
								mt: 2,
							}}
						>
							<Box>
								{instagram != null && (
									<IconButton
										component='a'
										href={instagram}
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
								)}

								{facebook != null && (
									<IconButton
										component='a'
										href={facebook}
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
								)}

								{twitter != null && (
									<IconButton
										component='a'
										href={twitter}
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
								)}

								{linkedin != null && (
									<IconButton
										component='a'
										href={linkedin}
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
								)}
							</Box>
						</Grid>
						<Grid container spacing={6} sx={{ padding: 3 }}>
							<Grid item xs={6}>
								<Box sx={{}}>
									<Typography
										sx={{
											fontWeight: "bold",
											fontSize: 13,
										}}
									>
										Nombre:
									</Typography>
									<Typography color='initial'>
										{name} {lastname}
									</Typography>
								</Box>

								<Box sx={{ mt: 3 }}>
									<Typography
										sx={{
											fontWeight: "bold",
											fontSize: 13,
										}}
									>
										Fecha Ingreso:
									</Typography>

									<Typography>
										{moment(createdAt).format("DD/MM/YYYY")}
									</Typography>
								</Box>

								<Box sx={{ mt: 3 }}>
									<Typography
										sx={{
											fontWeight: "bold",
											fontSize: 13,
										}}
									>
										Correo Electronico:
									</Typography>

									<Typography>{email}</Typography>
								</Box>
							</Grid>

							<Grid item xs={6}>
								<Box sx={{ mt: 0 }}>
									<Typography
										sx={{
											fontWeight: "bold",
											fontSize: 13,
										}}
									>
										Telefono
									</Typography>

									<Typography>{phone}</Typography>
								</Box>

								<Box sx={{ mt: 3 }}>
									<Typography
										sx={{
											fontWeight: "bold",
											fontSize: 13,
										}}
									>
										Pais
									</Typography>

									<Typography>{country}</Typography>
								</Box>

								<Box sx={{ mt: 3 }}>
									{/* <Typography
										sx={{
											fontWeight: "bold",
											fontSize: 13,
										}}
									>
										Usuario
									</Typography> */}

									<Typography>
										{type === 4
											? "Promotor"
											: "Profesional de la Salud"}
									</Typography>
								</Box>
							</Grid>
							<Grid
								item
								xs={12}
								sx={{
									display: "flex",
									justifyContent: "space-between",
								}}
							>
								<Box>
									<Typography
										sx={{
											fontWeight: "bold",
											fontSize: 13,
										}}
									>
										Plan:
									</Typography>
									<Typography>
										{plan}{" "}
										<Tooltip title='Gratis'>
											<i
												className='fa-solid fa-medal'
												style={{
													fontSize: 18,
													color: "green",
													cursor: "pointer",
												}}
											></i>
										</Tooltip>{" "}
									</Typography>
								</Box>

								{plan !== "Gratis" && (
									<Box>
										<Typography
											sx={{
												fontWeight: "bold",
												fontSize: 13,
											}}
										>
											Fecha Vencimiento:
										</Typography>
										<Typography>08/22/2020</Typography>
									</Box>
								)}

								<Box sx={{ mt: 2 }}>
									<Link to='/profile/payment'>
										<Typography>
											<Button
												variant='contained'
												size='small'
											>
												Cambiar Plan
											</Button>
										</Typography>
									</Link>
								</Box>
							</Grid>
							<Grid
								item
								xs={12}
								sx={{
									display: "flex",
									justifyContent: "space-between",
								}}
							>
								<Box>
									<Typography
										sx={{
											fontWeight: "bold",
											fontSize: 13,
										}}
									>
										Fondos Disponibles:
									</Typography>
									<Typography
										sx={{
											display: "flex",
											justifyContent: "space-between",
											textAlign: "center",
											alignItems: "center",
											fontWeight: "bold",
											fontSize: 25,
										}}
									>
										<span>$ {balance.toFixed(2)}</span>
										<img src={usdt} alt='usdt' width={30} />
									</Typography>
								</Box>

								{balance != 0 && (
									<Box sx={{ mt: 2 }}>
										<Typography>
											<Button
												variant='contained'
												size='small'
											>
												Solicitar Retiro
											</Button>
										</Typography>
									</Box>
								)}
							</Grid>
						</Grid>
					</Grid>

					<Grid item xs={6}>
						<Grid container spacing={2} sx={{ mt: 1 }}>
							<Grid item xs={9}>
								<Typography color='primary'>
									CODIGO REFERIDO
								</Typography>

								<TextField
									id='codeReferral'
									label=''
									value={code.code}
									size='small'
									disabled
									fullWidth
								/>
							</Grid>
							<Grid
								item
								xs={3}
								sx={{
									mt: 3,
								}}
							>
								<Button
									variant='contained'
									fullWidth
									onClick={handleCopy}
								>
									Copiar
								</Button>
							</Grid>
						</Grid>

						<ReferralsTable referrals={referrals} />

						<SpecialitiesTable my_specialities={my_specialities} />
					</Grid>
					<Grid item xs={6}>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								mt: 1,
							}}
						>
							<Typography color='primary'>MIS RETIROS</Typography>
						</Box>
						<WithdrawalsTable withdrawals={withdrawals} />
					</Grid>
					<Grid item xs={6}>
						<AddressTable addresse={addresses} />
					</Grid>
				</Grid>
			</Container>
		</GeneralLayout>
	);
};
