import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from '@mui/material/Link';

const SingleNavItem = ({ title, id, url, colorInvert = false }) => {
  const [activeLink, setActiveLink] = useState('');
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '');
  }, []);

  const hasActiveLink = activeLink === url;

  const linkColor = colorInvert ? 'common.white' : 'text.primary';

  return (
    <Link
      fontWeight={hasActiveLink ? 700 : 400}
      color={linkColor}
      href={url}
      underline="none"
      sx={{
        ':hover': {
          fontWeight: '700',
        },
      }}
    >
      {title}
    </Link>
  );
};

SingleNavItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  colorInvert: PropTypes.bool,
};

export default SingleNavItem;
