import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@mui/material/Drawer';
import { SidebarNav } from './components';

const Sidebar = ({ open, variant, onClose }) => {
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
          top: { xs: 0, md: 71 },
          height: { xs: '100%', md: 'calc(100% - 71px)' },
        },
      }}
    >
      <SidebarNav />
    </Drawer>
  );
};

Sidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
};

export default Sidebar;
