import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';

import Container from 'components/Container';

const mock = [
  {
    title: 'Basic',
    price: '22',
    features: [
      {
        title: '1 User',
        isIncluded: true,
      },
      {
        title: '1 App',
        isIncluded: true,
      },
      {
        title: 'Integrations',
        isIncluded: true,
      },
      {
        title: 'Google Ads',
        isIncluded: false,
      },
      {
        title: 'SSO via Google',
        isIncluded: false,
      },
      {
        title: 'API access',
        isIncluded: false,
      },
      {
        title: 'Facebook Ads',
        isIncluded: false,
      },
    ],
    isHighlighted: false,
    btnText: 'Get basic',
  },
  {
    title: 'Professional',
    price: '44',
    features: [
      {
        title: '1 User',
        isIncluded: true,
      },
      {
        title: '1 App',
        isIncluded: true,
      },
      {
        title: 'Integrations',
        isIncluded: true,
      },
      {
        title: 'Google Ads',
        isIncluded: true,
      },
      {
        title: 'SSO via Google',
        isIncluded: true,
      },
      {
        title: 'API access',
        isIncluded: false,
      },
      {
        title: 'Facebook Ads',
        isIncluded: false,
      },
    ],
    isHighlighted: true,
    btnText: 'Get pro',
  },
  {
    title: 'Commercial',
    price: '77',
    features: [
      {
        title: '1 User',
        isIncluded: true,
      },
      {
        title: '1 App',
        isIncluded: true,
      },
      {
        title: 'Integrations',
        isIncluded: true,
      },
      {
        title: 'Google Ads',
        isIncluded: true,
      },
      {
        title: 'SSO via Google',
        isIncluded: true,
      },
      {
        title: 'API access',
        isIncluded: true,
      },
      {
        title: 'Facebook Ads',
        isIncluded: true,
      },
    ],
    isHighlighted: false,
    btnText: 'Contact us',
  },
];

const WithSimpleBorderedCards = () => {
  const theme = useTheme();

  return (
    <Container>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box
              component={Card}
              height={1}
              display={'flex'}
              flexDirection={'column'}
              boxShadow={0}
              border={`1px solid ${theme.palette.divider}`}
            >
              <CardContent
                sx={{
                  padding: { sm: 4 },
                }}
              >
                <Box
                  marginBottom={4}
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                >
                  <Typography variant={'h6'} gutterBottom>
                    <Box component={'span'} fontWeight={600}>
                      {item.title}
                    </Box>
                  </Typography>
                  <Box display={'flex'} alignItems={'flex-start'}>
                    <Typography variant={'h4'} color={'primary'}>
                      <Box
                        component={'span'}
                        fontWeight={600}
                        marginRight={1 / 2}
                      >
                        $
                      </Box>
                    </Typography>
                    <Typography variant={'h2'} color={'primary'} gutterBottom>
                      <Box component={'span'} fontWeight={600}>
                        {item.price}
                      </Box>
                    </Typography>
                  </Box>
                  <Typography variant={'subtitle2'} color={'text.secondary'}>
                    Per user, per month
                  </Typography>
                </Box>
                <Grid container spacing={1}>
                  {item.features.map((feature, j) => (
                    <Grid item xs={12} key={j}>
                      <Typography
                        component={'p'}
                        align={'center'}
                        style={{
                          textDecoration: !feature.isIncluded
                            ? 'line-through'
                            : 'none',
                        }}
                      >
                        {feature.title}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
              <Box flexGrow={1} />
              <CardActions sx={{ justifyContent: 'flex-end', padding: 4 }}>
                <Button
                  size={'large'}
                  variant={item.isHighlighted ? 'contained' : 'outlined'}
                >
                  {item.btnText}
                </Button>
              </CardActions>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default WithSimpleBorderedCards;
