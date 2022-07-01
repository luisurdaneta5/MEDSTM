import { DashboardLayout } from "../../../layouts/DashboardLayout";
import { Box, Grid, Paper, Typography } from "@mui/material";

export const IndexScreen = () => {
	return (
		<DashboardLayout>
			<Grid container spacing={2}>
				<Grid item xs={6}>
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
								sx={{ ml: 5, fontSize: 30, fontWeight: "bold" }}
							>
								MEDICOS 20
							</Typography>
						</Box>
					</Paper>
				</Grid>
				<Grid item xs={6}>
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
								sx={{ ml: 5, fontSize: 30, fontWeight: "bold" }}
							>
								PROMOTORES 20
							</Typography>
						</Box>
					</Paper>
				</Grid>
			</Grid>
		</DashboardLayout>
	);
};
