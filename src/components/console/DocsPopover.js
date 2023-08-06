import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import LanguageIcon from '@mui/icons-material/Language';

export const DocsPopover = ({ onChange, options }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const onChangeDropdown = (data) => {
    onChange(data);
  };

  return (
    <>
      <Button
        aria-owns={open ? 'simple-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        startIcon={<LanguageIcon />} // Add the LanguageIcon as the start icon
      >
        Open Popover
      </Button>
      <Popover
        id="simple-popover"
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <div style={{ width: '15rem' }}>
          {options.map((option) => (
            <Button
              key={option.label}
              onClick={() => onChangeDropdown(option.value)}
              fullWidth
            >
              {option.label}
            </Button>
          ))}
        </div>
      </Popover>
    </>
  );
};
