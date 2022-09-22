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

export const PaymentScreen = () => {
	const [plans, setPlans] = useState([]);
	const type = localStorage.getItem("type");
	const [selected, setSelected] = useState("");

	useEffect(() => {
		Api.get("/plans/payment", {
			params: {
				type,
			},
		}).then((res) => setPlans(res.data.plans));
	}, []);

	const handleInputChange = (e) => {
		setSelected(e.target.value);
	};

	console.log(selected);
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
											<strong>Asunto</strong>: Membresia
											PLAN Profesional de la Salud
											<br />
											<br />
											Llene el formulario con los datos
											del pago:
										</Typography>
									</Box>

									<Box
										sx={{
											mt: 3,
										}}
									>
										<TextField
											id=''
											label='Nombre Usuario BinancePay'
											//   value={}
											//   onChange={}
											fullWidth
											size='small'
										/>

										<TextField
											id=''
											label='ID Transaccion'
											//   value={}
											//   onChange={}
											fullWidth
											size='small'
											sx={{
												mt: 2,
											}}
										/>

										<TextField
											type='date'
											id=''
											//   value={}
											//   onChange={}
											fullWidth
											size='small'
											sx={{
												mt: 2,
											}}
										/>
									</Box>

									<Box
										sx={{
											display: "flex",
											justifyContent: "center",
										}}
									>
										<Button
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
									onChange={handleInputChange}
								>
									{plans.map((plan, index) => (
										<MenuItem
											key={index}
											value={plan.price_professional}
											sx={{
												color: plan.color,
											}}
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
