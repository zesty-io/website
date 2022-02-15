import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import { SidebarNav } from './components';

const Sidebar = ({ open, variant, onClose }) => {
  const theme = useTheme();
  return (
    <Drawer
      anchor="left"
      onClose={() => onClose()}
      open={open}
      variant={variant}
      sx={{
        '& .MuiPaper-root': {
          width: '100%',
          maxWidth: 256,
          top: { xs: 0, md: 71 },
          height: { xs: '100%', md: 'calc(100% - 71px)' },
          background: theme.palette.alternate.main,
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
