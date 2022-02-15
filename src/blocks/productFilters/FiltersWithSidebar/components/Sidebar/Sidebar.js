import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';

import {
  FilterSize,
  FilterBrand,
  FilterColor,
  FilterPrice,
  FilterGender,
} from './components';

const Sidebar = ({ open, variant, onClose }) => {
  return (
    <Drawer
      anchor="left"
      onClose={() => onClose()}
      open={open}
      variant={variant}
      sx={{
        '& .MuiPaper-root': {
          position: 'relative',
          width: '100%',
          maxWidth: 320,
          minWidth: 320,
          border: 0,
        },
      }}
    >
      <Box
        paddingY={2}
        display={'flex'}
        flexDirection={'column'}
        height={1}
        padding={{ xs: 2, md: 0 }}
      >
        <Box marginBottom={3}>
          <FilterPrice />
        </Box>
        <Box marginBottom={3}>
          <FilterGender />
        </Box>
        <Box marginBottom={3}>
          <FilterSize />
        </Box>
        <Box marginBottom={3}>
          <FilterColor />
        </Box>
        <Box>
          <FilterBrand />
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
