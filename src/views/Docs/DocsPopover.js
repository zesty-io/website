import * as React from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import { Stack, Typography } from '@mui/material';

export const DocsPopover = ({
  value = 'no value',
  setvalue = () => {},
  items = [],
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleOnchange = (e) => {
    if (e.value) {
      setvalue(e.value);
    }
    handleClose();
  };
  return (
    <Stack sx={{ width: '5rem' }}>
      <Stack textAlign={'left'}>
        <Button
          size="small"
          aria-describedby={id}
          color="secondary"
          variant="text"
          onClick={handleClick}
        >
          <Typography>{value}</Typography>
        </Button>
      </Stack>
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
        {items.map((e, i) => {
          return (
            <Stack key={i} width={'10rem'} onClick={() => handleOnchange(e)}>
              <Button size="small" fullWidth color="secondary">
                {e.label}
              </Button>
            </Stack>
          );
        })}
      </Popover>
    </Stack>
  );
};
