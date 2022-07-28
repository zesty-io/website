import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';
import SingleNavItem from '../Topbar/components/NavItem/SingleNavItem';

const AppNavigation = ({
  onSidebarOpen,
  colorInvert = false,
  loading = false,
  trigger,
  userInfo = {},
}) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const router = useRouter();

  const firstName = userInfo?.firstName;

  return (
    <Box
      display={'flex'}
      justifyContent={'flex-start'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="Zesty.io Dashboard"
        width={{ xs: 50, md: 50 }}
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
        justifyContent="flex-start"
      >
        <Box>
          <Box marginLeft={4}>
            <SingleNavItem
              title="instances"
              id="sdsadf"
              url="/instances"
              colorInvert={colorInvert}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

AppNavigation.propTypes = {
  onSidebarOpen: PropTypes.func,
  colorInvert: PropTypes.bool,
};

export default React.memo(AppNavigation);
