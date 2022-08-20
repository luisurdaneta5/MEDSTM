import { Grid, Typography, TextField, Button, Box } from "@mui/material";
import "./styles.css";

import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
export const LoginScreen = () => {
	return (
		<Grid
			container
			spacing={0}
			direction='column'
			alignItems='center'
			justifyContent='center'
			sx={{
				minHeight: "100vh",
				backgroundColor: "primary.main",
				padding: 4,
			}}
		>
			<Grid
				item
				className='box-shadow'
				xs={3}
				sx={{
					backgroundColor: "white",
					padding: 3,
					borderRadius: 2,
					alignItem: "center",
					justifyContent: "center",
					textAlign: "center",
					width: "40%",
				}}
			>
				<img src={logo} alt='' width={"70%"} />

				<form>
					<Grid container spacing={0}>
						<Grid item lg={12} sx={{ mt: 2 }}>
							<TextField
								label='Correo Electronico'
								type='email'
								fullWidth
								size='small'
								//   value={}
								//   onChange={}
							/>
						</Grid>
						<Grid item lg={12} sx={{ mt: 2 }}>
							<TextField
								label='Contraseña'
								type='password'
								fullWidth
								size='small'
								//   value={}
								//   onChange={}
							/>
						</Grid>
					</Grid>
					<Box sx={{ mt: 2, display: "flex" }}>
						<Typography>
							No tienes una cuenta?{" "}
							<Link to='/join-us' className='link-login'>
								Registrate!
							</Link>
						</Typography>
					</Box>
					<Button
						variant='contained'
						color='primary'
						fullWidth
						size='small'
						sx={{ mt: 2 }}
					>
						Entrar
					</Button>
					<Button
						variant='outlined'
						color='primary'
						fullWidth
						size='small'
						sx={{ mt: 2 }}
					>
						Recuperar Contraseña
					</Button>
				</form>
			</Grid>
		</Grid>
	);
};
