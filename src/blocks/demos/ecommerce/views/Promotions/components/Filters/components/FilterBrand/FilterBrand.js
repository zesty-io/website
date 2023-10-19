import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const FilterBrand = () => {
  const theme = useTheme();
  const [brands, setBrands] = useState([]);
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

  const handleCheckboxChange = (item) => {
    const newBrands = brands;
    const index = newBrands.indexOf(item);
    index === -1 ? newBrands.push(item) : newBrands.splice(index, 1);
    setBrands(newBrands);
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
        <Typography>Brand</Typography>
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
            <Stack spacing={1} marginTop={1}>
              {[
                'Adidas',
                'Nike',
                'Puma',
                'OVS',
                'H&M',
                'Reebok',
                'Zara',
                'Other',
              ].map((item) => (
                <Box key={item}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="primary"
                        defaultChecked={brands.indexOf(item) >= 0}
                        onChange={() => handleCheckboxChange(item)}
                      />
                    }
                    label={item}
                  />
                </Box>
              ))}
            </Stack>
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

export default FilterBrand;
