import { GeneralLayout } from "../../layouts/GeneralLayout";
import { Container, Box, Grid, Divider, Stack, Pagination, PaginationItem } from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNoticesData } from "../../store/slices/ui";

export const BlogScreen = () => {
	const dispatch = useDispatch();

	const { notices, page, isLoading, totalpages } = useSelector((state) => state.ui);

	useEffect(() => {
		dispatch(getNoticesData());
	}, [dispatch]);

	const handlePagination = (page) => {
		const pageNumber = page - 1;
		dispatch(getNoticesData(pageNumber));
	};
	return (
		<GeneralLayout>
			<Container maxWidth='lg' sx={{ mt: 4 }}>
				{isLoading ? (
					<div>Loading...</div>
				) : (
					notices.map((notice, index) => (
						<Box key={index}>
							<Divider />
							<Box sx={{ padding: 5 }}>
								<Grid container spacing={2}>
									<Grid item lg={4}>
										<Box>
											<img src={notice.image} alt='binance' width='100%' style={{ borderRadius: "5px" }} />
										</Box>
									</Grid>
									<Grid item lg={8}>
										<Box sx={{ mt: -2 }}>
											<h3>{notice.title}</h3>
											<Box
												component='div'
												dangerouslySetInnerHTML={{
													__html: notice.content,
												}}
											></Box>
										</Box>
									</Grid>
								</Grid>
							</Box>
						</Box>
					))
				)}

				<Divider />
				<Stack spacing={2} sx={{ mt: 4, alignItems: " center" }}>
					<Pagination
						onChange={(e, value) => {
							handlePagination(value);
						}}
						count={totalpages}
						variant='outlined'
						color='primary'
						hideNextButton={false}
						hidePrevButton={false}
					/>
				</Stack>
			</Container>
		</GeneralLayout>
	);
};
