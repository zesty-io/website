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
  bgcolor: 'background.paper',
  boxShadow: 2,
  p: 2,
  borderRadius: 4,
};

export const SearchModal = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <TextField
        placeholder="Search..."
        onClick={handleOpen}
        onChange={(e) => {
          e.target.value = '';
          handleOpen();
        }}
        size="small"
        color="secondary"
        sx={{ cursor: 'text' }}
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
