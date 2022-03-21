import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CreditCardsIllustration from 'svg/illustrations/CreditCards';

import Container from 'components/Container';

const CtaWithIllustrationNoCta = ({title, description, image}) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Container py={1}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} alignSelf={'center'}>
          <Box >
            <Box marginBottom={2}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                }}
              >
                {title}
              </Typography>
            </Box>
            <Box marginBottom={3}>
              <Typography variant="h5" component="p" color="text.secondary">
                {description}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} alignSelf={'flex-start'}>
          <Box height={1} width={1} display={'flex'} justifyContent={'center'}>
            <Box height={1} width={1} maxWidth={450}>
              {/* <CreditCardsIllustration width={'100%'} height={'100%'} /> */}
              <Box
                component={'img'}
                src={image}
                height={{ xs: 'auto', md: 1 }}
                maxHeight={{ xs: 300, md: 1 }}
                width={1}
                maxWidth={1}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CtaWithIllustrationNoCta;
