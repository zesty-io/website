import React, { useState } from 'react';
import { useRouter } from 'next/router';

import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import Container from 'components/Container';
import TopNav from 'components/TopNav';

import { Topbar, Sidebar, Footer } from './components';
import { zestyLink } from 'lib/zestyLink';

const Main = ({
  children,
  customRouting,
  nav = [],
  colorInvert = false,
  bgcolor = 'transparent',
  model = '',
}) => {
  const router = useRouter();

  const hasRouting = customRouting !== undefined ? true : false;
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

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 38,
  });

  // check if from ppc short form page then change color of logo and nav
  const isPpcShortPage =
    router.asPath === zestyLink(nav, '7-f8d2b2fb82-vgg2t4');

  // override over invert based on pages that we know have a dark image heading

  let pageNavColorRegex = new RegExp(/\bmindshare\b|article/gi);
  const headerColorInvert =
    model?.match(pageNavColorRegex) !== null ? true : false;

  return (
    <Box>
      <Box bgcolor={bgcolor} position={'relative'} zIndex={theme.zIndex.appBar}>
        <Container
          paddingTop={isPpcShortPage ? '0px !important' : '8px !important'}
          paddingBottom={'0 !important'}
        >
          <TopNav nav={nav} colorInvert={headerColorInvert} />
        </Container>
      </Box>
      <AppBar
        position={isPpcShortPage ? 'fixed' : 'sticky'}
        sx={{
          outline: 'none',
          border: 'none',
          boxShadow: isPpcShortPage ? 'none' : '',
          top: 0,
          backgroundColor: isPpcShortPage
            ? 'transparent'
            : trigger
            ? theme.palette.background.paper
            : bgcolor,
        }}
        elevation={trigger ? 1 : 0}
      >
        <Container paddingY={1}>
          <Topbar
            onSidebarOpen={handleSidebarOpen}
            customRouting={hasRouting ? customRouting : []}
            colorInvert={(headerColorInvert && !trigger) || isPpcShortPage}
          />
        </Container>
      </AppBar>
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
        customRouting={hasRouting ? customRouting : []}
      />
      <main>
        {children}
        <Divider />
      </main>
      <Footer
        colorInvert={colorInvert}
        customRouting={hasRouting ? customRouting : []}
      />
    </Box>
  );
};

Main.propTypes = {
  children: PropTypes.node,
  routing: PropTypes.array,
  colorInvert: PropTypes.bool,
  bgcolor: PropTypes.string,
};

export default Main;
