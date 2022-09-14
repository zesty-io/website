import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const SingleNavItem = ({ title, id, url, colorInvert = false }) => {
  const [activeLink, setActiveLink] = useState('');
  const res =
    window.location.pathname !== '/'
      ? window.location.pathname
          .split('/')
          .filter((e) => e)[0]
          .toLocaleLowerCase()
      : 'dashboard';
  useEffect(() => {
    setActiveLink(res);
  }, []);

  const hasActiveLink = activeLink === title.toLocaleLowerCase();

  const linkColor = colorInvert ? 'common.white' : 'text.primary';

  return (
    <Box>
      <Box
        display={'flex'}
        alignItems={'center'}
        aria-describedby={id}
        sx={{ cursor: 'pointer' }}
      >
        <Link
          fontWeight={hasActiveLink ? 700 : 400}
          color={linkColor}
          href={url}
          underline="none"
        >
          {title}
        </Link>
      </Box>
    </Box>
  );
};

SingleNavItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  colorInvert: PropTypes.bool,
};

export default SingleNavItem;
