import {
	Box,
	Container,
	Grid,
	Typography,
	Button,
	TextField,
} from "@mui/material";

import "../styles.css";
import { Link, useParams } from "react-router-dom";
import { GeneralLayout } from "../../../layouts/GeneralLayout";
import { useEffect, useState } from "react";
import { Api } from "../../../api";
import { toast } from "react-toastify";

export const SocialNetworkScreen = () => {
	const { id } = useParams();
	const [data, setData] = useState([]);

	const { facebook, instagram, twitter, linkedin } = data;

	const handleInputChange = ({ target }) => {
		setData({
			...data,
			[target.name]: target.value,
		});
	};

	useEffect(() => {
		Api.get("/social/getSocial", {
			params: {
				id,
			},
		})
			.then((res) => setData(res.data.data))
			.catch((err) => console.log(err));
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		Api.put("/social/updateSocial", {
			id,
			facebook,
			instagram,
			twitter,
			linkedin,
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
			})
			.catch((err) => console.log(err));
	};

	return (
		<GeneralLayout>
			<Container maxWidth='sm'>
				<form onSubmit={handleSubmit}>
					<Grid container spacing={2} sx={{ mt: 2 }}>
						<Grid item xs={12}>
							<Typography
								sx={{
									fontSize: "25px",
									mt: 2,
								}}
							>
								Redes Sociales
							</Typography>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									border: "1px solid #e0e0e0",
									borderRadius: "5px",
									p: 2,
									mt: 1,
								}}
							>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
									}}
								>
									<Box>
										<Typography
											sx={{
												fontSize: "13px",
											}}
										>
											Utiliza el siguiente formulario para
											cambiar las redes sociales de tu
											cuenta de MEDSTM.
										</Typography>
									</Box>
									<Box
										sx={{
											mt: 2,
										}}
									>
										<Typography
											sx={{
												fontSize: "15px",
												fontWeight: "bold",
											}}
										>
											Facebook:
										</Typography>
										<TextField
											id=''
											label=''
											size='small'
											fullWidth
											value={facebook}
											name='facebook'
											onChange={handleInputChange}
										/>
									</Box>
									<Box
										sx={{
											mt: 3,
										}}
									>
										<Typography
											sx={{
												fontSize: "15px",
												fontWeight: "bold",
											}}
										>
											Instagram:
										</Typography>
										<TextField
											id=''
											label=''
											size='small'
											fullWidth
											value={instagram}
											name='instagram'
											onChange={handleInputChange}
										/>
									</Box>
									<Box
										sx={{
											mt: 3,
										}}
									>
										<Typography
											sx={{
												fontSize: "15px",
												fontWeight: "bold",
											}}
										>
											Twitter:
										</Typography>
										<TextField
											id=''
											label=''
											size='small'
											fullWidth
											value={twitter}
											name='twitter'
											onChange={handleInputChange}
										/>
									</Box>

									<Box
										sx={{
											mt: 3,
										}}
									>
										<Typography
											sx={{
												fontSize: "15px",
												fontWeight: "bold",
											}}
										>
											Linkedin:
										</Typography>
										<TextField
											id=''
											label=''
											size='small'
											fullWidth
											value={linkedin}
											name='linkedin'
											onChange={handleInputChange}
										/>
									</Box>
									<Box
										sx={{
											mt: 3,
										}}
									>
										<Button
											variant='contained'
											size='small'
											color='secondary'
											sx={{
												color: "white",
											}}
											type='submit'
										>
											Guardar Cambios
										</Button>
									</Box>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</form>
			</Container>
		</GeneralLayout>
	);
};
