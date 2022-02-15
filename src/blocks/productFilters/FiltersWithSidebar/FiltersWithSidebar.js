import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

import Container from 'components/Container';
import { Topbar, Sidebar } from './components';

const WithCollapsibleMenuItems = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  return (
    <Container>
      <Box marginBottom={4}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="#">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="#">
            T-shirts
          </Link>
          <Typography color="text.primary">Classy sweatshirt</Typography>
        </Breadcrumbs>
        <Typography variant={'h4'} fontWeight={700} marginTop={2}>
          Classy sweatshirt
        </Typography>
      </Box>
      <Box display={'flex'}>
        <Sidebar
          onClose={handleSidebarClose}
          open={open}
          variant={isMd ? 'permanent' : 'temporary'}
        />
        <Box marginLeft={{ xs: 0, md: 4 }} width={1}>
          <Topbar onSidebarOpen={handleSidebarOpen} />
          <Box
            borderRadius={2}
            border={`4px dashed ${theme.palette.divider}`}
            height={600}
            marginTop={4}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default WithCollapsibleMenuItems;
