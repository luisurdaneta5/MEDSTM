import {
	Box,
	Container,
	Grid,
	Typography,
	Button,
	TextField,
} from "@mui/material";

import "../styles.css";
import { useParams } from "react-router-dom";
import { GeneralLayout } from "../../../layouts/GeneralLayout";

export const ChangeEmailScreen = () => {
	const { email, id } = useParams();

	return (
		<GeneralLayout>
			<Container maxWidth='sm'>
				<Grid container spacing={2} sx={{ mt: 2 }}>
					<Grid item xs={12}>
						<Typography
							sx={{
								fontSize: "25px",
								mt: 2,
							}}
						>
							Modifica tu dirección de correo electrónico
						</Typography>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								border: "1px solid #e0e0e0",
								borderRadius: "5px",
								p: 2,
								mt: 2,
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
										Dirección de correo electrónico actual:
										<br />
										luis.urdaneta488@gmail.com
										<br />
										<br />
										Escribe a continuación la nueva
										dirección de correo electrónico con la
										que deseas asociar tu cuenta. Enviaremos
										un código de verificación a esa
										dirección.
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
										Nueva dirección de correo electrónico
									</Typography>
									<TextField
										id=''
										label=''
										value={email}
										size='small'
										fullWidth
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
										fullWidth
										color='secondary'
										sx={{
											color: "white",
										}}
									>
										Continuar
									</Button>
								</Box>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</GeneralLayout>
	);
};
