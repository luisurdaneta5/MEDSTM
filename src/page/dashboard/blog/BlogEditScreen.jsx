import React, { useEffect, useState } from "react";
import {
	Box,
	Container,
	Input,
	InputLabel,
	TextField,
	Typography,
	Button,
} from "@mui/material";
import { DashboardLayout } from "../../../layouts/DashboardLayout";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setNewBlog, setUpdateBlog } from "../../../store/slices/dashboard";
import { toast } from "react-toastify";
import { Api } from "../../../api";
import "./styles.css";

export const BlogEditScreen = () => {
	const { id } = useParams();
	const [swicth, setSwicth] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [title, setTitle] = useState("");
	const [image, setImage] = useState("");

	const { quill, quillRef } = useQuill({
		modules: {
			toolbar: [
				["bold", "italic", "underline", "strike"],
				[{ align: [] }],

				[{ list: "ordered" }, { list: "bullet" }],
				[{ indent: "-1" }, { indent: "+1" }],

				[{ size: ["small", false, "large", "huge"] }],
				[{ header: [1, 2, 3, 4, 5, 6, false] }],

				["link", "image"],
				[{ color: [] }, { background: [] }],

				["clean"],
			],
		},
	});

	useEffect(() => {
		const getBlog = async () => {
			const resp = await Api.get("/blog/notice", {
				params: {
					id,
				},
			});

			setTitle(resp.data.notice.title);
			setImage(resp.data.notice.image);
			quill.setContents(JSON.parse(resp.data.notice.editor), "api");
		};

		if (quill && id) {
			getBlog();
		}
	}, [quill, id]);

	const handleFileChange = ({ target }) => {
		setImage(target.files[0]);
	};

	const handleChange = (e) => {
		setTitle(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const content = quill.root.innerHTML;
		const editor = JSON.stringify(quill.getContents());

		if (title === "") {
			toast.error("El titulo es obligatorio", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}

		if (content === "<p><br></p>") {
			toast.error("El contenido es obligatorio", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}

		if (content !== "<p><br></p>") {
			dispatch(setUpdateBlog(id, title, content, editor, image));

			navigate("/dashboard/blogs");
		}
	};

	const handleSwicth = () => {
		setSwicth(!swicth);
	};

	return (
		<DashboardLayout>
			<Container maxWidth='lg'>
				<Box sx={{ mb: 5 }}>
					<Typography variant='h6' componet='div'>
						Editar articulo
					</Typography>
				</Box>
				<form onSubmit={handleSubmit}>
					<Box>
						<label
							style={{
								fontWeight: "bold",
							}}
						>
							Titulo:
						</label>
						<TextField
							id=''
							label=''
							size='small'
							variant='outlined'
							fullWidth
							value={title}
							onChange={handleChange}
						/>
					</Box>

					<Box
						sx={{
							mt: 3,
						}}
					>
						<label
							style={{
								fontWeight: "bold",
							}}
						>
							Contenido:
						</label>
						<Box componet='div' ref={quillRef}></Box>
					</Box>

					<Box sx={{ mt: 2 }}>
						{swicth ? (
							<input
								type='file'
								className='dropzone'
								onChange={handleFileChange}
								name='image'
								accept='image/png,image/jpeg'
							/>
						) : (
							<Box
								onClick={handleSwicth}
								component='div'
								className='img-container'
							>
								<Box component='p' className='div-text'>
									Click para cambiar la imagen
								</Box>
								<img src={image} width='100%' alt='medstm' />
							</Box>
						)}
					</Box>
					<Box
						sx={{
							display: "flex",
							justifyContent: "flex-end",
							mt: 2,
						}}
					>
						<Button
							variant='contained'
							color='primary'
							type='submit'
						>
							guardar
						</Button>

						<Link to='/dashboard/blogs'>
							<Button
								sx={{ ml: 1 }}
								variant='contained'
								color='error'
								type='submit'
							>
								cancelar
							</Button>
						</Link>
					</Box>
				</form>
			</Container>
		</DashboardLayout>
	);
};
