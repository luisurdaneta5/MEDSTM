import { GeneralLayout } from "../../layouts/GeneralLayout";
import {
	Container,
	Box,
	Grid,
	TextField,
	Button,
	Divider,
	Typography,
} from "@mui/material";
import img from "../../assets/contactanos.jpg";
import "./styles.css";
export const ContactScreen = () => {
	return (
		<GeneralLayout>
			<Container maxWidth='lg' sx={{ mt: 4 }}>
				<Box>
					<Box sx={{ display: "flex", alignItems: "center", mt: 6 }}>
						<Typography variant='h5' sx={{ fontWeight: 800 }}>
							Permítenos ayudarte Contáctanos
						</Typography>
						<Divider
							sx={{
								ml: 2,
								width: "80px",
								borderColor: "primary.main",
								borderWidth: "2px",
							}}
						/>
					</Box>
					<Grid container spacing={2} sx={{ mt: 3 }}>
						<Grid item lg={6}>
							<form>
								<Grid container spacing={2}>
									<Grid item lg={6}>
										<TextField
											id=''
											label='Nombre'
											size='small'
											fullWidth

											//   value={}
											//   onChange={}
										/>
									</Grid>
									<Grid item lg={6}>
										<TextField
											id=''
											label='Correo Electronico'
											size='small'
											fullWidth

											//   value={}
											//   onChange={}
										/>
									</Grid>
									<Grid item lg={12}>
										<TextField
											id=''
											label='Asunto'
											size='small'
											fullWidth

											//   value={}
											//   onChange={}
										/>
									</Grid>
									<Grid item lg={12}>
										<TextField
											id=''
											label='Mensaje'
											size='small'
											fullWidth
											multiline
											rows={8}

											//   value={}
											//   onChange={}
										/>
									</Grid>
									<Grid item lg={12}>
										<Button
											variant='contained'
											color='primary'
											fullWidth
										>
											enviar
										</Button>
									</Grid>
								</Grid>
							</form>
						</Grid>
						<Grid item lg={6}>
							<img
								src={img}
								alt=''
								width='100%'
								className='img-border'
							/>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</GeneralLayout>
	);
};
