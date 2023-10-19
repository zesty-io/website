import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';

const valuetext = (value) => `$${value[0]} - $${value[1]}`;

const FilterPrice = () => {
  const theme = useTheme();
  const [value, setValue] = useState([20, 400]);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.target);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box display={'flex'} justifyContent={'center'}>
      <Box
        display={'flex'}
        alignItems={'center'}
        border={`1px solid ${theme.palette.divider}`}
        borderRadius={2}
        paddingY={1}
        paddingX={2}
        sx={{ cursor: 'pointer' }}
        onClick={(e) => handleClick(e)}
      >
        <Typography>Price</Typography>
        <ExpandMoreIcon
          sx={{
            marginLeft: 0.5,
            width: 16,
            height: 16,
            transform: open ? 'rotate(180deg)' : 'none',
          }}
        />
      </Box>
      <Popover
        elevation={0}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        sx={{
          '.MuiPaper-root': {
            marginTop: 1,
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 2,
          },
        }}
      >
        <Stack spacing={2} maxWidth={460}>
          <Box padding={2}>
            <Typography>
              Price:{' '}
              <Typography component={'span'} fontWeight={700}>
                {valuetext(value) || ''}
              </Typography>
            </Typography>
            <Box sx={{ width: 300 }} marginTop={4} paddingX={2}>
              <Slider
                getAriaLabel={() => 'Price range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                min={20}
                max={1230}
                disableSwap={true}
              />
            </Box>
          </Box>
          <Stack
            direction={'row'}
            spacing={2}
            padding={2}
            borderTop={`1px solid ${theme.palette.divider}`}
          >
            <Button
              fullWidth
              sx={{
                fontWeight: 700,
                color: 'text.primary',
              }}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              color={'primary'}
              variant={'contained'}
              fullWidth
              onClick={handleClose}
            >
              Apply
            </Button>
          </Stack>
        </Stack>
      </Popover>
    </Box>
  );
};

export default FilterPrice;
