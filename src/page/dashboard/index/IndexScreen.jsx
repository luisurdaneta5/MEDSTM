import { useEffect, useState } from "react";
import { DashboardLayout } from "../../../layouts/DashboardLayout";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { Api } from "../../../api";

export const IndexScreen = () => {
	const [meds, setMeds] = useState([]);
	useEffect(() => {
		Api.get(`/users?type=${3}`)
			.then((response) => setMeds(response.data.users[0].count))
			.catch((error) => console.log(error));
	}, []);

	const [promoters, setPromoters] = useState([]);
	useEffect(() => {
		Api.get(`/users?type=${4}`)
			.then((response) => setPromoters(response.data.users[0].count))
			.catch((error) => console.log(error));
	}, []);

	const [request, setRequest] = useState([]);
	useEffect(() => {
		Api.get(`/requests`)
			.then((response) => setRequest(response.data.users[0].count))
			.catch((error) => console.log(error));
	}, []);

	return (
		<DashboardLayout>
			<Grid container spacing={2}>
				<Grid item xs={4}>
					<Paper sx={{ border: "1px solid black" }}>
						<Box
							sx={{
								display: "flex",
								p: 3,
								alignItems: "center",
							}}
						>
							<i
								className='fa-solid fa-user-doctor'
								style={{ fontSize: "50px" }}
							></i>
							<Typography
								sx={{ ml: 5, fontSize: 20, fontWeight: "bold" }}
							>
								MEDICOS
							</Typography>
							<Typography
								sx={{ ml: 5, fontSize: 20, fontWeight: "bold" }}
							>
								{meds}
							</Typography>
						</Box>
					</Paper>
				</Grid>
				<Grid item xs={4}>
					<Paper sx={{ border: "1px solid black" }}>
						<Box
							sx={{
								display: "flex",
								p: 3,
								alignItems: "center",
							}}
						>
							<i
								className='fa-solid fa-user-tie'
								style={{ fontSize: "50px" }}
							></i>
							<Typography
								sx={{ ml: 5, fontSize: 20, fontWeight: "bold" }}
							>
								PROMOTORES
							</Typography>
							<Typography
								sx={{ ml: 5, fontSize: 20, fontWeight: "bold" }}
							>
								{promoters}
							</Typography>
						</Box>
					</Paper>
				</Grid>
				<Grid item xs={4}>
					<Paper sx={{ border: "1px solid black" }}>
						<Box
							sx={{
								display: "flex",
								p: 3,
								alignItems: "center",
							}}
						>
							<i
								className='fa-solid fa-clock'
								style={{ fontSize: "50px" }}
							></i>
							<Typography
								sx={{ ml: 5, fontSize: 20, fontWeight: "bold" }}
							>
								SOLICITUDES
							</Typography>
							<Typography
								sx={{ ml: 5, fontSize: 20, fontWeight: "bold" }}
							>
								{request}
							</Typography>
						</Box>
					</Paper>
				</Grid>
			</Grid>
		</DashboardLayout>
	);
};
