import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const PopupBox = ({ onClose, open }) => {
  return (
    <Dialog
      onClose={onClose}
      open={open}
      maxWidth={'sm'}
      sx={{
        '& .MuiPaper-root': {
          borderRadius: 4,
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingY: { xs: 4, sm: 10 },
          paddingX: { xs: 4, sm: 12 },
        }}
      >
        <Typography
          variant={'h5'}
          fontWeight={700}
          align={'center'}
          marginBottom={4}
        >
          T H E F R O N T
        </Typography>
        <Typography align={'center'}>Enter your e-mail below & get</Typography>
        <Typography
          variant={'h2'}
          fontWeight={700}
          align={'center'}
          color={'primary'}
          marginY={1}
        >
          20% OFF
        </Typography>
        <Typography align={'center'}>
          <Typography component={'span'} fontWeight={700}>
            On your next purchase{' '}
          </Typography>
          + exclusive access to new products
        </Typography>
        <Grid container spacing={2} sx={{ marginY: 4 }}>
          <Grid item xs={12}>
            <TextField
              label="Enter your email"
              variant="outlined"
              name={'email'}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              size={'large'}
              variant={'contained'}
              type={'submit'}
              fullWidth
            >
              GET MY 20% OFF
            </Button>
          </Grid>
        </Grid>
        <Typography
          align={'center'}
          sx={{ textDecoration: 'underline', cursor: 'pointer' }}
          onClick={onClose}
        >
          I am not interested
        </Typography>
      </Box>
    </Dialog>
  );
};

PopupBox.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default PopupBox;
