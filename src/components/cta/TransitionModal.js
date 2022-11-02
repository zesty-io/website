import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #FF5D0A',
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
  fontFamily: 'Mulish',
};

export default function TransitionsModal({
  title = 'Thank you',
  message = 'Have a great day',
  open,
  setOpen,
}) {
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {title}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {message}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
