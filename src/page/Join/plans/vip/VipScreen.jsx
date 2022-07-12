import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Button,
	Grid,
	Paper,
	Typography,
	Container,
} from "@mui/material";

import React from "react";
import { Link, useParams } from "react-router-dom";
import { GeneralLayout } from "../../../../layouts/GeneralLayout";

export const VipScreen = () => {
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
										className='fa-solid fa-gem'
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
										ZAFIRO
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
											USDT $2000.00/MES
											<br />
											DISPONIBLE 300
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
											USDT $1000.00/MES
											<br />
											DISPONIBLES 600
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
															Miembros Zafiro{" "}
														</strong>
														ocupan el
														<strong>
															{" "}
															cuarto lugar{" "}
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
													Exclusividad VIP
												</Typography>
											</AccordionSummary>
											<AccordionDetails>
												<Typography
													component='span'
													sx={{ textAlign: "left" }}
												>
													Como miembro y beneficiario
													<strong>
														VIP, obtienes{" "}
														{user ===
														"professional-healthcare"
															? "0.10%"
															: "0.05%"}{" "}
													</strong>{" "}
													de todas las membresias
													<strong>
														{" "}
														Premiun/VIP
													</strong>{" "}
													a partir del momento en que
													te unes. Esto incluye
													<strong>
														Miembros Invitados y
														Miembros No Invitados
													</strong>
													( Profesionales de la Salud
													y Promotores de Venta).
													Tambien
													<strong>
														Obtienes el{" "}
														{user ===
														"professional-healthcare"
															? " 0.10%"
															: "0.05%"}{" "}
													</strong>
													Cada vez que este/estos
													miembros deseen renovar su
													membresia (en caso de
													requerirlo). Ejemplo.
													<strong>
														{" "}
														Por cada miembro
														Premiun/VIP que sea
														admitido en la
														plataforma (Sea este No
														Invitado o Invitado):
													</strong>
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
																	? "$0.05 "
																	: "$0.03 "}
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
																	? "$0.14 "
																	: "$0.07 "}
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
																	? "$0.27 "
																	: "$0.14 "}
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
																	? "$0.51 "
																	: "$0.26 "}
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
																	? "$2.00 "
																	: "$1.00 "}
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
																	? "$5.00 "
																	: "$2.50 "}
																Tether USDT
															</strong>
														</Typography>
														<Typography
															component='li'
															style={{
																color: "#008000",
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
																	? "$10.00 "
																	: "$5.00 "}
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
																	? "$20.00 "
																	: "$10.00 "}
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
																	? "$0.02 "
																	: "$0.01 "}
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
																	? "$0.06 "
																	: "$0.03 "}
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
																	? "$0.11 "
																	: "$0.05 "}
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
																	? "$0.20 "
																	: "$0.10 "}
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
																	? "$1.00 "
																	: "$0.50 "}
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
																	? "$2.50 "
																	: "$1.25 "}
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
																	? "$5.00 "
																	: "$2.50 "}
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
																	? "$10.00 "
																	: "$5.00 "}
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
										className='fa-solid fa-gem'
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
										RUBI
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
											USDT $5000.00/MES
											<br />
											DISPONIBLE 120
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
											USDT $2500.00/MES
											<br />
											DISPONIBLE 240
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
															Miembros Rubi{" "}
														</strong>
														ocupan el
														<strong>
															{" "}
															tercer lugar{" "}
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
													Exclusividad VIP
												</Typography>
											</AccordionSummary>
											<AccordionDetails>
												<Typography
													component='span'
													sx={{ textAlign: "left" }}
												>
													Como miembro y beneficiario
													<strong>
														VIP, obtienes{" "}
														{user ===
														"professional-healthcare"
															? "0.25%"
															: "0.13%"}{" "}
													</strong>{" "}
													de todas las membresias
													<strong>
														{" "}
														Premiun/VIP
													</strong>{" "}
													a partir del momento en que
													te unes. Esto incluye
													<strong>
														Miembros Invitados y
														Miembros No Invitados
													</strong>
													( Profesionales de la Salud
													y Promotores de Venta).
													Tambien
													<strong>
														Obtienes el{" "}
														{user ===
														"professional-healthcare"
															? " 0.25% "
															: "0.13%"}{" "}
													</strong>
													Cada vez que este/estos
													miembros deseen renovar su
													membresia (en caso de
													requerirlo). Ejemplo.
													<strong>
														{" "}
														Por cada miembro
														Premiun/VIP que sea
														admitido en la
														plataforma (Sea este No
														Invitado o Invitado):
													</strong>
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
																	? "$0.13 "
																	: "$0.07 "}
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
																	? "$0.36 "
																	: "$0.07 "}
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
																	? "$0.68 "
																	: "$0.19 "}
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
																	? "$1.28 "
																	: "$0.35 "}
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
																	? "$5.00 "
																	: "$2.60 "}
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
																	? "$12.50 "
																	: "$6.50 "}
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
																	? "$25.00 "
																	: "$13.00 "}
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
																	? "$50.00 "
																	: "$26.00 "}
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
																	? "$0.05 "
																	: "$0.03 "}
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
																	? "$0.14 "
																	: "$0.07 "}
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
																	? "$0.27 "
																	: "$0.14 "}
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
																	? "$0.51 "
																	: "$0.27 "}
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
																	? "$2.50 "
																	: "$0.27 "}
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
																	? "$6.25 "
																	: "$3.25 "}
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
																	? "$12.50 "
																	: "$6.50 "}
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
																	? "$25.00 "
																	: "$13.00 "}
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
										className='fa-solid fa-gem'
										style={{
											fontSize: 50,
											color: "#009306",
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
										ESMERALDA
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
											USDT $5,000.00/MES
											<br />
											DISPONIBLE 60
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
											USDT $5,000.00/MES
											<br />
											DISPONIBLE 120
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
															segundo lugar{" "}
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
													Exclusividad VIP
												</Typography>
											</AccordionSummary>
											<AccordionDetails>
												<Typography
													component='span'
													sx={{ textAlign: "left" }}
												>
													Como miembro y beneficiario
													<strong>
														VIP, obtienes{" "}
														{user ===
														"professional-healthcare"
															? "0.50%"
															: "0.25%"}{" "}
													</strong>{" "}
													de todas las membresias
													<strong>
														{" "}
														Premiun/VIP
													</strong>{" "}
													a partir del momento en que
													te unes. Esto incluye
													<strong>
														Miembros Invitados y
														Miembros No Invitados
													</strong>
													( Profesionales de la Salud
													y Promotores de Venta).
													Tambien
													<strong>
														Obtienes el{" "}
														{user ===
														"professional-healthcare"
															? " 0.50%"
															: "0.25%"}{" "}
													</strong>
													Cada vez que este/estos
													miembros deseen renovar su
													membresia (en caso de
													requerirlo). Ejemplo.
													<strong>
														{" "}
														Por cada miembro
														Premiun/VIP que sea
														admitido en la
														plataforma (Sea este No
														Invitado o Invitado):
													</strong>
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
																	? "$0.25 "
																	: "$0.13 "}
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
																	? "$0.71 "
																	: "$0.36 "}
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
																	? "$1.35 "
																	: "$0.68 "}
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
																	? "$2.55 "
																	: "$1.28 "}
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
																	? "$10.00 "
																	: "$5.00 "}
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
																	? "$25.00 "
																	: "$12.50 "}
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
																	? "$50.00 "
																	: "$25.00 "}
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
																	? "$100.00 "
																	: "$50.00 "}
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
																	? "$0.10 "
																	: "$0.05 "}
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
																	? "$0.29 "
																	: "$0.14 "}
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
																	? "$0.54 "
																	: "$0.27 "}
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
																	? "$1.02 "
																	: "$0.51 "}
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
																	? "$5.00 "
																	: "$2.50 "}
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
																	? "$12.50 "
																	: "$6.25 "}
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
																	? "$25.00 "
																	: "$12.50 "}
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
																	? "$50.00 "
																	: "$25.00 "}
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
										className='fa-solid fa-gem'
										style={{
											fontSize: 50,
											color: "#FF539E",
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
										DIAMANTE
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
											USDT $20000.00/MES
											<br />
											DISPONIBLE 30
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
											USDT $10000/MES
											<br />
											DISPONIBLE 60
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
															primer lugar{" "}
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
													Exclusividad VIP
												</Typography>
											</AccordionSummary>
											<AccordionDetails>
												<Typography
													component='span'
													sx={{ textAlign: "left" }}
												>
													Como miembro y beneficiario
													<strong>
														VIP, obtienes{" "}
														{user ===
														"professional-healthcare"
															? "1%"
															: "0.50%"}{" "}
													</strong>{" "}
													de todas las membresias
													<strong>
														{" "}
														Premiun/VIP
													</strong>{" "}
													a partir del momento en que
													te unes. Esto incluye
													<strong>
														Miembros Invitados y
														Miembros No Invitados
													</strong>
													( Profesionales de la Salud
													y Promotores de Venta).
													Tambien
													<strong>
														Obtienes el{" "}
														{user ===
														"professional-healthcare"
															? " 1% "
															: "0.50%"}{" "}
													</strong>
													Cada vez que este/estos
													miembros deseen renovar su
													membresia (en caso de
													requerirlo). Ejemplo.
													<strong>
														{" "}
														Por cada miembro
														Premiun/VIP que sea
														admitido en la
														plataforma (Sea este No
														Invitado o Invitado):
													</strong>
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
																	? "$0.50 "
																	: "$0.25 "}
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
																	? "$1.43 "
																	: "$0.71 "}
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
																	? "$2.70 "
																	: "$1.35 "}
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
																	? "$5.10 "
																	: "$2.55 "}
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
																	? "$20.00 "
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
															Profesional
															Sanitario =
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$50.00 "
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
															Profesional
															Sanitario =
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$100.00 "
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
															Profesional
															Sanitario =
															<strong>
																{" "}
																{user ===
																"professional-healthcare"
																	? "$200.00 "
																	: "$100.00 "}
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
																	? "$0.20 "
																	: "$0.10 "}
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
																	? "$0.57 "
																	: "$0.29 "}
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
																	? "$1.08 "
																	: "$0.54 "}
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
																	? "$2.04 "
																	: "$1.02 "}
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
																	? "$10.00 "
																	: "$5.00 "}
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
																	? "$25.00 "
																	: "$12.50 "}
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
																	? "$50.00 "
																	: "$25.00 "}
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
																	? "$100.00 "
																	: "$50.00 "}
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
