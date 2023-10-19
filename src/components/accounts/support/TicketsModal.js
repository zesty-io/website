import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import PopupBox from './PopupBox';
import { useRouter } from 'next/router';
const TicketsModal = ({ ticket, viewModal }) => {
  const theme = useTheme();

  const handleRoute = (ticketNumber) => {
    const currentPath = router.asPath; // to get current route
    router.push(`${currentPath}/${ticketNumber}`);
  };

  const currentTicket = (item) => {
    handleRoute(item);
  };
  const router = useRouter();
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
        onClick={() => currentTicket(ticket.ticketNumber)}
      >
        Click to open the popup
      </Button>
      <PopupBox open={viewModal} onClose={() => {}} ticket={ticket} />
    </>
  );
};

export default TicketsModal;
