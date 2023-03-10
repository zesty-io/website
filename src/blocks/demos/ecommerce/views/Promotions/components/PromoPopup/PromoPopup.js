import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const PromoPopup = ({ onClose, open }) => {
  return (
    <Dialog
      onClose={onClose}
      open={open}
      maxWidth={'lg'}
      sx={{
        '& .MuiPaper-root': {
          borderRadius: 0,
        },
      }}
    >
      <Grid container spacing={0}>
        <Grid item xs={12} md={5}>
          <Box
            component={'img'}
            src={'https://assets.maccarianagency.com/backgrounds/img61.jpg'}
            sx={{
              width: 1,
              height: 1,
              objectFit: 'cover',
              maxHeight: { xs: 200, sm: 280, md: 1 },
            }}
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingY: { xs: 4, md: 10 },
              paddingX: { xs: 4, md: 12 },
            }}
          >
            <Typography
              variant={'h5'}
              fontWeight={700}
              align={'center'}
              marginBottom={4}
              color={'primary'}
            >
              T H E F R O N T
            </Typography>
            <Typography
              variant={'h3'}
              fontWeight={700}
              align={'center'}
              marginBottom={2}
            >
              Save big on your next order
            </Typography>
            <Typography align={'center'}>
              Subscribe toour newsletter and{' '}
              <Typography component={'span'} fontWeight={700}>
                get 20% OFF for your first order
              </Typography>
            </Typography>
            <Grid container spacing={2} sx={{ marginY: 4 }}>
              <Grid item container xs={12} justifyContent={'center'}>
                <TextField
                  label="Enter your email"
                  variant="outlined"
                  name={'email'}
                  sx={{ minWidth: { sm: 320 } }}
                />
              </Grid>
              <Grid item container xs={12} justifyContent={'center'}>
                <Button
                  size={'large'}
                  variant={'contained'}
                  type={'submit'}
                  sx={{ fontWeight: 700 }}
                >
                  Join now
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
        </Grid>
      </Grid>
    </Dialog>
  );
};

PromoPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default PromoPopup;
