import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

import Navigation from '../../components/Navigation';

const Sidebar = ({ open, variant, onClose }) => {
  const theme = useTheme();

  return (
    <Drawer
      anchor="left"
      onClose={() => onClose()}
      open={open}
      variant={variant}
      sx={{
        '& .MuiPaper-root': {
          width: '100%',
          maxWidth: 320,
          height: 1,
        },
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
        <Box padding={2}>
          <Typography fontWeight={700} color={'text.primary'}>
            T H E F R O N T
          </Typography>
        </Box>
        <Divider />
        <Stack spacing={2} padding={2}>
          <Box
            sx={{
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
          <Navigation />
        </Stack>
        <Box flexGrow={1} />
        <Divider />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
          <Link
            component={Button}
            href={'#'}
            size={'large'}
            variant={'body1'}
            underline={'none'}
            sx={{
              color: 'text.primary',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
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
            <span style={{ marginTop: '4px' }}>Whishlist</span>
          </Link>
          <Link
            component={Button}
            href={'#'}
            size={'large'}
            variant={'body1'}
            underline={'none'}
            sx={{
              color: 'text.primary',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
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
            <span style={{ marginTop: '4px' }}>Cart</span>
          </Link>
          <Link
            component={Button}
            href={'#'}
            size={'large'}
            variant={'body1'}
            underline={'none'}
            sx={{
              color: 'text.primary',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
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
            <span style={{ marginTop: '4px' }}>Sign in</span>
          </Link>
        </Box>
      </Box>
    </Drawer>
  );
};

Sidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
};

export default Sidebar;
