import Button from '@mui/material/Button';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import LoginIcon from '@mui/icons-material/Login';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
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
  handleOk = () => {},
}) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen();
    handleOk();
  };
  const theme = useTheme();
  const isSuccess = title.toLowerCase() === 'success';

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
              <Box sx={{ fontSize: '5rem', textAlign: 'center' }}>
                {isSuccess ? (
                  <CheckCircleOutlineIcon color="success" fontSize="inherit" />
                ) : (
                  <ErrorOutlineIcon color="error" fontSize="inherit" />
                )}
              </Box>
              <Typography
                id="transition-modal-title"
                variant="h4"
                component="h2"
                sx={{
                  textAlign: 'center',
                  color: isSuccess
                    ? theme.palette.zesty.zestyGreen
                    : theme.palette.zesty.zestyRose,
                }}
              >
                {title}
              </Typography>
              <Typography
                id="transition-modal-description"
                sx={{ mt: 2, textAlign: 'center' }}
                paddingY={2}
              >
                {message}
              </Typography>
              <Grid item xs={12}>
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
                  OK
                </Button>
              </Grid>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
