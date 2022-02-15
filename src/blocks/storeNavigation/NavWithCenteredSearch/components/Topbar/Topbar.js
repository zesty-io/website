import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Select from '@mui/material/Select';

const Topbar = ({ onSidebarOpen }) => {
  const theme = useTheme();

  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      justifyContent={{ xs: 'space-between', md: 'flex-start' }}
      width={1}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography fontWeight={700} color={'text.primary'}>
          T H E F R O N T
        </Typography>
        <Box sx={{ minWidth: 100, marginLeft: 2 }}>
          <FormControl fullWidth>
            <Select
              defaultValue={'usd'}
              sx={{
                '& .MuiSelect-select': {
                  paddingY: 1,
                  border: `1px solid ${theme.palette.divider}`,
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  border: '0 !important',
                },
              }}
            >
              <MenuItem value={'usd'}>USD</MenuItem>
              <MenuItem value={'euro'}>EURO</MenuItem>
              <MenuItem value={'DRAM'}>DRAM</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: 'none', md: 'block' },
          flexGrow: 1,
          marginX: 2,
          '& .MuiOutlinedInput-notchedOutline': {
            border: '0 !important',
          },
          '& .MuiOutlinedInput-input': {
            padding: 1,
          },
        }}
      >
        <FormControl fullWidth variant="outlined">
          <OutlinedInput
            sx={{
              background: theme.palette.background.paper,
              border: `1px solid ${theme.palette.divider}`,
            }}
            startAdornment={
              <InputAdornment position="start">
                <Box
                  component={'svg'}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width={24}
                  height={24}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </Box>
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
      <Box display={{ xs: 'none', md: 'flex' }}>
        <Link
          component={Button}
          href={'#'}
          size={'large'}
          variant={'body1'}
          underline={'none'}
          sx={{
            color: 'text.primary',
            justifyContent: 'space-between',
          }}
          endIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          }
        >
          Whishlist
        </Link>
        <Link
          component={Button}
          href={'#'}
          size={'large'}
          variant={'body1'}
          underline={'none'}
          sx={{
            color: 'text.primary',
            justifyContent: 'space-between',
          }}
          endIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          }
        >
          Cart
        </Link>
        <Link
          component={Button}
          href={'#'}
          size={'large'}
          variant={'body1'}
          underline={'none'}
          sx={{
            color: 'text.primary',
            justifyContent: 'space-between',
          }}
          endIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          }
        >
          Sign in
        </Link>
      </Box>
      <Button
        onClick={() => onSidebarOpen()}
        aria-label="Menu"
        variant={'outlined'}
        sx={{
          border: 0,
          minWidth: 'auto',
          padding: 0,
          marginLeft: 2,
          color: 'text.primary',
          display: { xs: 'flex', md: 'none' },
          '&:hover': {
            border: 0,
          },
        }}
      >
        <MenuIcon />
      </Button>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
};

export default Topbar;
