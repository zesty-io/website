import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';

import Container from 'components/Container';
import { Topbar, Sidebar, Navigation, Footer } from './components';

const ChildMock = () => {
  const theme = useTheme();
  return (
    <Box p={4}>
      <Box
        width={1}
        height={1}
        minHeight={400}
        borderRadius={2}
        border={`2px solid ${theme.palette.divider}`}
        sx={{
          borderStyle: 'dashed',
        }}
      />
    </Box>
  );
};

const NavWithCenteredSearch = () => {
  const theme = useTheme();
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  return (
    <Box>
      <AppBar
        position={'fixed'}
        sx={{
          backgroundColor: theme.palette.background.paper,
        }}
        elevation={0}
      >
        <Container paddingY={{ xs: 1, sm: 1.5 }}>
          <Topbar onSidebarOpen={handleSidebarOpen} />
        </Container>
        <Divider />
        <Box display={{ xs: 'none', md: 'block' }}>
          <Container paddingY={{ xs: 1, sm: 1.5 }}>
            <Navigation />
          </Container>
          <Divider />
        </Box>
      </AppBar>
      <Sidebar
        onClose={handleSidebarClose}
        open={openSidebar}
        variant={'temporary'}
      />
      <main>
        <Box height={{ xs: 58, sm: 66, md: 116 }} />
        <ChildMock />
        <Divider />
        <Container paddingY={4}>
          <Footer />
        </Container>
      </main>
    </Box>
  );
};

export default NavWithCenteredSearch;
