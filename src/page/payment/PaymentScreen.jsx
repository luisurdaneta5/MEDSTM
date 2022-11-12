import React from "react";
import { GeneralLayout } from "../../layouts/GeneralLayout";
import {
	Box,
	Container,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography,
	Button,
} from "@mui/material";
import usdt from "../../assets/usdt.png";
import pay from "../../assets/BinancePayQR.png";
import { useEffect } from "react";
import { Api } from "../../api";
import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const PaymentScreen = () => {
	const [plans, setPlans] = useState([]);
	const type = localStorage.getItem("type");
	const userId = localStorage.getItem("id");
	const [selected, setSelected] = useState("");
	const [planSelected, setPlanSelected] = useState("");
	const [formValues, handleInputChange] = useForm();
	const [paymentDate, setPaymentDate] = useState(moment());
	const navigate = useNavigate();

	const { binanceUser, transactionId } = formValues;

	useEffect(() => {
		Api.get("/plans/payment", {
			params: {
				type,
			},
		}).then((res) => setPlans(res.data.plans));
	}, []);

	const handleDateChange = (newDate) => {
		setPaymentDate(newDate);
	};
	const handleChange = (e) => {
		const chain = e.target.value.split(" ");

		setPlanSelected(chain[1]);

		setSelected(chain[0]);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		Api.post("/payments/create", {
			userId,
			binanceUser,
			transactionId,
			paymentDate,
			selected,
			planSelected,
		})
			.then((res) =>
				Swal.fire({
					icon: "success",
					title: res.data.message,
					text: "Su pago se encuentra en revision, una vez aprobado sera notificado via correo electronico",
				}).then((res) => {
					if (res.isConfirmed) {
						navigate("/profile");
					}
				})
			)
			.catch((err) => console.log(err));
	};

	return (
		<GeneralLayout>
			<Container
				maxWidth='lg'
				sx={{
					mt: 5,
				}}
			>
				<Grid container spacing={2}>
					<Grid item lg={6}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Box>
								<Typography
									color='primary'
									sx={{
										fontSize: 40,
										textAlign: "center",
										fontWeight: "bold",
									}}
								>
									Para realizar el pago de <br /> tu membresia
								</Typography>
							</Box>

							<Box
								sx={{
									mt: 2,
								}}
							>
								<img src={usdt} alt='usdt' width='100' />
							</Box>

							{selected === "" ? (
								<Box>
									<Typography
										color='primary'
										sx={{
											fontSize: 15,
											textAlign: "center",

											mt: 3,
										}}
									>
										Selecciona el Plan de tu preferencia en
										la parte derecha de la pantalla{" "}
										<i
											className='fa-solid fa-arrow-right'
											style={{
												fontSize: "20px",
												fontWeigth: "bold",
												color: "red",
											}}
										></i>
									</Typography>
								</Box>
							) : (
								<Box>
									<Box>
										<Typography
											color='primary'
											sx={{
												fontSize: 15,
												textAlign: "center",

												mt: 3,
											}}
										>
											Utiliza <strong>Binance Pay</strong>{" "}
											para enviar{" "}
											<strong>
												${selected} Teather USDT
											</strong>
											<br />
											<strong>Asunto</strong>: Membresia{" "}
											{planSelected}{" "}
											{type == 4
												? "Promotor"
												: "Profesional de la Salud"}
											<br />
											<br />
											Llene el formulario con los datos
											del pago:
										</Typography>
									</Box>
									<form onSubmit={handleSubmit}>
										<Box
											sx={{
												mt: 3,
											}}
										>
											<TextField
												id=''
												label='Nombre Usuario BinancePay'
												value={binanceUser}
												onChange={handleInputChange}
												fullWidth
												size='small'
												name='binanceUser'
											/>

											<TextField
												id=''
												label='ID Transaccion'
												value={transactionId}
												onChange={handleInputChange}
												fullWidth
												size='small'
												name='transactionId'
												sx={{
													mt: 2,
												}}
											/>

											<LocalizationProvider
												dateAdapter={AdapterMoment}
											>
												<DesktopDatePicker
													label='Fecha de Pago'
													inputFormat='MM/DD/YYYY'
													value={paymentDate}
													onChange={handleDateChange}
													renderInput={(params) => (
														<TextField
															{...params}
															sx={{
																mt: 2,
															}}
															fullWidth
															name='paymentDate'
														/>
													)}
												/>
											</LocalizationProvider>
											{/* <TextField
												type='date'
												id=''
												value={paymentDate}
												onChange={handleInputChange}
												fullWidth
												name='paymentDate'
												size='small'
												sx={{
													mt: 2,
												}}
											/> */}
										</Box>

										<Box
											sx={{
												display: "flex",
												justifyContent: "center",
											}}
										>
											<Button
												type='submit'
												size='small'
												variant='contained'
												color='secondary'
												sx={{
													color: "white",
													mt: 2,
												}}
											>
												Enviar
											</Button>
										</Box>
									</form>
								</Box>
							)}
						</Box>
					</Grid>

					<Grid item lg={6}>
						<Box>
							<FormControl fullWidth size='small'>
								<InputLabel id='demo-simple-select-label'>
									Seleccione tu Plan
								</InputLabel>
								<Select
									labelId='demo-simple-select-label'
									id='demo-simple-select'
									value={selected}
									label='Selecciona tu Plan'
									onChange={handleChange}
								>
									{plans.map((plan, index) => (
										<MenuItem
											key={index}
											value={
												type == 4
													? plan.price_promotor +
													  " " +
													  plan.name
													: plan.price_professional +
													  " " +
													  plan.name
											}
											sx={{
												color: plan.color,
											}}
											name={plan.name}
										>
											{plan.name}
										</MenuItem>
									))}
								</Select>
							</FormControl>

							<Box
								sx={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<img src={pay} alt='' />
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</GeneralLayout>
	);
};
