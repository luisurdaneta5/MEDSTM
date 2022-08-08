import React, { useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setNewBlog } from "../../../store/slices/dashboard";
import { toast } from "react-toastify";

export const BlogCreateScreen = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [title, setTitle] = useState("");
	const [image, setImage] = useState();
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

		if (image === undefined) {
			toast("Ingrese Una Imagen", {
				type: "error",
				autoClose: 5000,
				position: "top-right",
				draggable: true,
			});
		}

		if (title !== "" && content !== "<p><br></p>" && image !== undefined) {
			dispatch(setNewBlog(title, content, editor, image));

			navigate("/dashboard/blogs");
		}
	};
	return (
		<DashboardLayout>
			<Container maxWidth='lg'>
				<Box sx={{ mb: 5 }}>
					<Typography variant='h6' componet='div'>
						Crear nuevo articulo
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
						<input
							type='file'
							className='dropzone'
							onChange={handleFileChange}
							name='image'
							accept='image/png,image/jpeg'
						/>
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
							enviar
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
