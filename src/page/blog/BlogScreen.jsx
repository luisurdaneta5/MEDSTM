import { GeneralLayout } from "../../layouts/GeneralLayout";
import {
	Container,
	Box,
	Grid,
	Divider,
	Stack,
	Pagination,
	PaginationItem,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import administadores from "../../assets/administradores.png";
import binance from "../../assets/binance.png";
export const BlogScreen = () => {
	return (
		<GeneralLayout>
			<Container maxWidth='lg' sx={{ mt: 4 }}>
				<Box>
					<Divider />
					<Box sx={{ padding: 5 }}>
						<Grid container spacing={2}>
							<Grid item lg={4}>
								<Box>
									<img
										src={administadores}
										alt='binance'
										width='100%'
										style={{ borderRadius: "5px" }}
									/>
								</Box>
							</Grid>
							<Grid item lg={8}>
								<Box sx={{ mt: -2 }}>
									<h3>MEDS TM</h3>
									<span>
										Estamos contratando administradores de
										sitio web.
										<br />
										Requisitos:
										<ul>
											<li>Computadora</li>
											<li>Internet</li>
											<li>Tiempo (a convenir)</li>
											<li>Cuenta Binance</li>
										</ul>
									</span>
								</Box>
							</Grid>
						</Grid>
					</Box>
				</Box>
				<Box>
					<Divider />
					<Box sx={{ padding: 5 }}>
						<Grid container spacing={2}>
							<Grid item lg={4}>
								<Box>
									<img
										src={binance}
										alt='binance'
										width='100%'
										style={{ borderRadius: "5px" }}
									/>
								</Box>
							</Grid>
							<Grid item lg={8}>
								<Box sx={{ mt: -2 }}>
									<h3>BINANCE</h3>
									<span>
										Comprar/Vender Bitcoin, Ether y Altcoin
										- Binance
									</span>
								</Box>
							</Grid>
						</Grid>
					</Box>
				</Box>
				<Divider />

				<Stack spacing={2} sx={{ mt: 4, alignItems: " center" }}>
					<Pagination count={10} variant='outlined' color='primary' />
				</Stack>
			</Container>
		</GeneralLayout>
	);
};
