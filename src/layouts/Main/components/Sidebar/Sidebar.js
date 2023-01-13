import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { SidebarNav } from './components';

const Sidebar = ({ open, variant, onClose, flyoutNavigation: data = [] }) => {
  // Sort the navigation data array to match with the sorting on the cms
  const flyoutNavigation = data.sort((item1, item2) =>
    item1.sort_order > item2.sort_order
      ? 1
      : item1.sort_order < item2.sort_order
      ? -1
      : 0,
  );

  return (
    <Drawer
      anchor="left"
      onClose={() => onClose()}
      open={open}
      variant={variant}
      sx={{
        '& .MuiPaper-root': {
          width: '100%',
          maxWidth: 280,
        },
      }}
    >
      <Box
        sx={{
          height: '100%',
          padding: 1,
        }}
      >
        <SidebarNav flyoutNavigation={flyoutNavigation} />
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
