import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';

export function DocsPopover({ name, options, onSelect }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (e) => {
    handleClose();
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Stack minWidth={150}>
      <Button
        aria-describedby={id}
        variant="outlined"
        size="small"
        onClick={handleClick}
        startIcon={<LanguageIcon />}
      >
        {name}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        {options.map((e) => {
          return (
            <Stack onClick={() => handleSelect(e)}>
              <Typography sx={{ p: 2 }}>{e.label}</Typography>;
            </Stack>
          );
        })}
      </Popover>
    </Stack>
  );
}
