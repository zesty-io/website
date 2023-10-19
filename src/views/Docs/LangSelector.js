import { Button, Menu, MenuItem, Stack, Typography } from '@mui/material';
import React from 'react';

export const LangSelector = React.memo(({ setvalue, value, options }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    if (e.value) {
      setvalue(e.value);
    }
  };

  return (
    <Stack>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color="secondary"
      >
        <Typography color={''} whiteSpace="nowrap">
          Language: {value}
        </Typography>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {options.map((e) => {
          return <MenuItem onClick={() => handleClose(e)}>{e.label}</MenuItem>;
        })}
      </Menu>
    </Stack>
  );
});
