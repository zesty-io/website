import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';
import { forwardRef } from 'react';
import { IconButton } from '@mui/material';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CustomDialog = ({
  title,
  open,
  handleClose,
  children,
  actions,
  showCloseIcon = false,
}) => {
  const handleOnClose = (event, reason) => {
    if (['escapeKeyDown', 'backdropClick'].includes(reason)) {
      return;
    } else {
      handleClose(event);
    }
  };
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleOnClose}
      aria-describedby="alert-dialog-slide-description"
      sx={{
        '& .MuiDialog-container': {
          '& .MuiPaper-root': {
            width: '100%',
            maxWidth: '500px', // Set your width here
          },
        },
      }}
    >
      <DialogTitle>
        {title}
        {showCloseIcon && (
          <IconButton
            aria-label="close"
            onClick={handleOnClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        )}
      </DialogTitle>
      <DialogContent sx={{ padding: '1rem 0.5rem' }}>{children}</DialogContent>
      {actions && <DialogActions>{actions}</DialogActions>}
    </Dialog>
  );
};

export default CustomDialog;
