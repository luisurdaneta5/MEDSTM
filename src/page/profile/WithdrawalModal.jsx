import { Box, Button, Modal, TextField } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Api from "../../api/Api";
import { useForm } from "../../hooks/useForm";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

export const WithdrawalModal = ({ handleClose, open, setOpen }) => {
	const { uid } = useSelector((state) => state.auth.user);
	const [formValues, handleInputChange] = useForm("");

	const { wallet, amount } = formValues;

	const handleSubmit = (e) => {
		e.preventDefault();

		Api.post("/withdrawals/create", {
			userId: uid,
			wallet: wallet,
			amount: amount,
		})
			.then((res) =>
				toast.success(res.data.message, {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				})
			)
			.catch((err) =>
				toast.error(err.response.data.message, {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				})
			);
	};

	return (
		<Box>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<form onSubmit={handleSubmit}>
					<Box sx={style}>
						<TextField
							id=''
							label='Binance Pay ID'
							value={wallet}
							onChange={handleInputChange}
							name='wallet'
							placeholder='Ingrese Binance Pay ID'
							size='small'
							fullWidth
						/>
						<TextField
							id=''
							type='number'
							label='Monto de retiro'
							value={amount}
							onChange={handleInputChange}
							name='amount'
							placeholder='Monto de retiro'
							size='small'
							fullWidth
							sx={{
								mt: 2,
							}}
						/>
						<Box
							sx={{
								display: "flex",
								mt: 2,
								justifyContent: "flex-end",
							}}
						>
							<Button
								variant='contained'
								color='primary'
								size='small'
								type='submit'
							>
								Solicitar
							</Button>
						</Box>
					</Box>
				</form>
			</Modal>
		</Box>
	);
};
