import React, { useState } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import PopupBox from './PopupBox';

const TicketsModal = (details) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        color={'primary'}
        size={'large'}
        sx={{
          bgcolor: alpha(theme.palette.primary.light, 0.1),
          fontWeight: 700,
        }}
        startIcon={<RemoveRedEyeIcon />}
        onClick={() => setOpen(true)}
      >
        Click to open the popup
      </Button>
      <PopupBox open={open} onClose={() => setOpen(false)} details={details} />
    </>
  );
};

export default TicketsModal;
