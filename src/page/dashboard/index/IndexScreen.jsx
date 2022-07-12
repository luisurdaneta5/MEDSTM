import { useEffect, useState } from "react";
import { DashboardLayout } from "../../../layouts/DashboardLayout";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { Api } from "../../../api";

export const IndexScreen = () => {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		Api.get("/user/requests/inactive")
			.then((response) => {
				setUsers(response.data.data);
			})
			.catch((e) => {
				console.log(e);
			});
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
								20
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
								20
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
								{users.length}
							</Typography>
						</Box>
					</Paper>
				</Grid>
			</Grid>
		</DashboardLayout>
	);
};
