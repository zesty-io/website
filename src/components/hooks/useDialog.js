import { useState } from 'react';

const useDialog = (isOpen = false) => {
  const [open, setOpen] = useState(isOpen);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return [open, handleOpen, handleClose];
};

export default useDialog;
