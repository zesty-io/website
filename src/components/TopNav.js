import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { zestyLink } from 'lib/zestyLink';
import { useRouter } from 'next/router';

import ThemeModeToggler from 'components/ThemeModeToggler';

const TopNav = ({ nav, colorInvert = false }) => {
  const router = useRouter();

  //check if page is from ppc for hiding of footer and nav
  const isPpcPage = router.asPath.includes('/ppc');

  return (
    <Box
      display={isPpcPage ? 'none' : 'flex'}
      justifyContent={'flex-end'}
      alignItems={'center'}
    >
      <Box marginRight={{ xs: 1, sm: 2 }}>
        <Link
          underline="none"
          component="a"
          href="https://www.zesty.org"
          color={colorInvert ? 'common.white' : 'text.primary'}
        >
          Docs
        </Link>
      </Box>
      <Box marginRight={{ xs: 1, sm: 2 }}>
        <Link
          underline="none"
          component="a"
          href="https://www.github.com/zesty-io"
          color={colorInvert ? 'common.white' : 'text.primary'}
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          Github
        </Link>
      </Box>

      <Box marginRight={{ xs: 1, sm: 2 }}>
        <Link
          underline="none"
          component="a"
          href={zestyLink(nav, '7-cec987fcf5-9bht2z')}
          color={colorInvert ? 'common.white' : 'text.primary'}
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          Contact Us
        </Link>
      </Box>
      <Box>
        <ThemeModeToggler />
      </Box>
    </Box>
  );
};

TopNav.propTypes = {
  colorInvert: PropTypes.bool,
};

export default TopNav;
