import * as React from 'react';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import { Chip, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { grey } from '@mui/material/colors';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxWidth: 800,
  maxHeight: 800,
  bgcolor: 'background.paper',
  boxShadow: 2,
  p: 2,
  borderRadius: 2,
};

export const SearchModal = ({ children, sx }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // handle open on ctrl+k
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === 'k') {
        handleOpen();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div>
      <TextField
        data-testid="algolia-search-trigger"
        placeholder="Search..."
        onClick={handleOpen}
        onChange={(e) => {
          e.target.value = '';
          handleOpen();
        }}
        size="small"
        color="secondary"
        sx={{ cursor: 'text', ...sx }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <Chip
                size="small"
                variant="outlined"
                label="Ctrl+K"
                sx={{ color: grey[500] }}
              />
            </InputAdornment>
          ),
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
};
