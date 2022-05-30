import Button from '@mui/material/Button';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import LoginIcon from '@mui/icons-material/Login';

import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Grid } from '@mui/material';

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
  clear,
  isLogin,
}) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen();

  React.useEffect(() => {
    return () => {
      clear();
    };
  }, []);

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
            <Box>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                {!isLogin ? 'Please Login to Zesty' : title}
              </Typography>
              <Typography
                id="transition-modal-description"
                sx={{ mt: 2 }}
                paddingY={4}
              >
                {message}
              </Typography>
              <Grid item xs={12}>
                {!isLogin ? (
                  <Button
                    size={'medium'}
                    variant="contained"
                    color="secondary"
                    sx={{ fontWeight: 'bold' }}
                    endIcon={<LoginIcon />}
                    fullWidth
                    component="a"
                    href="https://accounts.zesty.io"
                  >
                    Login
                  </Button>
                ) : (
                  <Button
                    fullWidth
                    sx={{ height: 54, minWidth: 150 }}
                    variant="contained"
                    color="secondary"
                    className="contactButton"
                    size="medium"
                    type="button"
                    onClick={handleClose}
                  >
                    ok
                  </Button>
                )}
              </Grid>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
