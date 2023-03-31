import { Box, Container, Grid, Typography, TextField, Button } from "@mui/material";
import moment from "moment";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Api } from "../../../api";
import { DashboardLayout } from "../../../layouts/DashboardLayout";

export const PaymentDetailScreen = () => {
	const { paymentId } = useParams();
	const [payment, setPayment] = useState({
		user: "",
	});

	const navigate = useNavigate();

	useEffect(() => {
		Api.get("/payments/single", {
			params: {
				paymentId,
			},
		})
			.then((res) => {
				setPayment(res.data.payment);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const { user, amount, transactionId, paymentDate, plan, binanceUser } = payment;
	const { id, name, lastname } = user;

	const handleSucces = (status) => {
		if (status == 1) {
			Swal.fire({
				title: "Estas seguro de aceptar el pago?",
				showCancelButton: true,
				confirmButtonText: "Si, seguro",
				confirmButtonColor: "#018f98",
			}).then((result) => {
				if (result.isConfirmed) {
					Api.put("/payments/setPaymentSucces", {
						id,
						paymentId,
						plan,
						status,
					})
						.then((res) => {
							toast.success(res.data.message);
							navigate("/dashboard/payments");
						})
						.catch((err) => {
							console.log(err);
						});
				}
			});
		} else {
			Swal.fire({
				title: "Estas seguro de rechazar el pago?",
				showCancelButton: true,
				confirmButtonText: "Si, seguro",
				confirmButtonColor: "#018f98",
			}).then((result) => {
				if (result.isConfirmed) {
					Api.put("/payments/setPaymentSucces", {
						id,
						paymentId,
						plan,
						status,
					})
						.then((res) => {
							toast.success(res.data.message);
							navigate("/dashboard/payments");
						})
						.catch((err) => {
							console.log(err);
						});
				}
			});
		}
	};

	return (
		<DashboardLayout>
			<Container maxWidth='lg'>
				<Box sx={{ mb: 5 }}>
					<Typography variant='h6' componet='div'>
						Detalles de pago
					</Typography>
				</Box>
				<Box>
					<Grid container spacing={2}>
						<Grid item lg={6}>
							<label>Nombre:</label>
							<TextField id='' label='' value={name + lastname} fullWidth disabled />
						</Grid>
						<Grid item lg={6}>
							<label>Binance User:</label>
							<TextField id='' label='' value={binanceUser} fullWidth disabled />
						</Grid>
						<Grid item lg={4}>
							<label>Monto:</label>
							<TextField id='' label='' value={amount} fullWidth disabled />
						</Grid>
						<Grid item lg={4}>
							<label>Plan:</label>
							<TextField id='' label='' value={plan} fullWidth disabled />
						</Grid>
						<Grid item lg={4}>
							<label>Fecha de pago:</label>
							<TextField id='' label='' value={moment(paymentDate).format("LLL")} fullWidth disabled />
						</Grid>
						<Grid item lg={12}>
							<label>Transaccion:</label>
							<TextField id='' label='' value={transactionId} fullWidth disabled />
						</Grid>
					</Grid>
				</Box>
				<Box
					sx={{
						mt: 2,
						display: "flex",
						justifyContent: "center",
						alignContent: "center",
						alignItems: "center",
					}}
				>
					<Button variant='contained' color='primary' onClick={() => handleSucces(1)}>
						ACEPTAR
					</Button>
					<Button variant='contained' color='error' sx={{ ml: 2 }} onClick={() => handleSucces(2)}>
						RECHAZAR
					</Button>
				</Box>
			</Container>
		</DashboardLayout>
	);
};
