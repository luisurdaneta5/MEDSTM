import { Box, Modal, Typography, Button } from "@mui/material";
import Avatar from "react-avatar-edit";
import { useState } from "react";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 390,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

export const ModalImg = ({
	open,
	onCrop,
	onClose,
	setOpen,
	onBeforeFileLoad,
}) => {
	const handleClose = () => setOpen(false);

	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
		>
			<Box sx={style}>
				<Avatar
					width={330}
					height={295}
					onCrop={onCrop}
					onClose={onClose}
					onBeforeFileLoad={onBeforeFileLoad}
					label='Seleccione una imagen...'
				/>
				<Box sx={{ mt: 2 }}>
					<Button
						variant='contained'
						color='primary'
						fullWidth
						onClick={handleClose}
					>
						Guardar
					</Button>
				</Box>
			</Box>
		</Modal>
	);
};
