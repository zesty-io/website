import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

const Container = ({ children, ...rest }) => (
  <Box
    maxWidth={{ md: 1600 }}
    width={1}
    margin={'0 auto'}
    paddingX={2}
    paddingY={{ xs: 2, sm: 2, md: 2 }}
    {...rest}
  >
    {children}
  </Box>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
