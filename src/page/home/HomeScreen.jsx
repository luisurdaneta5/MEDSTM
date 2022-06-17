import { useState } from "react";
import {
	Box,
	FormControl,
	IconButton,
	InputAdornment,
	OutlinedInput,
	Paper,
	Typography,
	Container,
	Divider,
	Grid,
	Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HighlightOffTwoToneIcon from "@mui/icons-material/HighlightOffTwoTone";
import { GeneralLayout } from "../../layouts/GeneralLayout";
import "./styles.css";
import { useForm } from "../../hooks/useForm";
import map from "../../assets/map.png";
import { ReactWorldCountriesMap } from "react-world-countries-map";

export const HomeScreen = () => {
	const data = [
		{ country: "cn", value: 1 }, // china
		{ country: "in", value: 1311559204 }, // india
		{ country: "us", value: 331883986 }, // united states
		{ country: "id", value: 264935824 }, // indonesia
		{ country: "pk", value: 210797836 }, // pakistan
		{ country: "br", value: 210301591 }, // brazil
		{ country: "ng", value: 208679114 }, // nigeria
		{ country: "bd", value: 161062905 }, // bangladesh
		{ country: "ru", value: 141944641 }, // russia
		{ country: "mx", value: 127318112 }, // mexico
		{ country: "ve", value: 30000000000 }, // mexico
	];

	const [formValues, handleInputChange, reset] = useForm({
		search: "",
	});

	const [icon, setIcon] = useState(false);

	const handleViewSearch = () => {
		setIcon(true);
	};

	const handleClearSearch = () => {
		setIcon(false);
		reset();
		console.log("Busqueda reiniciada");
	};

	const { search } = formValues;
	return (
		<GeneralLayout>
			<Box
				className={"box-img"}
				sx={{
					height: "550px",
					backgroundImage: {
						xl: `url(src/assets/meds-xl.png)`,
						lg: `url(src/assets/meds-lg.png)`,
					},
				}}
			>
				<Box className='box-position'>
					<Paper
						className='paper-st'
						sx={{
							backgroundColor: "primary.main",
						}}
					>
						<Typography variant='h5' color='white'>
							ENCUENTRA TU MEJOR DOCTOR <br /> DONDE QUIERA QUE
							ESTES
						</Typography>

						<Typography sx={{ mt: 3 }}>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Quo consequatur porro nulla dolore nesciunt
							expedita, nam atque qui a ex. Hic, nobis voluptatem.
							Eum, expedita. Officia, officiis. Consequuntur, ut
							consequatur.
						</Typography>
						<form>
							<Box sx={{ mt: 3 }}>
								<FormControl fullWidth variant='outlined'>
									<OutlinedInput
										type='text'
										value={search}
										name='search'
										placeholder='Buscar...'
										startAdornment={
											<InputAdornment position='start'>
												<SearchIcon />
											</InputAdornment>
										}
										endAdornment={
											icon && (
												<InputAdornment position='end'>
													<IconButton
														onClick={
															handleClearSearch
														}
													>
														<HighlightOffTwoToneIcon />
													</IconButton>
												</InputAdornment>
											)
										}
										size='small'
										autoComplete='off'
										onChange={handleInputChange}
										onFocus={handleViewSearch}
									/>
								</FormControl>
							</Box>
						</form>
					</Paper>
				</Box>
			</Box>

			<Container maxWidth='lg'>
				<Box sx={{ display: "flex", alignItems: "center", mt: 6 }}>
					<Typography variant='h5' sx={{ fontWeight: 800 }}>
						Encuentre médicos en cualquier parte del Mundo
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
				<Typography>
					Tenemos Medicos de todas partes del mundo al alcanze de un
					solo click...
				</Typography>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
					className='SizeMap'
				>
					<ReactWorldCountriesMap
						tooltipBgColor='#ff8304'
						color='#018f98'
						value-suffix='Medicos'
						size='responsive'
						data={data}
					/>
					{/* <img src={map} alt='' width='70%' /> */}
				</Box>
			</Container>

			<Box
				sx={{
					backgroundColor: "primary.main",
					mt: 2,
					padding: "60px",
				}}
			>
				<Container maxWidth='lg'>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={9}>
							<Typography
								color='white'
								sx={{
									fontSize: "28px",
									fontWeight: 600,
								}}
							>
								Es un Medico apasionado y puede brindar
								servicios de <br />
								clase mundial ?
							</Typography>
							<Divider
								sx={{
									borderColor: "white",
									borderWidth: "1px",
									width: "100%",
									mb: 1,
								}}
							/>
							<Typography sx={{ color: "white" }}>
								There are many variations of passages of Lorem
								Ipsum available, but the majority
								<br /> have suffered Lorem Ipsum
							</Typography>
						</Grid>
						<Grid
							item
							xs={12}
							sm={3}
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<Button
								variant='contained'
								sx={{
									backgroundColor: "white",
									color: "primary.main",
									"&:hover": {
										backgroundColor: "black",
										color: "white",
									},
								}}
							>
								Registrate Ahora
							</Button>
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Box sx={{ mb: 8 }}>
				<Container maxWidth='lg'>
					<Box sx={{ display: "flex", alignItems: "center", mt: 6 }}>
						<Typography variant='h5' sx={{ fontWeight: 800 }}>
							Encuentre médicos por Departamentos
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
					<Typography>Explicacion de esta seccion</Typography>
					<Box sx={{ mt: 4 }}>
						<Grid container spacing={2}>
							<Grid item xl={3} lg={3}>
								<Box className='keep draw'>
									<Box
										sx={{
											display: " flex",
											flexDirection: "column",
											justifyContent: "center",
											alignItems: "center",
										}}
									>
										<img
											src='https://bfesteticadental.com/wp-content/uploads/2017/06/Odontologia-Caracas-Venezuela-BF-Estetica-Dental-1024x682.jpg'
											alt=''
											width='260px'
											height='163px'
										/>
										<Typography sx={{ mt: 1 }}>
											Odontologia
										</Typography>
									</Box>
								</Box>
							</Grid>
							<Grid item xl={3} lg={3}>
								<Box className='keep draw'>
									<Box
										sx={{
											display: " flex",
											flexDirection: "column",
											justifyContent: "center",
											alignItems: "center",
										}}
									>
										<img
											src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBgVFRUYGRgaGhgZHBoZGhgaHBwaGRgaGRgYGRgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHhISHzErJSs0NDQ0NDY0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALcBFAMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAABAMFAQIGB//EAD4QAAIBAgQDBQUFBwIHAAAAAAECAAMRBBIhMQVBUSJhcYGRBhMyobEUQlLB0RVicoKS4fBD8RYjM6KywtL/xAAZAQADAQEBAAAAAAAAAAAAAAAAAgMBBAX/xAAlEQACAgICAgIDAAMAAAAAAAAAAQIRAyESMUFRE2EEIjIjQoH/2gAMAwEAAhEDEQA/APZoQhAAhCEACEIQAIQhAAhCEAFOJm1F/wCBh6i08S40Qarag2NunPUjmZ7Pxy/uHsLmwsDrc3FhPIeK0CaoPXzHee7wiT/keH9DHCKWl+s6DDU7SqwNgBL3DrOKXZ3rosMPpHacUpiN040SchpZrV1GW5F9yNwOdunS/fBTM0j2vL6nX6COTJkAAAFgBoLdIM0z/m0IARMe4xPEAnZTfkdN+/XaPMItVNucSRSIiz3F+sr8QkeQ3DW5M/8A5E/nFa8VjI53HU7XEd9mKRzhxY/1D8rEa7XH1mmOS4No7wHDXUHOR2tRpuNRcde+Xw9kcx6CDpMyubiaiwUX5X2E1/aR/CPUy3yR9kFjl6LOErf2nbdfnN/2kOhhzj7D45eh+ZiA4kt9QRHVN4yafQrTXZtCEJpgQhCAGJFUrKvxMBfa5A+s5/Eccdmy01yjUXOreIGw+chSnrmJuTuTqfMybyLwVWJ+Tq4Sp4Xihla57KkAHyvYfL1kh4jr8OnedfppG5qrFcHbRZQkOHrBxceBHSTTU7E6MwhCaAQhMQAixA7Dfwn6TyriJz3cdSNzpc6/I7crz0Cp7Q0ldlbMAtwWtcab6DX5Tg8RUVmIQ3Qt2Tyy62t6xJNNOikU1JWL4Uy/wjXiGJwoXWM4F5xyVM7Yu0XdIRmnK5MWg0zD1jtGup2IjISSY2IZrMD5Hztr6ges0VxNowlDOaYJiy1CNDcjkeY8evjv9ZL71fxD1mWFGWWQ1FAubem/lJGcRatWU7kC3fMZqbRQ13ejctSBDMWLLmfc31ClSvT4XHeJSU8U/wB2pmHRtfLXWdfUxSfjX1ERxNGnU3VW79L/ANQ1mP6Kw/V7XZQri9e2htzKanyBt9Z0PBEWojGkCFBtcizM1hy52Fu6c9iuD1E1Rxb8J1HhrLf2axbolnUXzNtzGm36TY/ZuRJK12O4rCVRqpzW+6dD5cjI6XFgvZfst0Ohl1Sqo9iPHXr0iPF+GU64ysoPfsQedjMlGtpixnepISTHZ2JU3ANvPn9ZYYepc68jaUOHwD4ZSqi6Aki19Lm+o8ZPSxwCgk98RSplHHktHRVEFtJPw7G2ORvI/lFcJiA66axfFU+YllKto5nC/wBWdRCU/DOJXsjnXkfyMuJ0xkpK0csouLpmYTEzGMOPwGVQWbcne2hPcYpxDGOze6o2zndj8KL+I9T0HP1hxTiCsFVCDbRQCNf3jbYdfISThdMILEHMTckggk9dZxy9I9NLXJr/AIWmEohEVb3yjc8yd2PeTIsRiApHXkIvxDiiUlJY2A1/wDeK8OxOZs7DU7A8hyHjBv0IoN3JlzSrOoJBtcD5X/WLLXbNfM1+tzGqlRcobrKfH8RUdlRdjoBzmuVCRhyfR1fDsVnXXcGx/WOTk8BWdVNmOpubW3tbxtLzh2Mz9k/EBfxHX5iXhO9MhkxONtdFjMTMxKETzbilNlr1EOoLHQ9CdPkQZU8MQh7WHZNvQm09A9o+HKy+9A7S2vbmL6fOczSw2t++c1OLaOzlGcE/RNjEuvlKdcKx+JzboNJbYsm9hOf4y7opIB8v1k5O2UgqVk1bD0F+J7Hxi9J0vanXBPTNKNeCvVovWY3Iy6XPZBOrHr9BF8NwCqSgyKMxNiKitnu3ZAQarbW5v6WlFhtdiS/I4uqOwp42uh+IkeRnS8Kx5de1vOLbAVcM+Rmup+Ek3/l/v/vL3hmIbMAZNpxZS1KNnUZ4nxLFlEuu8cWn2bznOKVXzWEGxIpNiD4muxuXIHebfKKVMZSU/wDMrr3gEfrMHhr4h/dlrDn4dP7yj4r7KslV1LU1AuAKgfYnsMmQamw56b7nZ4Y+XZmTLxdJHUUKmFfapfzj1HBoDdHPrOMX2TAoe8uVa5ysNCRYakc1vePezq1bi5NvMwlBRCGRyR3WH4ah1Zi37uw8+sTxWGu45KrXIGm1iBbyEawlQ6XjWLTVQo1cgTY1WhW5OX7MoRxN6JtUGW5+IAlfPpLbA8TDbkG/Md8Vxz5WZGGoP+xHdEnwKhC6DI2h7JFjfqsk7TOilJHTmorSBuHI+pVT4gTm+F8YzEoxs6nUX6cxOvwdcMosZtKTpkpXHoxRoBBYADwFpiql41aaOsbjSJ8rZV1actuFY/MMjHtDY/iH6xOqkWqJzGhixk4OzZRUlTOqhOdp8bdRYgE9YS/zRI/DP0cX7I4mm7vdhnU3AbfJbcDnY39RLP2h42lNQ17clH3mPhyUdZzmL9kKubMjDqNSCPA2i/8Aw3iL5n7TdSc1+7XWRulR6FJyse4ZXOIqXcg2GYDkNQAfK86evhVRAy33A3375wBqPhnzoMji4KMOyQd7jmNtp0eE4ji8UAFoLT0/6jFio71Q6k+doeBnba9GvG/aBafYDgORpfW3eYtwfGUlqhmd2d1IOe2XkbIRbQ+F9JdcM9k6SMXcF6l7l31N+oGy+UtcZwak62bS3Pp5wqwU4LTJXxq5Bl8PASP2fxYqYjssCEVs1uV7AA+oiX/DaOuU1ahU8gSPmN5WLTXDVSi3pMACGpkkMp2zITrqNbHltNUqeyfBTTjFnp8zOQwPtHVUXdVqqN2paMP4kP8AaX/D+LUa3wOCfw7MP5Tr57TpjNPo4cmGcO0O1aYKkHYgj1nH4ZLMyEagn5G35GdnOW4qhp1wxHZbY95IBHje584uReQxPtFYPjIMcr4JXQqQNRaL4qmRUawuBdj3DeT0sRVI7OHdvEol/DMRecj1I6b0iqw2Bq4c2QBlN7g7a8uojmGolCWTDoj/AIgR42HZ08o2ccy/9TD1UHNuxUUeJRiR6R6mysLqQY6l9iupbaKt+Gioc9UEnpcjxkD4cAggc5eVCAJW1d/OZIeLbLegOxKn3QLnxlxh/gladGPjBroWPk1fBLfMiKG62185BifeEDNTSpb8VzyO1787S0p6iSGnGTroxv2cpiMHiK5s5yroQB8wev8AeWeD4etNbAS393FMS4EyTNTvSFkHaEt8NSzVlPJFY+eg/M+kqcH2nE6DhVNgpZhbNr38zf5ymJWTyuiTGcPpVbZ0DW2Ox9RrOCx3Bq4LBKmouLWE9JnNe0oNMiqptfssLdNj6fSPkjqxMM6lR5TjeG16VYOwN73zDYnp6TtuD4/a7b9xjSqlRczMrAgkjmP1lvQ4SlfC0xbIyiysBqLMRtzBtc+N5FRctHTkkoqxijiLiSl5y+IethjlqC45MNVI6g/lGKHG1M22tMnV7RfMt4pWWRUeIq3ONKQ0V7Ba7K/3R6Qln7oTMXgNzI1prIsSoANt9gOp6THvf875LTXUX5DTxMZ7BaK6nwgMVZwHYG4uBZT3eHWWqUFUWEDUAiGO4iEFucEkjXKUmSYrEBdz3+Mr0qvWbIlr7m/IX3boPGJUBUxNTKotzLHkOp6fWdtwvhyUEyrvzY7k9T+keEG3fgWc1BV5E04M4/1z/Tt4HNNMR7M0aq2rDO17hxdWG2xB20227pewl+KOb5Jezg8X7J4ikc1B/eAbKxy1B3Bx2W87SorYmzZa6FXH4h7t/FX+FvH5z1KL4vB06q5aiK46MAfMX2PfJvEn0dEPy5L+tnGYLj9SkCTVDIouVq6OALfC1+0fM7bS/r8Zw9SkpuHzkBV5k2JvpqAACS3K3XSKn2URcwoVXphrdkgVF53BV73U32Mj9nuEAe+YhLqWopkBCqqnNUyBiSt6ha4vbsC1piU1oTJKEpWlRNh8Xna5todBbbw/y8czbfXpKFSVcrLfD1M2kgpPyWcUuh8WMSxPC8t3o6NuU2Vv/lu/16humJNnlaTWyLtPRQfaQy39QdwRoQRyMXWqGbSb8ZpZKhZdnAJHRl0v5i39MSw1g4Mjuzpik1Z0lL4ZWVXsdZZ0nGXeVGNIvHfQkVtj2Ha8clXgW1IlgWgjJLZrWewlLiq9zH8VV0lUKeZojdseKS2y39nqN2zHYTppWcIpZV8NPM7yznZBUjiySuTYSt4zhyyXUXI1t1B0P6yygYzVqhYvi7OM4Zg6YrAFFIqAgqRsRrcdNiPAzr6SBQAAAALADYAbCKUOGItQ1BfMb7nQX3sOUfiwjxWymWam7QjxTAishS5U7hhyP5jqJ59xLhz0TZ0seTLs3eLaeWhnp8hxGHWopVlDKdwYThyFhPieVU65XneWWH4wRvOmr+yNBjcF17gQR8wTIMT7GoR2HYH96xHqALSPxSLvLFlcnGtN4SF/ZTEg2AUjrmH5i8JnCQc4EtHGdTGBxMAy2p+y1Ebs7eLAfQRhPZ7Dj7l/FmP5xviZvzROercSBHZ3m+C9n6lYhqpKLyH3j5cvP0nV4fA00+FAO+2vqdYzGji9k5Z3/roWweDSkuVBYfMnqTzMZhCWIN3tmYQhAAhCEAMRDhdgKiAWy1al993b3t9eoqA+cflc7e7r3Pw1QFvyFRb2v/Eun8gG5EV+zSi43QszEbjtDvB1tM4DECwOmsteO0dFb+U+B2nOU3yNbUjcTjyLjI7sT5ROjV5s1SV2GxQbSTVKotNUtCuOyt4oS7ZRyBPnoP8A2lHWd1NrS/puNT1+g5+ZJ8QAeciq4YE7RSkXQjSx7KLExR6tQt3fOWD4Ml9o2mCA5TRm0iXg9NspZtzHqjSOmwAtNKrzX0Se2KYl5jCLreQ4hrmP8MoFmAhBWwm6idDgEsg6nWMzAFpmdqOEzCEIAEIQgAQhCABCEIAEIQgAQhCABCEIAEIQgAQhCABCEIAEXxNBXUqwupFiP0I1B5gja0YhACnqUagU03BqodAwtnHTOuga2naHpzlC2GdTlZW7jY+s7WYtIzxcvJWGVw8HDMMh135AXJPWwFyfSavi2sQRbuv2j42+EeebfRdDLbjeEZTfMxQ8iSbd0oGNjOZxcXR1xlzViOI4wyNqjnvAFvltMftp2HwOB1Cn8tY+QOYvGMM4U8rdI0aLRorU9pmUWIPddGv9JheMOxuiu3U5GA+YEvVroSO0NOttNu7ummIxIY6EeXzj6C16KqlxxycvunP8tvmTLJKxYXIt3Gao4E1epJya8E5V4NgLmdVwjD5VuRqfpOewCgEM+xIAHUnkJ2IEvhjWzlzS8G0IQlznCEIQAIQhAAhCEACEIQAIQhAAhCEACEIQAIQhAAhCEACEIQAIQhAAhCEAKzjrWotbfS3iNbegM4l6gcXGnUdPDqJ1HtPigDTS+5LHwtYfUzjrENpObM9nXgWhtEvGEwTGJ0qljLbCYsDeQLtutCr8OflMLgnH+b+HWWv2nMQq2udbnZQN2PXcac/UicYlEvY+LG1z/npGpCcpdJFR+z36fQfI2kTAITmvpysbnuHKbcT4yNl1/wA3lLnd2uxNonJXoqscmrbLXB1i9VSdANhyA/Wd5hamZA3Uf7zzmniPduTbsWF/3dBdh3X3HTbax7T2fr5kK9CfQ/4fWdOGRyZ4suYQhOg5ghCEACEIQAIQhAAhCEACEIQAIQhAAhCEACEIQAIQhAAhCEACEIQAxNWYAXOgEw7BRcmwE5vj3FCUIXQHQdT3n9IspJIaMXJ0ig43j/eYgsPhHZXwH97nziyG5irbyeidZxylbO6EVFUTOk1DkRlVvNWpTBrIqLOTnUkXuPJSR+RPnNvsrH4iY7glApgdLjzDGDC/IycuykOkInCr0m6UiSANr/KOU8MWOh0+XrGqeHy6KNeZghpSQgmFub85Yez1f3TlDsrZP5WAZfQMB/KZY0sKAJUMR9oqAcsg88tzp4FfWVhcXZy5JKWjt4Sq4ZjdArHbYn6GWs7U01aOKSadGYQhNMCEIQAIQmIAZhMXhADMJiZgBiaNVUbkDxInnT46s3xO58SfpNRm6mQeZei6wPyz0I42mPvr/UJoeJUh99ZwQVpuFMz5vob4Ps7gcTpfjHz/AEkqYymdnX1tOFQGTq5HOHz/AEDwL2dyrA7TacZSxTLsTLPC8XYfFqO/9Y0c0WJLDJdHQQi+HxSvsdek1xuOSkLu1ug5nwEryVWSp3Q1EsXxFKehNz0H59JzXEPaN2uE7K/M+fKV2GqZjcmSeVdItHBKrZdYzHs2rHTkOU5/G1S7RjEVr6RUJrIylZfHjrZB7uYy2jqpNatLSTKjOA1jj4eV3DnsZe1NgZqElplbTpgPkP3u0m+pA7S+PP16GPpgPxek1egHFjfcEEaEEbMp5ERmhimTs1FLD8aC/wDUg1B/huOem03insVzlFUDUrdwE2prqB3/AEm1R1OxB8DNBUCkG9/DU/285nHZnLQ1iKqohZjYAX/QAcyToB3zi8ZVemzPUoKwc3ZmzWF7ZR7xdUy7dpSpsNRsegxNYuyg/CDcDv6nqZOADoReUE46OSp45lYmm5AJJyntLYnbUfOwl/w32oZQBVQlfxKb28jy85DjeBUXNwppt1Q5f+3Y+kqq3Bq6aowqDp8D/oYqcou0zp/xSioyR6DguJ0qw/5bqT0vYjxU6iOXnj1arlazq1NxtmBRvEHbzl7wPjeJByq/vFFr+8F7DuYak+Zlll9ojP8AE1cHZ6LEsVxFE0vc9Br69JW/bKj/AHrA9NPnImogCa8l9EY4af7ElTjNQ/CqqO+5P5SA4+s33reAAi7sBvYd81+1KPhBb+EEj12knOXlnQscV0iRqlU/6jf1Ga+7bcufUyM1qjfCmXvY/kJLSw77klj8h4CI22bSXo2t3n1MzM/ZD1hC2ZopUpxlKExRWPUkmJGt0Qrhpt9mjirNskbiJyEfs8DRjppw93M4hyETSmhW0fanIXpxWhkyGliGU6GYxmSrq1w34hrfxE1dJE8xSfRqirsQrYQjYgzbDUW2k8lFZV2Gs2I0m+jVsLYXJi7Uzyk+YnUzZVhJ2EbXYspYTfP1jJWa+7mDXYrTWzaS+oHMkTwuEvLOnTyzUmJJojww5SeotovfK0kNS5jJ6om1szWHYiaC0fbUSI0wZrQITrtqCJhMVHDhbyP7D3TKZtxI/f3mVaSjB2ki0LTUmZaFKtJXGV1Vl6MAR6GJthUpKoSwFyMoFgOd5aPYDWVlXDM5tnFvmPKbS8jRewbigQRGnxCpXbsnIl7Zubfwjp3x7E4JKafDmLaXbXvv0EWIAAtyg1oZSTfRbUMGg3Fz1Op+cbIUCU9PHgC5Os3XEVH+BD4t2R6b/KZaRkk2yzBEHqgbm0r6dGs3xMqj90XPqf0k9PCgG5JJ6k3Pl08oX6FcfsZzTE2FAd8IUzLRUUFjyTEJkTZEwaSKZiEcRm82UQhADDCQusIRZGoXdIrUSYhJMrEhZJGacIQGRsDMgzEJoEyC8YprCEDGO0mtpN2MzCUJPsidZsiwhM8m+Ca8jU6whHMGFeYNWEICkL15GaxMIQGogrXkVBbNCEV9moaxuHz07Dcajx6TkOJV6igqo7WwFxvtqZiEcyJ0PD6aooFtbWJ3JI5kyxR4QmGyNHrATTDV857I7PU/pCEWXYLpjRa2kzCEYU//2Q=='
											alt=''
											width='260px'
											height='163px'
										/>
										<Typography sx={{ mt: 1 }}>
											Dermatologia
										</Typography>
									</Box>
								</Box>
							</Grid>
							<Grid item xl={3} lg={3}>
								<Box className='keep draw'>
									<Box
										sx={{
											display: " flex",
											flexDirection: "column",
											justifyContent: "center",
											alignItems: "center",
										}}
									>
										<img
											src='https://saludprimavera.com.pe/wp-content/uploads/2022/02/gastroenterologia-1024x682-1.jpg'
											alt=''
											width='260px'
											height='163px'
										/>
										<Typography sx={{ mt: 1 }}>
											Gastroenterología
										</Typography>
									</Box>
								</Box>
							</Grid>
							<Grid item xl={3} lg={3}>
								<Box className='keep draw'>
									<Box
										sx={{
											display: " flex",
											flexDirection: "column",
											justifyContent: "center",
											alignItems: "center",
										}}
									>
										<img
											src='https://mediterranean-healthcare.com/documents/images/20111128141313.jpg'
											alt=''
											width='260px'
											height='163px'
										/>
										<Typography sx={{ mt: 1 }}>
											Odontologia
										</Typography>
									</Box>
								</Box>
							</Grid>
						</Grid>
					</Box>
				</Container>
			</Box>
		</GeneralLayout>
	);
};
