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

export const ChangePhoneScreen = () => {
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
							Cambiar número de teléfono móvil
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
										Al inscribir un número de celular,
										aceptas recibir notificaciones de
										seguridad automatizadas a través de
										mensaje de texto de MEDSTM. Pueden
										aplicarse tarifas por mensajes y datos.
										La frecuencia de los mensajes varía.
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
										Nuevo Movil
									</Typography>
									<TextField
										id=''
										label=''
										value={phone}
										size='small'
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