import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';
import { Skeleton } from '@mui/material';
import { setCookies } from 'cookies-next';
import { Typography } from '@mui/material';

const AppNavigation = ({
  onSidebarOpen,
  colorInvert = false,
  loading = false,
  trigger,
  userInfo = {}
}) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const router = useRouter();

  const firstName = userInfo?.firstName;


  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="Zesty.io Dashboard"
        width={{ xs: 100, md: 150 }}
      >
        {/* if user not logged in show full logo  */}
       
          <Box
            component={'img'}
            src="https://brand.zesty.io/zesty-io-logo.svg"
            height={41}
            width={41}
          />
      </Box>
      <Box
        sx={{ display: { xs: 'none', md: 'flex' } }}
        alignItems={'center'}
      >
        test
      </Box>
    </Box>
  );
};

AppNavigation.propTypes = {
  onSidebarOpen: PropTypes.func,
  colorInvert: PropTypes.bool,
};

export default React.memo(AppNavigation);
