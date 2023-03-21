import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import { NavItem } from './components';

const MobileMenu = ({ pages = [] }) => {
  return (
    <Box>
      {pages.map((p, i) => (
        <Box key={i} marginY={2}>
          {!p.children ? (
            <Link
              href={p.href}
              color={'text.primary'}
              underline={'none'}
              sx={{
                '&:hover': {
                  color: 'primary.main',
                },
              }}
            >
              {p.title}
            </Link>
          ) : (
            <NavItem title={p.title} items={p.children} />
          )}
        </Box>
      ))}
    </Box>
  );
};

MobileMenu.propTypes = {
  pages: PropTypes.array.isRequired,
};

export default MobileMenu;
