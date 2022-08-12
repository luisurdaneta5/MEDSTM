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
import { useEffect, useState } from "react";
import { Api } from "../../../../api";
export const PremiunScreen = () => {
	const { user } = useParams();

	const [plans, setPlans] = useState([]);
	const [premiuns, setPremiuns] = useState([]);

	useEffect(() => {
		const plans = async () => {
			const response = await Api.get("/plans/premiuns");
			setPlans(response.data.plans);
			setPremiuns(response.data.premiuns);
		};
		plans();
	}, []);

	const amount = (price) => {
		return Number.parseFloat(price).toFixed(2);
	};

	return (
		<GeneralLayout>
			<Container maxWidth='lg' sx={{ mt: 4 }}>
				<Grid container spacing={2}>
					{premiuns.map((premiun, index) => (
						<Grid item sm={6} key={index}>
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
												color: `${premiun.color}`,
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
											{premiun.name.toUpperCase()}
										</Typography>

										<Typography
											sx={{
												fontSize: 20,
												fontWeight: 800,
												mt: 1,
												mb: 2,
												color: "#147671",
											}}
										>
											USDT $
											{user === "professional-healthcare"
												? premiun.price_professional
												: premiun.price_promotor}
											/MES
											<br />
											SIN DESCUENTO
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
											{user ===
												"professional-healthcare" && (
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
															sx={{
																fontWeight: 800,
															}}
														>
															Absoluto Control
														</Typography>
													</AccordionSummary>
													<AccordionDetails>
														<Typography
															sx={{
																textAlign:
																	"left",
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
															<strong>
																{" "}
																cobro{" "}
															</strong>
															de tus servicios. Tu
															serás el responsable
															de canalizar,
															agendar o cobrar tus
															servicios a través
															de los medios que
															desees. ¡Con
															<strong>
																{" "}
																MEDS TM, dirige{" "}
															</strong>
															a cualquier
															potencial paciente
															desde tu perfil a tu
															consultorio, a tus
															redes sociales, a tu
															sitio web, a tu
															teléfono o a donde
															quieras!
														</Typography>
													</AccordionDetails>
												</Accordion>
											)}

											{user ===
												"professional-healthcare" && (
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
															sx={{
																fontWeight: 800,
															}}
														>
															Posicionamiento
														</Typography>
													</AccordionSummary>
													<AccordionDetails>
														<Typography
															sx={{
																textAlign:
																	"left",
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
															geográfica. Si
															existiera más de un
															(1) miembro con este
															tipo de membresía en
															la búsqueda, será
															tomado en cuenta
															para su
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
														Invitaciones Premium/VIP
													</Typography>
												</AccordionSummary>
												<AccordionDetails>
													<Typography
														component='span'
														sx={{
															textAlign: "left",
														}}
													>
														Obtienes{" "}
														{user ===
														"professional-healthcare"
															? premiun.percentage_professional
															: premiun.percentage_promotor}
														% de la membresía de
														cada Invitado
														Premium/VIP (esto
														incluye Promotores y
														Profesionales de la
														Salud). También obtienes
														el{" "}
														{user ===
														"professional-healthcare"
															? premiun.percentage_professional
															: premiun.percentage_promotor}
														% cada vez que
														este/estos Invitados
														Premium/VIP deseen
														renovar su membresía (en
														caso de requerirlo).
														Ejemplo. Si invitas:
														<Typography component='ul'>
															{plans.map(
																(plan) => (
																	<Typography
																		component='li'
																		style={{
																			color: `${plan.color}`,
																		}}
																	>
																		{" "}
																		Miembro{" "}
																		<strong>
																			{
																				plan.name
																			}
																		</strong>{" "}
																		Profesional
																		Sanitario
																		={" "}
																		<strong>
																			{" "}
																			$
																			{user ===
																			"professional-healthcare"
																				? amount(
																						(plan.price_professional *
																							premiun.percentage_professional) /
																							100
																				  )
																				: amount(
																						(plan.price_professional *
																							premiun.percentage_promotor) /
																							100
																				  )}
																			Tether
																			USDT
																		</strong>{" "}
																		(por
																		ingreso/renovación)
																	</Typography>
																)
															)}

															{/* promotor */}
															{plans.map(
																(plan) => (
																	<Typography
																		component='li'
																		style={{
																			color: `${plan.color}`,
																		}}
																	>
																		{" "}
																		Miembro{" "}
																		<strong>
																			{
																				plan.name
																			}
																		</strong>{" "}
																		Promotor
																		de
																		Ventas ={" "}
																		<strong>
																			{" "}
																			$
																			{user ===
																			"professional-healthcare"
																				? amount(
																						(plan.price_promotor *
																							premiun.percentage_professional) /
																							100
																				  )
																				: amount(
																						(plan.price_promotor *
																							premiun.percentage_promotor) /
																							100
																				  )}
																			Tether
																			USDT
																		</strong>{" "}
																		(por
																		ingreso/renovación)
																	</Typography>
																)
															)}
														</Typography>
													</Typography>
												</AccordionDetails>
											</Accordion>
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
														Cambios
													</Typography>
												</AccordionSummary>
												<AccordionDetails>
													<Typography
														sx={{
															textAlign: "left",
														}}
													>
														Puedes
														<strong>
															{" "}
															cambiar{" "}
														</strong>
														o
														<strong>
															{" "}
															mejorar{" "}
														</strong>
														tu
														<strong>
															{" "}
															membresía{" "}
														</strong>
														en cualquier momento
														<strong>
															{" "}
															sin perder{" "}
														</strong>
														tus invitaciones. Si por
														ejemplo, tu o tus
														invitados deciden
														<strong>
															{" "}
															mejorar{" "}
														</strong>
														sus membresías, también
														los
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
														Transparencia
													</Typography>
												</AccordionSummary>
												<AccordionDetails>
													<Typography
														sx={{
															textAlign: "left",
														}}
													>
														Podrás visualizar y
														mantenerte al día de
														todas las operaciones
														realizadas en la
														plataforma en la sección
														Historial. Presiona este
														enlace para dirigirte a
														la sección Historial.
													</Typography>
												</AccordionDetails>
											</Accordion>
										</Box>
									</Box>
								</Box>
							</Paper>
						</Grid>
					))}
				</Grid>
			</Container>
		</GeneralLayout>
	);
};
