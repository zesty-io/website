import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Main from '../../layouts/Main';
import Container from 'components/Container';

import { Newsletter, Partners } from './components';

const EmptyCart = () => {
  return (
    <Main>
      <Container maxWidth={600}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              position: 'relative',
            }}
          >
            <Box
              component={'svg'}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width={150}
              height={150}
              color={'alternate.dark'}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </Box>
          </Box>
          <Typography variant={'h6'} fontWeight={700} align={'center'}>
            Your cart is currently empty
          </Typography>
          <Typography
            fontWeight={400}
            color={'text.secondary'}
            align={'center'}
          >
            Before proceed to checkout you must add some products to your
            shopping cart. You will find a lot of interesting products on our
            page.
          </Typography>
          <Button
            component={Link}
            href={'/demos/ecommerce/listing'}
            variant={'contained'}
            size={'large'}
            sx={{ marginTop: 4 }}
          >
            Start shopping
          </Button>
        </Box>
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Newsletter />
        </Container>
      </Box>
      <Container>
        <Partners />
      </Container>
    </Main>
  );
};

export default EmptyCart;
