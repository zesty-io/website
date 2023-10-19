import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';

import Main from '../../layouts/Main';
import Container from 'components/Container';

import {
  Headline,
  Products,
  Newsletter,
  Partners,
  Filters,
  Banner,
  PromoPopup,
} from './components';

const Promotions = () => {
  let popupIsClosed = false;
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!popupIsClosed) {
      setTimeout(() => setOpen(true), 3000);
    }
  }, [popupIsClosed]);

  const handleClose = () => {
    popupIsClosed = true;
    setOpen(false);
  };
  return (
    <Main>
      <PromoPopup open={open} onClose={handleClose} />
      <Box bgcolor={'alternate.main'}>
        <Container paddingY={{ xs: 2, sm: 2.5 }}>
          <Headline />
        </Container>
      </Box>
      <Container>
        <Filters>
          <Products />
        </Filters>
      </Container>
      <Banner />
      <Container>
        <Newsletter />
      </Container>
      <Container paddingTop={'0 !important'}>
        <Partners />
      </Container>
    </Main>
  );
};

export default Promotions;
