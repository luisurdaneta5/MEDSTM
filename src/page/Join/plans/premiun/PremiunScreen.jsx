import { GeneralLayout } from "../../../../layouts/GeneralLayout";
import {
	Container,
	Box,
	Grid,
	Paper,
	Typography,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Button,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
export const PremiunScreen = () => {
	const { user } = useParams();

	return (
		<GeneralLayout>
			<Container maxWidth='lg' sx={{ mt: 4 }}>
				<Grid container spacing={2}>
					<Grid item sm={6}>
						<Paper
							className='element'
							sx={{
								display: "flex",
								height: "auto",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<Typography className='elementor-icon animate__animated animate__fadeIn'>
									{user === "professional-healthcare" ? (
										<i
											className='fa-solid fa-user-md'
											style={{ fontSize: 50 }}
										></i>
									) : (
										<i
											className='fa-solid fa-user-tie'
											style={{ fontSize: 50 }}
										></i>
									)}
								</Typography>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										justifyContent: "center",
										textAlign: "center",
									}}
								>
									<Typography
										sx={{
											fontSize: 20,
											fontWeight: 800,
											mt: 2,
											color: "#147671",
										}}
									>
										MEMBRESIA
									</Typography>
									<i
										className='fa-solid fa-medal'
										style={{
											fontSize: 50,
											color: "#000080",
											marginTop: 10,
										}}
									></i>
									<Typography
										sx={{
											fontSize: 40,
											fontWeight: 800,
											mt: 2,
											color: "#147671",
										}}
									>
										BASICA
									</Typography>

									{user === "professional-healthcare" ? (
										<Typography
											sx={{
												fontSize: 20,
												fontWeight: 800,
												mt: 1,
												mb: 2,
												color: "#147671",
											}}
										>
											USDT $50.00/MES
											<br />
											SIN DESCUENTO
										</Typography>
									) : (
										<Typography
											sx={{
												fontSize: 20,
												fontWeight: 800,
												mt: 1,
												mb: 2,
												color: "#147671",
											}}
										>
											USDT $20.00/MES
											<br />
											SIN DESCUENTO
										</Typography>
									)}

									<Link to={`/register/${user}`}>
										<Button
											variant='contained'
											color='primary'
											sx={{
												fontSize: 20,
											}}
										>
											REGISTRATE
										</Button>
									</Link>
									<Typography
										sx={{
											fontSize: 20,
											fontWeight: 800,
											mt: 2,
											color: "#147671",
										}}
									>
										BENEFICIOS
									</Typography>
									<Box sx={{ mt: 3 }}>
										{user === "professional-healthcare" && (
											<Accordion
												sx={{
													border: "1px solid #018f98",
													backgroundColor:
														"transparent",
													color: "#018f98",
												}}
											>
												<AccordionSummary
													aria-controls='panel1a-content'
													id='panel1a-header'
												>
													<Typography
														sx={{ fontWeight: 800 }}
													>
														Absoluto Control
													</Typography>
												</AccordionSummary>
												<AccordionDetails>
													<Typography
														sx={{
															textAlign: "left",
														}}
													>
														Como plataforma
														<strong>
															{" "}
															no participamos{" "}
														</strong>{" "}
														o
														<strong>
															{" "}
															intervenimos{" "}
														</strong>
														en el
														<strong> cobro </strong>
														de tus servicios. Tu
														serás el responsable de
														canalizar, agendar o
														cobrar tus servicios a
														través de los medios que
														desees. ¡Con
														<strong>
															{" "}
															MEDS TM, dirige{" "}
														</strong>
														a cualquier potencial
														paciente desde tu perfil
														a tu consultorio, a tus
														redes sociales, a tu
														sitio web, a tu teléfono
														o a donde quieras!
													</Typography>
												</AccordionDetails>
											</Accordion>
										)}

										{user === "professional-healthcare" && (
											<Accordion
												sx={{
													border: "1px solid #018f98",
													backgroundColor:
														"transparent",
													color: "#018f98",
												}}
											>
												<AccordionSummary
													aria-controls='panel2a-content'
													id='panel2a-header'
												>
													<Typography
														sx={{ fontWeight: 800 }}
													>
														Posicionamiento
													</Typography>
												</AccordionSummary>
												<AccordionDetails>
													<Typography
														sx={{
															textAlign: "left",
														}}
													>
														Los
														<strong>
															{" "}
															Miembros Basicos{" "}
														</strong>
														ocupan el
														<strong>
															{" "}
															Octavo lugar{" "}
														</strong>
														en los resultados de
														búsqueda en cuanto a
														profesión/especialidad
														de cada región
														geográfica. Si existiera
														más de un (1) miembro
														con este tipo de
														membresía en la
														búsqueda, será tomado en
														cuenta para su
														posicionamiento:
														<strong>
															{" "}
															verificación e
															invitaciones
															realizadas.
														</strong>
													</Typography>
												</AccordionDetails>
											</Accordion>
										)}

										<Accordion
											sx={{
												border: "1px solid #018f98",
												backgroundColor: "transparent",
												color: "#018f98",
											}}
										>
											<AccordionSummary
												aria-controls='panel2a-content'
												id='panel2a-header'
											>
												<Typography
													sx={{ fontWeight: 800 }}
												>
													Invitaciones Premium/VIP
												</Typography>
											</AccordionSummary>
											<AccordionDetails>
												<Typography
													component='span'
													sx={{ textAlign: "left" }}
												>
													Obtienes{" "}
													{user ===
													"professional-healthcare"
														? "2.5%"
														: "1%"}{" "}
													de la membresía de cada
													Invitado Premium/VIP (esto
													incluye Promotores y
													Profesionales de la Salud).
													También obtienes el{" "}
													{user ===
													"professional-healthcare"
														? "2.5%"
														: "1%"}{" "}
													cada vez que este/estos
													Invitados Premium/VIP deseen
													renovar su membresía (en
													caso de requerirlo).
													Ejemplo. Si invitas:
													<Typography component='ul'>
														<Typography
															component='li'
															style={{
																color: "#000080",
															}}
														>
															{" "}
															Miembro{" "}
															<strong>
																Básico
															</strong>{" "}
															Profesional
															Sanitario ={" "}
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$1.25"
																	: "$0.50 "}
																Tether USDT
															</strong>{" "}
															(por
															ingreso/renovación)
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#800000",
															}}
														>
															Miembro
															<strong>
																{" "}
																Bronce{" "}
															</strong>
															Profesional
															Sanitario =
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$3.56 "
																	: "$1.43 "}
																Tether USDT{" "}
															</strong>
															(por
															ingreso/renovación)
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#333333",
															}}
														>
															Miembro
															<strong>
																{" "}
																Plata{" "}
															</strong>
															Profesional
															Sanitario ={" "}
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$6.75 "
																	: "$2.70 "}
																Tether USDT{" "}
															</strong>
															(por
															ingreso/renovación)
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#ff9900",
															}}
														>
															Miembro
															<strong>
																{" "}
																Oro{" "}
															</strong>
															Profesional
															Sanitario ={" "}
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$12.75 "
																	: "$5.10 "}
																Tether USDT{" "}
															</strong>
															(por
															ingreso/renovación)
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#800080",
															}}
														>
															Miembro
															<strong>
																{" "}
																Zafiro{" "}
															</strong>
															Profesional
															Sanitario =
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$50.00 "
																	: "$20.00 "}
																Tether USDT{" "}
															</strong>
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#ff0000",
															}}
														>
															Miembro
															<strong>
																{" "}
																Rubí{" "}
															</strong>
															Profesional
															Sanitario =
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$125.00 "
																	: "$50.00 "}
																Tether USDT
															</strong>
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#0080000",
															}}
														>
															Miembro
															<strong>
																{" "}
																Esmeralda{" "}
															</strong>
															Profesional
															Sanitario =
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$250.00 "
																	: "$100.00 "}
																Tether USDT{" "}
															</strong>
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#ff00ff",
															}}
														>
															Miembro
															<strong>
																{" "}
																Diamante{" "}
															</strong>
															Profesional
															Sanitario =
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$500.00 "
																	: "$200.00 "}
																Tether USDT
															</strong>
														</Typography>

														{/* promotor */}
														<Typography
															component='li'
															style={{
																color: "#000080",
															}}
														>
															{" "}
															Miembro{" "}
															<strong>
																Básico
															</strong>{" "}
															Promotor de Ventas ={" "}
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$0.50 "
																	: "$0.20 "}
																Tether USDT
															</strong>{" "}
															(por
															ingreso/renovación)
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#800000",
															}}
														>
															Miembro
															<strong>
																{" "}
																Bronce{" "}
															</strong>
															Promotor de Ventas =
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$1.43 "
																	: "$0.57 "}
																Tether USDT{" "}
															</strong>
															(por
															ingreso/renovación)
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#333333",
															}}
														>
															Miembro
															<strong>
																{" "}
																Plata{" "}
															</strong>
															Promotor de Ventas ={" "}
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$2.70 "
																	: "$1.08 "}
																Tether USDT{" "}
															</strong>
															(por
															ingreso/renovación)
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#ff9900",
															}}
														>
															Miembro
															<strong>
																{" "}
																Oro{" "}
															</strong>
															Promotor de Ventas ={" "}
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$5.10 "
																	: "$2.04 "}
																Tether USDT{" "}
															</strong>
															(por
															ingreso/renovación)
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#800080",
															}}
														>
															Miembro
															<strong>
																{" "}
																Zafiro{" "}
															</strong>
															Promotor de Ventas =
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$25.00 "
																	: "$10.00 "}
																Tether USDT{" "}
															</strong>
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#ff0000",
															}}
														>
															Miembro
															<strong>
																{" "}
																Rubí{" "}
															</strong>
															Promotor de Ventas =
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$62.50 "
																	: "$25.00 "}
																Tether USDT
															</strong>
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#0080000",
															}}
														>
															Miembro
															<strong>
																{" "}
																Esmeralda{" "}
															</strong>
															Promotor de Ventas =
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$124.00 "
																	: "$50.00 "}
																Tether USDT{" "}
															</strong>
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#ff00ff",
															}}
														>
															Miembro
															<strong>
																{" "}
																Diamante{" "}
															</strong>
															Promotor de Ventas =
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$250.00 "
																	: "$100.00 "}
																Tether USDT
															</strong>
														</Typography>
													</Typography>
												</Typography>
											</AccordionDetails>
										</Accordion>
										<Accordion
											sx={{
												border: "1px solid #018f98",
												backgroundColor: "transparent",
												color: "#018f98",
											}}
										>
											<AccordionSummary
												aria-controls='panel2a-content'
												id='panel2a-header'
											>
												<Typography
													sx={{ fontWeight: 800 }}
												>
													Cambios
												</Typography>
											</AccordionSummary>
											<AccordionDetails>
												<Typography
													sx={{ textAlign: "left" }}
												>
													Puedes
													<strong> cambiar </strong>o
													<strong> mejorar </strong>tu
													<strong> membresía </strong>
													en cualquier momento
													<strong>
														{" "}
														sin perder{" "}
													</strong>
													tus invitaciones. Si por
													ejemplo, tu o tus invitados
													deciden
													<strong> mejorar </strong>
													sus membresías, también los
													<strong>
														{" "}
														beneficios{" "}
													</strong>
													percibidos por estos
													invitados
													<strong>
														{" "}
														mejorarán. ¡Si, tus
														invitados son tuyos
														permanentemente!
													</strong>
												</Typography>
											</AccordionDetails>
										</Accordion>
										<Accordion
											sx={{
												border: "1px solid #018f98",
												backgroundColor: "transparent",
												color: "#018f98",
											}}
										>
											<AccordionSummary
												aria-controls='panel2a-content'
												id='panel2a-header'
											>
												<Typography
													sx={{ fontWeight: 800 }}
												>
													Transparencia
												</Typography>
											</AccordionSummary>
											<AccordionDetails>
												<Typography
													sx={{ textAlign: "left" }}
												>
													Podrás visualizar y
													mantenerte al día de todas
													las operaciones realizadas
													en la plataforma en la
													sección Historial. Presiona
													este enlace para dirigirte a
													la sección Historial.
												</Typography>
											</AccordionDetails>
										</Accordion>
									</Box>
								</Box>
							</Box>
						</Paper>
					</Grid>
					<Grid item sm={6}>
						<Paper
							className='element'
							sx={{
								display: "flex",
								height: "auto",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<Typography className='elementor-icon animate__animated animate__fadeIn'>
									{user === "professional-healthcare" ? (
										<i
											className='fa-solid fa-user-md'
											style={{ fontSize: 50 }}
										></i>
									) : (
										<i
											className='fa-solid fa-user-tie'
											style={{ fontSize: 50 }}
										></i>
									)}
								</Typography>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										justifyContent: "center",
										textAlign: "center",
									}}
								>
									<Typography
										sx={{
											fontSize: 20,
											fontWeight: 800,
											mt: 2,
											color: "#147671",
										}}
									>
										MEMBRESIA
									</Typography>
									<i
										className='fa-solid fa-medal'
										style={{
											fontSize: 50,
											color: "#800000",
											marginTop: 10,
										}}
									></i>
									<Typography
										sx={{
											fontSize: 40,
											fontWeight: 800,
											mt: 2,
											color: "#147671",
										}}
									>
										BRONCE
									</Typography>

									{user === "professional-healthcare" ? (
										<Typography
											sx={{
												fontSize: 20,
												fontWeight: 800,
												mt: 1,
												mb: 2,
												color: "#147671",
											}}
										>
											USDT $142.50/MES
											<br />
											DESCUENTO 5%
										</Typography>
									) : (
										<Typography
											sx={{
												fontSize: 20,
												fontWeight: 800,
												mt: 1,
												mb: 2,
												color: "#147671",
											}}
										>
											USDT $57.00/MES
											<br />
											DESCUENTO 5%
										</Typography>
									)}

									<Link to={`/register/${user}`}>
										<Button
											variant='contained'
											color='primary'
											sx={{
												fontSize: 20,
											}}
										>
											REGISTRATE
										</Button>
									</Link>
									<Typography
										sx={{
											fontSize: 20,
											fontWeight: 800,
											mt: 2,
											color: "#147671",
										}}
									>
										BENEFICIOS
									</Typography>
									<Box sx={{ mt: 3 }}>
										{user === "professional-healthcare" && (
											<Accordion
												sx={{
													border: "1px solid #018f98",
													backgroundColor:
														"transparent",
													color: "#018f98",
												}}
											>
												<AccordionSummary
													aria-controls='panel1a-content'
													id='panel1a-header'
												>
													<Typography
														sx={{ fontWeight: 800 }}
													>
														Absoluto Control
													</Typography>
												</AccordionSummary>
												<AccordionDetails>
													<Typography
														sx={{
															textAlign: "left",
														}}
													>
														Como plataforma
														<strong>
															{" "}
															no participamos{" "}
														</strong>{" "}
														o
														<strong>
															{" "}
															intervenimos{" "}
														</strong>
														en el
														<strong> cobro </strong>
														de tus servicios. Tu
														serás el responsable de
														canalizar, agendar o
														cobrar tus servicios a
														través de los medios que
														desees. ¡Con
														<strong>
															{" "}
															MEDS TM, dirige{" "}
														</strong>
														a cualquier potencial
														paciente desde tu perfil
														a tu consultorio, a tus
														redes sociales, a tu
														sitio web, a tu teléfono
														o a donde quieras!
													</Typography>
												</AccordionDetails>
											</Accordion>
										)}

										{user === "professional-healthcare" && (
											<Accordion
												sx={{
													border: "1px solid #018f98",
													backgroundColor:
														"transparent",
													color: "#018f98",
												}}
											>
												<AccordionSummary
													aria-controls='panel2a-content'
													id='panel2a-header'
												>
													<Typography
														sx={{ fontWeight: 800 }}
													>
														Posicionamiento
													</Typography>
												</AccordionSummary>
												<AccordionDetails>
													<Typography
														sx={{
															textAlign: "left",
														}}
													>
														Los
														<strong>
															{" "}
															Miembros Bronce{" "}
														</strong>
														ocupan el
														<strong>
															{" "}
															septimo lugar{" "}
														</strong>
														en los resultados de
														búsqueda en cuanto a
														profesión/especialidad
														de cada región
														geográfica. Si existiera
														más de un (1) miembro
														con este tipo de
														membresía en la
														búsqueda, será tomado en
														cuenta para su
														posicionamiento:
														<strong>
															{" "}
															verificación e
															invitaciones
															realizadas.
														</strong>
													</Typography>
												</AccordionDetails>
											</Accordion>
										)}

										<Accordion
											sx={{
												border: "1px solid #018f98",
												backgroundColor: "transparent",
												color: "#018f98",
											}}
										>
											<AccordionSummary
												aria-controls='panel2a-content'
												id='panel2a-header'
											>
												<Typography
													sx={{ fontWeight: 800 }}
												>
													Invitaciones Premium/VIP
												</Typography>
											</AccordionSummary>
											<AccordionDetails>
												<Typography
													component='span'
													sx={{ textAlign: "left" }}
												>
													Obtienes{" "}
													{user ===
													"professional-healthcare"
														? "7.5% "
														: "3% "}{" "}
													de la membresía de cada
													Invitado Premium/VIP (esto
													incluye Promotores y
													Profesionales de la Salud).
													También obtienes el{" "}
													{user ===
													"professional-healthcare"
														? "7.5% "
														: "3% "}
													cada vez que este/estos
													Invitados Premium/VIP deseen
													renovar su membresía (en
													caso de requerirlo).
													Ejemplo. Si invitas:
													<Typography component='ul'>
														<Typography
															component='li'
															style={{
																color: "#000080",
															}}
														>
															Miembro{" "}
															<strong>
																Básico
															</strong>{" "}
															Profesional
															Sanitario ={" "}
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$3.75 "
																	: "$1.50 "}
																Tether USDT
															</strong>{" "}
															(por
															ingreso/renovación)
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#800000",
															}}
														>
															Miembro
															<strong>
																{" "}
																Bronce{" "}
															</strong>
															Profesional
															Sanitario =
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$10.69 "
																	: "$4.28 "}
																Tether USDT{" "}
															</strong>
															(por
															ingreso/renovación)
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#333333",
															}}
														>
															Miembro
															<strong>
																{" "}
																Plata{" "}
															</strong>
															Profesional
															Sanitario ={" "}
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$20.25 "
																	: "$8.10 "}
																Tether USDT{" "}
															</strong>
															(por
															ingreso/renovación)
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#ff9900",
															}}
														>
															Miembro
															<strong>
																{" "}
																Oro{" "}
															</strong>
															Profesional
															Sanitario ={" "}
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$38.25 "
																	: "$15.30 "}
																Tether USDT{" "}
															</strong>
															(por
															ingreso/renovación)
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#800080",
															}}
														>
															Miembro
															<strong>
																{" "}
																Zafiro{" "}
															</strong>
															Profesional
															Sanitario =
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$150.00 "
																	: "$60.00 "}
																Tether USDT{" "}
															</strong>
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#ff0000",
															}}
														>
															Miembro
															<strong>
																{" "}
																Rubí{" "}
															</strong>
															Profesional
															Sanitario =
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$375.00 "
																	: "$150.00 "}
																Tether USDT
															</strong>
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#0080000",
															}}
														>
															Miembro
															<strong>
																{" "}
																Esmeralda{" "}
															</strong>
															Profesional
															Sanitario =
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$750.00 "
																	: "$300.00 "}
																Tether USDT{" "}
															</strong>
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#ff00ff",
															}}
														>
															Miembro
															<strong>
																{" "}
																Diamante{" "}
															</strong>
															Profesional
															Sanitario =
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$1500.00 "
																	: "$600.00 "}
																Tether USDT
															</strong>
														</Typography>

														{/* promotor */}
														<Typography
															component='li'
															style={{
																color: "#000080",
															}}
														>
															{" "}
															Miembro{" "}
															<strong>
																Básico
															</strong>{" "}
															Promotor de Ventas ={" "}
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$1.50 "
																	: "$0.60 "}
																Tether USDT
															</strong>{" "}
															(por
															ingreso/renovación)
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#800000",
															}}
														>
															Miembro
															<strong>
																{" "}
																Bronce{" "}
															</strong>
															Promotor de Ventas =
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$4.28 "
																	: "$1.71 "}
																Tether USDT{" "}
															</strong>
															(por
															ingreso/renovación)
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#333333",
															}}
														>
															Miembro
															<strong>
																{" "}
																Plata{" "}
															</strong>
															Promotor de Ventas ={" "}
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$8.10 "
																	: "$3.24 "}
																Tether USDT{" "}
															</strong>
															(por
															ingreso/renovación)
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#ff9900",
															}}
														>
															Miembro
															<strong>
																{" "}
																Oro{" "}
															</strong>
															Promotor de Ventas ={" "}
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$15.30 "
																	: "$6.12 "}
																Tether USDT{" "}
															</strong>
															(por
															ingreso/renovación)
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#800080",
															}}
														>
															Miembro
															<strong>
																{" "}
																Zafiro{" "}
															</strong>
															Promotor de Ventas =
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$75.00 "
																	: "$30.00 "}
																Tether USDT{" "}
															</strong>
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#ff0000",
															}}
														>
															Miembro
															<strong>
																{" "}
																Rubí{" "}
															</strong>
															Promotor de Ventas =
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$187.50 "
																	: "$75.00 "}
																Tether USDT
															</strong>
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#0080000",
															}}
														>
															Miembro
															<strong>
																{" "}
																Esmeralda{" "}
															</strong>
															Promotor de Ventas =
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$375.00 "
																	: "$150.00 "}
																Tether USDT{" "}
															</strong>
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#ff00ff",
															}}
														>
															Miembro
															<strong>
																{" "}
																Diamante{" "}
															</strong>
															Promotor de Ventas =
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$750.00 "
																	: "$300.00 "}
																`Tether USDT
															</strong>
														</Typography>
													</Typography>
												</Typography>
											</AccordionDetails>
										</Accordion>
										<Accordion
											sx={{
												border: "1px solid #018f98",
												backgroundColor: "transparent",
												color: "#018f98",
											}}
										>
											<AccordionSummary
												aria-controls='panel2a-content'
												id='panel2a-header'
											>
												<Typography
													sx={{ fontWeight: 800 }}
												>
													Cambios
												</Typography>
											</AccordionSummary>
											<AccordionDetails>
												<Typography
													sx={{ textAlign: "left" }}
												>
													Puedes
													<strong> cambiar </strong>o
													<strong> mejorar </strong>tu
													<strong> membresía </strong>
													en cualquier momento
													<strong>
														{" "}
														sin perder{" "}
													</strong>
													tus invitaciones. Si por
													ejemplo, tu o tus invitados
													deciden
													<strong> mejorar </strong>
													sus membresías, también los
													<strong>
														{" "}
														beneficios{" "}
													</strong>
													percibidos por estos
													invitados
													<strong>
														{" "}
														mejorarán. ¡Si, tus
														invitados son tuyos
														permanentemente!
													</strong>
												</Typography>
											</AccordionDetails>
										</Accordion>
										<Accordion
											sx={{
												border: "1px solid #018f98",
												backgroundColor: "transparent",
												color: "#018f98",
											}}
										>
											<AccordionSummary
												aria-controls='panel2a-content'
												id='panel2a-header'
											>
												<Typography
													sx={{ fontWeight: 800 }}
												>
													Transparencia
												</Typography>
											</AccordionSummary>
											<AccordionDetails>
												<Typography
													sx={{ textAlign: "left" }}
												>
													Podrás visualizar y
													mantenerte al día de todas
													las operaciones realizadas
													en la plataforma en la
													sección Historial. Presiona
													este enlace para dirigirte a
													la sección Historial.
												</Typography>
											</AccordionDetails>
										</Accordion>
									</Box>
								</Box>
							</Box>
						</Paper>
					</Grid>
					<Grid item sm={6}>
						<Paper
							className='element'
							sx={{
								display: "flex",
								height: "auto",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<Typography className='elementor-icon animate__animated animate__fadeIn'>
									{user === "professional-healthcare" ? (
										<i
											className='fa-solid fa-user-md'
											style={{ fontSize: 50 }}
										></i>
									) : (
										<i
											className='fa-solid fa-user-tie'
											style={{ fontSize: 50 }}
										></i>
									)}
								</Typography>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										justifyContent: "center",
										textAlign: "center",
									}}
								>
									<Typography
										sx={{
											fontSize: 20,
											fontWeight: 800,
											mt: 2,
											color: "#147671",
										}}
									>
										MEMBRESIA
									</Typography>
									<i
										className='fa-solid fa-medal'
										style={{
											fontSize: 50,
											color: "#333333",
											marginTop: 10,
										}}
									></i>
									<Typography
										sx={{
											fontSize: 40,
											fontWeight: 800,
											mt: 2,
											color: "#147671",
										}}
									>
										PLATA
									</Typography>

									{user === "professional-healthcare" ? (
										<Typography
											sx={{
												fontSize: 20,
												fontWeight: 800,
												mt: 1,
												mb: 2,
												color: "#147671",
											}}
										>
											USDT $270.00/MES
											<br />
											DESCUENTO 10%
										</Typography>
									) : (
										<Typography
											sx={{
												fontSize: 20,
												fontWeight: 800,
												mt: 1,
												mb: 2,
												color: "#147671",
											}}
										>
											USDT $108.00/MES
											<br />
											DESCUENTO 10%
										</Typography>
									)}

									<Link to={`/register/${user}`}>
										<Button
											variant='contained'
											color='primary'
											sx={{
												fontSize: 20,
											}}
										>
											REGISTRATE
										</Button>
									</Link>
									<Typography
										sx={{
											fontSize: 20,
											fontWeight: 800,
											mt: 2,
											color: "#147671",
										}}
									>
										BENEFICIOS
									</Typography>
									<Box sx={{ mt: 3 }}>
										{user === "professional-healthcare" && (
											<Accordion
												sx={{
													border: "1px solid #018f98",
													backgroundColor:
														"transparent",
													color: "#018f98",
												}}
											>
												<AccordionSummary
													aria-controls='panel1a-content'
													id='panel1a-header'
												>
													<Typography
														sx={{ fontWeight: 800 }}
													>
														Absoluto Control
													</Typography>
												</AccordionSummary>
												<AccordionDetails>
													<Typography
														sx={{
															textAlign: "left",
														}}
													>
														Como plataforma
														<strong>
															{" "}
															no participamos{" "}
														</strong>{" "}
														o
														<strong>
															{" "}
															intervenimos{" "}
														</strong>
														en el
														<strong> cobro </strong>
														de tus servicios. Tu
														serás el responsable de
														canalizar, agendar o
														cobrar tus servicios a
														través de los medios que
														desees. ¡Con
														<strong>
															{" "}
															MEDS TM, dirige{" "}
														</strong>
														a cualquier potencial
														paciente desde tu perfil
														a tu consultorio, a tus
														redes sociales, a tu
														sitio web, a tu teléfono
														o a donde quieras!
													</Typography>
												</AccordionDetails>
											</Accordion>
										)}

										{user === "professional-healthcare" && (
											<Accordion
												sx={{
													border: "1px solid #018f98",
													backgroundColor:
														"transparent",
													color: "#018f98",
												}}
											>
												<AccordionSummary
													aria-controls='panel2a-content'
													id='panel2a-header'
												>
													<Typography
														sx={{ fontWeight: 800 }}
													>
														Posicionamiento
													</Typography>
												</AccordionSummary>
												<AccordionDetails>
													<Typography
														sx={{
															textAlign: "left",
														}}
													>
														Los
														<strong>
															{" "}
															Miembros Plata{" "}
														</strong>
														ocupan el
														<strong>
															{" "}
															sexto lugar{" "}
														</strong>
														en los resultados de
														búsqueda en cuanto a
														profesión/especialidad
														de cada región
														geográfica. Si existiera
														más de un (1) miembro
														con este tipo de
														membresía en la
														búsqueda, será tomado en
														cuenta para su
														posicionamiento:
														<strong>
															{" "}
															verificación e
															invitaciones
															realizadas.
														</strong>
													</Typography>
												</AccordionDetails>
											</Accordion>
										)}

										<Accordion
											sx={{
												border: "1px solid #018f98",
												backgroundColor: "transparent",
												color: "#018f98",
											}}
										>
											<AccordionSummary
												aria-controls='panel2a-content'
												id='panel2a-header'
											>
												<Typography
													sx={{ fontWeight: 800 }}
												>
													Invitaciones Premium/VIP
												</Typography>
											</AccordionSummary>
											<AccordionDetails>
												<Typography
													component='span'
													sx={{ textAlign: "left" }}
												>
													Obtienes{" "}
													{user ===
													"professional-healthcare"
														? "15% "
														: "6% "}{" "}
													de la membresía de cada
													Invitado Premium/VIP (esto
													incluye Promotores y
													Profesionales de la Salud).
													También obtienes el{" "}
													{user ===
													"professional-healthcare"
														? "15% "
														: "6% "}{" "}
													cada vez que este/estos
													Invitados Premium/VIP deseen
													renovar su membresía (en
													caso de requerirlo).
													Ejemplo. Si invitas:
													<Typography component='ul'>
														<Typography
															component='li'
															style={{
																color: "#000080",
															}}
														>
															{" "}
															Miembro{" "}
															<strong>
																Básico
															</strong>{" "}
															Profesional
															Sanitario ={" "}
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$7.50 "
																	: "$3.00 "}
																Tether USDT
															</strong>{" "}
															(por
															ingreso/renovación)
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#800000",
															}}
														>
															Miembro
															<strong>
																{" "}
																Bronce{" "}
															</strong>
															Profesional
															Sanitario =
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$21.38 "
																	: "$8.55 "}
																Tether USDT{" "}
															</strong>
															(por
															ingreso/renovación)
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#333333",
															}}
														>
															Miembro
															<strong>
																{" "}
																Plata{" "}
															</strong>
															Profesional
															Sanitario ={" "}
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$40.50 "
																	: "$16.20 "}
																Tether USDT{" "}
															</strong>
															(por
															ingreso/renovación)
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#ff9900",
															}}
														>
															Miembro
															<strong>
																{" "}
																Oro{" "}
															</strong>
															Profesional
															Sanitario ={" "}
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$76.50 "
																	: "$30.60 "}
																Tether USDT{" "}
															</strong>
															(por
															ingreso/renovación)
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#800080",
															}}
														>
															Miembro
															<strong>
																{" "}
																Zafiro{" "}
															</strong>
															Profesional
															Sanitario =
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$300.00 "
																	: "$120.00 "}
																Tether USDT{" "}
															</strong>
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#ff0000",
															}}
														>
															Miembro
															<strong>
																{" "}
																Rubí{" "}
															</strong>
															Profesional
															Sanitario =
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$750.00 "
																	: "$300.00 "}
																Tether USDT
															</strong>
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#0080000",
															}}
														>
															Miembro
															<strong>
																{" "}
																Esmeralda{" "}
															</strong>
															Profesional
															Sanitario =
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$1500.00 "
																	: "$600.00 "}
																Tether USDT{" "}
															</strong>
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#ff00ff",
															}}
														>
															Miembro
															<strong>
																{" "}
																Diamante{" "}
															</strong>
															Profesional
															Sanitario =
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$3000.00 "
																	: "$1200.00 "}
																Tether USDT
															</strong>
														</Typography>

														{/* promotor */}
														<Typography
															component='li'
															style={{
																color: "#000080",
															}}
														>
															{" "}
															Miembro{" "}
															<strong>
																Básico
															</strong>{" "}
															Promotor de Ventas ={" "}
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$3.00 "
																	: "$1.20 "}
																Tether USDT
															</strong>{" "}
															(por
															ingreso/renovación)
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#800000",
															}}
														>
															Miembro
															<strong>
																{" "}
																Bronce{" "}
															</strong>
															Promotor de Ventas =
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$8.55 "
																	: "$3.42 "}
																Tether USDT{" "}
															</strong>
															(por
															ingreso/renovación)
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#333333",
															}}
														>
															Miembro
															<strong>
																{" "}
																Plata{" "}
															</strong>
															Promotor de Ventas ={" "}
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$16.20 "
																	: "$6.48 "}
																Tether USDT{" "}
															</strong>
															(por
															ingreso/renovación)
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#ff9900",
															}}
														>
															Miembro
															<strong>
																{" "}
																Oro{" "}
															</strong>
															Promotor de Ventas ={" "}
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$30.60 "
																	: "$12.24 "}
																Tether USDT{" "}
															</strong>
															(por
															ingreso/renovación)
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#800080",
															}}
														>
															Miembro
															<strong>
																{" "}
																Zafiro{" "}
															</strong>
															Promotor de Ventas =
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$150.00 "
																	: "$60.00  "}
																Tether USDT{" "}
															</strong>
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#ff0000",
															}}
														>
															Miembro
															<strong>
																{" "}
																Rubí{" "}
															</strong>
															Promotor de Ventas =
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$375.00 "
																	: "$150.00 "}
																Tether USDT
															</strong>
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#0080000",
															}}
														>
															Miembro
															<strong>
																{" "}
																Esmeralda{" "}
															</strong>
															Promotor de Ventas =
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$750.00 "
																	: "$300.00 "}
																Tether USDT{" "}
															</strong>
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#ff00ff",
															}}
														>
															Miembro
															<strong>
																{" "}
																Diamante{" "}
															</strong>
															Promotor de Ventas =
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$1500.00 "
																	: "$600.00 "}
																Tether USDT
															</strong>
														</Typography>
													</Typography>
												</Typography>
											</AccordionDetails>
										</Accordion>
										<Accordion
											sx={{
												border: "1px solid #018f98",
												backgroundColor: "transparent",
												color: "#018f98",
											}}
										>
											<AccordionSummary
												aria-controls='panel2a-content'
												id='panel2a-header'
											>
												<Typography
													sx={{ fontWeight: 800 }}
												>
													Cambios
												</Typography>
											</AccordionSummary>
											<AccordionDetails>
												<Typography
													sx={{ textAlign: "left" }}
												>
													Puedes
													<strong> cambiar </strong>o
													<strong> mejorar </strong>tu
													<strong> membresía </strong>
													en cualquier momento
													<strong>
														{" "}
														sin perder{" "}
													</strong>
													tus invitaciones. Si por
													ejemplo, tu o tus invitados
													deciden
													<strong> mejorar </strong>
													sus membresías, también los
													<strong>
														{" "}
														beneficios{" "}
													</strong>
													percibidos por estos
													invitados
													<strong>
														{" "}
														mejorarán. ¡Si, tus
														invitados son tuyos
														permanentemente!
													</strong>
												</Typography>
											</AccordionDetails>
										</Accordion>
										<Accordion
											sx={{
												border: "1px solid #018f98",
												backgroundColor: "transparent",
												color: "#018f98",
											}}
										>
											<AccordionSummary
												aria-controls='panel2a-content'
												id='panel2a-header'
											>
												<Typography
													sx={{ fontWeight: 800 }}
												>
													Transparencia
												</Typography>
											</AccordionSummary>
											<AccordionDetails>
												<Typography
													sx={{ textAlign: "left" }}
												>
													Podrás visualizar y
													mantenerte al día de todas
													las operaciones realizadas
													en la plataforma en la
													sección Historial. Presiona
													este enlace para dirigirte a
													la sección Historial.
												</Typography>
											</AccordionDetails>
										</Accordion>
									</Box>
								</Box>
							</Box>
						</Paper>
					</Grid>
					<Grid item sm={6}>
						<Paper
							className='element'
							sx={{
								display: "flex",
								height: "auto",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<Typography className='elementor-icon animate__animated animate__fadeIn'>
									{user === "professional-healthcare" ? (
										<i
											className='fa-solid fa-user-md'
											style={{ fontSize: 50 }}
										></i>
									) : (
										<i
											className='fa-solid fa-user-tie'
											style={{ fontSize: 50 }}
										></i>
									)}
								</Typography>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										justifyContent: "center",
										textAlign: "center",
									}}
								>
									<Typography
										sx={{
											fontSize: 20,
											fontWeight: 800,
											mt: 2,
											color: "#147671",
										}}
									>
										MEMBRESIA
									</Typography>
									<i
										className='fa-solid fa-medal'
										style={{
											fontSize: 50,
											color: "#ff9900",
											marginTop: 10,
										}}
									></i>
									<Typography
										sx={{
											fontSize: 40,
											fontWeight: 800,
											mt: 2,
											color: "#147671",
										}}
									>
										ORO
									</Typography>

									{user === "professional-healthcare" ? (
										<Typography
											sx={{
												fontSize: 20,
												fontWeight: 800,
												mt: 1,
												mb: 2,
												color: "#147671",
											}}
										>
											USDT $510.00/MES
											<br />
											DESCUENTO 15%
										</Typography>
									) : (
										<Typography
											sx={{
												fontSize: 20,
												fontWeight: 800,
												mt: 1,
												mb: 2,
												color: "#147671",
											}}
										>
											USDT $204.00/MES
											<br />
											DESCUENTO 15%
										</Typography>
									)}

									<Link to={`/register/${user}`}>
										<Button
											variant='contained'
											color='primary'
											sx={{
												fontSize: 20,
											}}
										>
											REGISTRATE
										</Button>
									</Link>
									<Typography
										sx={{
											fontSize: 20,
											fontWeight: 800,
											mt: 2,
											color: "#147671",
										}}
									>
										BENEFICIOS
									</Typography>
									<Box sx={{ mt: 3 }}>
										{user === "professional-healthcare" && (
											<Accordion
												sx={{
													border: "1px solid #018f98",
													backgroundColor:
														"transparent",
													color: "#018f98",
												}}
											>
												<AccordionSummary
													aria-controls='panel1a-content'
													id='panel1a-header'
												>
													<Typography
														sx={{ fontWeight: 800 }}
													>
														Absoluto Control
													</Typography>
												</AccordionSummary>
												<AccordionDetails>
													<Typography
														sx={{
															textAlign: "left",
														}}
													>
														Como plataforma
														<strong>
															{" "}
															no participamos{" "}
														</strong>{" "}
														o
														<strong>
															{" "}
															intervenimos{" "}
														</strong>
														en el
														<strong> cobro </strong>
														de tus servicios. Tu
														serás el responsable de
														canalizar, agendar o
														cobrar tus servicios a
														través de los medios que
														desees. ¡Con
														<strong>
															{" "}
															MEDS TM, dirige{" "}
														</strong>
														a cualquier potencial
														paciente desde tu perfil
														a tu consultorio, a tus
														redes sociales, a tu
														sitio web, a tu teléfono
														o a donde quieras!
													</Typography>
												</AccordionDetails>
											</Accordion>
										)}

										{user === "professional-healthcare" && (
											<Accordion
												sx={{
													border: "1px solid #018f98",
													backgroundColor:
														"transparent",
													color: "#018f98",
												}}
											>
												<AccordionSummary
													aria-controls='panel2a-content'
													id='panel2a-header'
												>
													<Typography
														sx={{ fontWeight: 800 }}
													>
														Posicionamiento
													</Typography>
												</AccordionSummary>
												<AccordionDetails>
													<Typography
														sx={{
															textAlign: "left",
														}}
													>
														Los
														<strong>
															{" "}
															Miembros Oro{" "}
														</strong>
														ocupan el
														<strong>
															{" "}
															quinto lugar{" "}
														</strong>
														en los resultados de
														búsqueda en cuanto a
														profesión/especialidad
														de cada región
														geográfica. Si existiera
														más de un (1) miembro
														con este tipo de
														membresía en la
														búsqueda, será tomado en
														cuenta para su
														posicionamiento:
														<strong>
															{" "}
															verificación e
															invitaciones
															realizadas.
														</strong>
													</Typography>
												</AccordionDetails>
											</Accordion>
										)}

										<Accordion
											sx={{
												border: "1px solid #018f98",
												backgroundColor: "transparent",
												color: "#018f98",
											}}
										>
											<AccordionSummary
												aria-controls='panel2a-content'
												id='panel2a-header'
											>
												<Typography
													sx={{ fontWeight: 800 }}
												>
													Invitaciones Premium/VIP
												</Typography>
											</AccordionSummary>
											<AccordionDetails>
												<Typography
													component='span'
													sx={{ textAlign: "left" }}
												>
													Obtienes{" "}
													{user ===
													"professional-healthcare"
														? "30% "
														: "12% "}
													de la membresía de cada
													Invitado Premium/VIP (esto
													incluye Promotores y
													Profesionales de la Salud).
													También obtienes el{" "}
													{user ===
													"professional-healthcare"
														? "30% "
														: "12% "}{" "}
													cada vez que este/estos
													Invitados Premium/VIP deseen
													renovar su membresía (en
													caso de requerirlo).
													Ejemplo. Si invitas:
													<Typography component='ul'>
														<Typography
															component='li'
															style={{
																color: "#000080",
															}}
														>
															{" "}
															Miembro{" "}
															<strong>
																Básico
															</strong>{" "}
															Profesional
															Sanitario ={" "}
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$15.00 "
																	: "$6.00 "}
																Tether USDT
															</strong>{" "}
															(por
															ingreso/renovación)
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#800000",
															}}
														>
															Miembro
															<strong>
																{" "}
																Bronce{" "}
															</strong>
															Profesional
															Sanitario =
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$42.75 "
																	: "$17.10 "}
																$42.75 Tether
																USDT{" "}
															</strong>
															(por
															ingreso/renovación)
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#333333",
															}}
														>
															Miembro
															<strong>
																{" "}
																Plata{" "}
															</strong>
															Profesional
															Sanitario ={" "}
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$81.00 "
																	: "$32.40 "}
																Tether USDT{" "}
															</strong>
															(por
															ingreso/renovación)
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#ff9900",
															}}
														>
															Miembro
															<strong>
																{" "}
																Oro{" "}
															</strong>
															Profesional
															Sanitario ={" "}
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$153.00 "
																	: "$61.20 "}
																Tether USDT{" "}
															</strong>
															(por
															ingreso/renovación)
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#800080",
															}}
														>
															Miembro
															<strong>
																{" "}
																Zafiro{" "}
															</strong>
															Profesional
															Sanitario =
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$600.00 "
																	: "$240.00 "}
																Tether USDT{" "}
															</strong>
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#ff0000",
															}}
														>
															Miembro
															<strong>
																{" "}
																Rubí{" "}
															</strong>
															Profesional
															Sanitario =
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$1500.00 "
																	: "$600.00 "}
																Tether USDT
															</strong>
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#0080000",
															}}
														>
															Miembro
															<strong>
																{" "}
																Esmeralda{" "}
															</strong>
															Profesional
															Sanitario =
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$3000.00 "
																	: "$1200.00 "}
																Tether USDT{" "}
															</strong>
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#ff00ff",
															}}
														>
															Miembro
															<strong>
																{" "}
																Diamante{" "}
															</strong>
															Profesional
															Sanitario =
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$6000.00 "
																	: "$2400.00 "}
																Tether USDT
															</strong>
														</Typography>

														{/* promotor */}
														<Typography
															component='li'
															style={{
																color: "#000080",
															}}
														>
															{" "}
															Miembro{" "}
															<strong>
																Básico
															</strong>{" "}
															Promotor de Ventas ={" "}
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$6.00 "
																	: "$2.40 "}
																Tether USDT
															</strong>{" "}
															(por
															ingreso/renovación)
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#800000",
															}}
														>
															Miembro
															<strong>
																{" "}
																Bronce{" "}
															</strong>
															Promotor de Ventas =
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$17.10 "
																	: "$6.84 "}
																Tether USDT{" "}
															</strong>
															(por
															ingreso/renovación)
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#333333",
															}}
														>
															Miembro
															<strong>
																{" "}
																Plata{" "}
															</strong>
															Promotor de Ventas ={" "}
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$32.40 "
																	: "$12.96 "}
																Tether USDT{" "}
															</strong>
															(por
															ingreso/renovación)
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#ff9900",
															}}
														>
															Miembro
															<strong>
																{" "}
																Oro{" "}
															</strong>
															Promotor de Ventas ={" "}
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$61.20 "
																	: "$24.48 "}
																Tether USDT{" "}
															</strong>
															(por
															ingreso/renovación)
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#800080",
															}}
														>
															Miembro
															<strong>
																{" "}
																Zafiro{" "}
															</strong>
															Promotor de Ventas =
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$300.00 "
																	: "$120.00 "}
																Tether USDT{" "}
															</strong>
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#ff0000",
															}}
														>
															Miembro
															<strong>
																{" "}
																Rubí{" "}
															</strong>
															Promotor de Ventas =
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$750.00 "
																	: "$300.00 "}
																Tether USDT
															</strong>
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#0080000",
															}}
														>
															Miembro
															<strong>
																{" "}
																Esmeralda{" "}
															</strong>
															Promotor de Ventas =
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$1500.00 "
																	: "$600.00 "}
																Tether USDT{" "}
															</strong>
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#ff00ff",
															}}
														>
															Miembro
															<strong>
																{" "}
																Diamante{" "}
															</strong>
															Promotor de Ventas =
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$2400.00 "
																	: "$1200.00 "}
																Tether USDT
															</strong>
														</Typography>
													</Typography>
												</Typography>
											</AccordionDetails>
										</Accordion>
										<Accordion
											sx={{
												border: "1px solid #018f98",
												backgroundColor: "transparent",
												color: "#018f98",
											}}
										>
											<AccordionSummary
												aria-controls='panel2a-content'
												id='panel2a-header'
											>
												<Typography
													sx={{ fontWeight: 800 }}
												>
													Cambios
												</Typography>
											</AccordionSummary>
											<AccordionDetails>
												<Typography
													sx={{ textAlign: "left" }}
												>
													Puedes
													<strong> cambiar </strong>o
													<strong> mejorar </strong>tu
													<strong> membresía </strong>
													en cualquier momento
													<strong>
														{" "}
														sin perder{" "}
													</strong>
													tus invitaciones. Si por
													ejemplo, tu o tus invitados
													deciden
													<strong> mejorar </strong>
													sus membresías, también los
													<strong>
														{" "}
														beneficios{" "}
													</strong>
													percibidos por estos
													invitados
													<strong>
														{" "}
														mejorarán. ¡Si, tus
														invitados son tuyos
														permanentemente!
													</strong>
												</Typography>
											</AccordionDetails>
										</Accordion>
										<Accordion
											sx={{
												border: "1px solid #018f98",
												backgroundColor: "transparent",
												color: "#018f98",
											}}
										>
											<AccordionSummary
												aria-controls='panel2a-content'
												id='panel2a-header'
											>
												<Typography
													sx={{ fontWeight: 800 }}
												>
													Transparencia
												</Typography>
											</AccordionSummary>
											<AccordionDetails>
												<Typography
													sx={{ textAlign: "left" }}
												>
													Podrás visualizar y
													mantenerte al día de todas
													las operaciones realizadas
													en la plataforma en la
													sección Historial. Presiona
													este enlace para dirigirte a
													la sección Historial.
												</Typography>
											</AccordionDetails>
										</Accordion>
									</Box>
								</Box>
							</Box>
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</GeneralLayout>
	);
};
