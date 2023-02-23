import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';

import Container from 'components/Container';
import TopNav from 'components/TopNav';

import { Topbar, MobileMenu, Footer } from './components';

import pages from '../navigation';

const Main = ({ children }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const handleMobileMenuClick = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  const open = isMd ? false : openMobileMenu;

  return (
    <Box>
      <Box position={'relative'} zIndex={theme.zIndex.appBar}>
        <Container paddingTop={'8px !important'} paddingBottom={'0 !important'}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Link
              href={'/'}
              color={'text.primary'}
              underline={'none'}
              sx={{
                display: { xs: 'none', sm: 'inline-flex' },
                alignItems: 'center',
              }}
            >
              <Box
                component={'svg'}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                width={18}
                height={18}
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </Box>
              Main Demo
            </Link>
            <Box flexGrow={1} />
            <TopNav />
          </Box>
        </Container>
      </Box>
      <AppBar
        position={'static'}
        sx={{
          top: 0,
          backgroundColor: theme.palette.background.paper,
        }}
        elevation={0}
      >
        <Container paddingY={1}>
          <Topbar handleMobileMenuClick={handleMobileMenuClick} pages={pages} />
        </Container>
      </AppBar>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Container paddingY={0}>
          <MobileMenu pages={pages} />
        </Container>
      </Collapse>
      <main>
        {children}
        <Divider />
      </main>
      <Container paddingY={4}>
        <Footer />
      </Container>
    </Box>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
