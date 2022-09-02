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

export const SocialNetworkScreen = () => {
	const { phone, id } = useParams();

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
										cambiar las redes sociales de tu cuenta
										de MEDSTM.
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
										value={phone}
										size='small'
										fullWidth
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
										value={phone}
										size='small'
										fullWidth
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
										value={phone}
										size='small'
										fullWidth
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
										value={phone}
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
										color='secondary'
										sx={{
											color: "white",
										}}
									>
										Guardar Cambios
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