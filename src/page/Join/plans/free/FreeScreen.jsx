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
	TextField,
	Select,
	MenuItem,
	FormControl,
	InputLabel,
	Button,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
export const FreeScreen = () => {
	const { user } = useParams();
	console.log(user);
	return (
		<GeneralLayout>
			<Container maxWidth='lg' sx={{ mt: 4 }}>
				<Grid container spacing={2}>
					<Grid item lg={12}>
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
											color: "green",
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
										GRATUITA
									</Typography>
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
															Miembros Gratuitos{" "}
														</strong>
														ocupan el
														<strong>
															{" "}
															noveno lugar{" "}
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
													Obtienes 0.21% de la
													membresía de cada Invitado
													Premium/VIP (esto incluye
													Promotores y Profesionales
													de la Salud). También
													obtienes el 0.21% cada vez
													que este/estos Invitados
													Premium/VIP deseen renovar
													su membresía (en caso de
													requerirlo). Ejemplo. Si
													invitas:
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
																$0.11 Tether
																USDT
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
																$0.30 Tether
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
																$0.57 Tether
																USDT{" "}
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
																$1.07 Tether
																USDT{" "}
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
																$4.20 Tether
																USDT{" "}
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
																$10.50 Tether
																USDT
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
																$21.00 Tether
																USDT{" "}
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
																$42.00 Tether
																USDT
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
																$0.02 Tether
																USDT
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
																$0.05 Tether
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
															Promotor de Ventas ={" "}
															<strong>
																{" "}
																$0.09 Tether
																USDT{" "}
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
																$0.16 Tether
																USDT{" "}
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
																$0.80 Tether
																USDT{" "}
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
																$2.00 Tether
																USDT
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
																$4.00 Tether
																USDT{" "}
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
																$8.00 Tether
																USDT
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
													Administración
												</Typography>
											</AccordionSummary>
											<AccordionDetails
												sx={{ textAlign: "left" }}
											>
												<Typography component='ul'>
													<Typography component='li'>
														<strong>
															{" "}
															Todo Promotor y
															Profesional de la
															Salud{" "}
														</strong>
														podrá trabajar en
														<strong>
															{" "}
															MEDS TM{" "}
														</strong>
														como
														<strong>
															{" "}
															Administrador{" "}
														</strong>
														anexando a todos los
														profesionales de la
														salud en el motor de
														búsqueda. Tomando como
														referencia Google,
														Doctoralia, Top Doctors,
														entre otros directorios
														y buscadores.
													</Typography>
													<Typography component='li'>
														<strong>
															{" "}
															Recibiendo: $0.10
															Tether USDT{" "}
														</strong>
														por cada Profesional de
														la salud que anexes
														(desde tu administrador)
														al directorio. También
														el 1% del trabajo de tus
														administradores.
													</Typography>
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
