import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';

const PopupBox = ({ onClose, open }) => {
  return (
    <Dialog
      onClose={onClose}
      open={open}
      maxWidth={'lg'}
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
          alignItems: 'left',
          paddingY: { xs: 4, sm: 8 },
          paddingX: { xs: 4, sm: 10 },
        }}
      >
        <CloseIcon
          sx={{
            position: 'absolute',
            right: '5%',
            top: '10%',
            cursor: 'pointer',
          }}
          onClick={onClose}
        ></CloseIcon>
        <Typography
          variant={'h5'}
          fontWeight={700}
          align={'left'}
          marginBottom={4}
        >
          test
        </Typography>
        <Typography variant={'span'} color={'gray'} align={'left'}>
          test
        </Typography>
        <Typography variant={'p'} align={'left'} marginY={3}>
          test
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
