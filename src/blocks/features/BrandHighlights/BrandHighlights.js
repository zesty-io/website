/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Icon from '@mui/material/Icon';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { alpha } from '@mui/material/styles';
import { colors } from '@mui/material';

const brandHighlights = [
  {
    color: colors.yellow[500],
    title: 'Vertical Logo',
    subtitle: 'Choose thousands of photography online course.',
    assetUrl: 'https://brand.zesty.io/zesty-io-logo-vertical.svg'
  },
  {
    color: colors.yellow[500],
    title: 'Brand Mark',
    subtitle: 'Choose thousands of photography online course.',
    assetUrl: 'https://brand.zesty.io/zesty-io-logo.svg'
  },
  {
    color: colors.yellow[500],
    title: 'Horizontal Logo',
    subtitle: 'Choose thousands of photography online course.',
    assetUrl: 'https://brand.zesty.io/zesty-io-logo-horizontal.svg'
  },
 
  
 
  {
    color: colors.yellow[500],
    title: 'Name',
    subtitle: 'Choose thousands of photography online course.',
    assetUrl: 'https://brand.zesty.io/zesty-io.svg'
  },
];

const BrandHighlights = () => {
  const theme = useTheme();

  const LeftSide = () => (
    <Grid container spacing={4}>
      {brandHighlights.map((item, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 100}
          data-aos-offset={100}
          data-aos-duration={600}
        >
          <Box
            display={'block'}
            width={1}
            sx={{
              transform: index % 2 === 1 ? { md: 'translateY(80px)' } : 'none',
            }}
          >
            <Box component={Card} padding={4} borderRadius={2} width={1}>
              <Box display={'flex'} flexDirection={'column'}>
                <Box
                  marginBottom={2}
                  borderRadius={2}
                >
                  <img
                    src={item.assetUrl}
                    alt="Zesty.io Brand Mark"
                    width="100%"
                  />
                 
                </Box>
                <Typography
                  variant={'h6'}
                  gutterBottom
                  sx={{ fontWeight: 700 }}
                >
                  {item.title}
                </Typography>
                <Typography color="text.secondary">{item.subtitle}</Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Box marginTop={2} display={'flex'} justifyContent={'flex-end'}>
                  <Button
                    endIcon={<Icon>download</Icon>}
                  >
                    Download
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );

  const RightSide = () => (
    <Box>
      <Box marginBottom={2}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'primary'}
        >
          SEAMLESS INTEGRATION
        </Typography>
      </Box>
      <Box marginBottom={2}>
        <Typography variant={'h4'} sx={{ fontWeight: 700 }} gutterBottom>
          The powerful and flexible theme for all kinds of businesses
        </Typography>
        <Typography color="text.secondary" variant={'h6'}>
          Send one-off and automated email, push, and in-app messages to people.
          <br />
          Create better stories.
        </Typography>
      </Box>
      <Grid container spacing={1}>
        {[
          'Lifetime updates & introduction and working',
          'Tech support & mutual funds',
          'Tons of assets & lifetime updates',
          'Integration ready & tech support',
        ].map((item, i) => (
          <Grid item xs={12} key={i}>
            <Box component={ListItem} disableGutters width={'auto'} padding={0}>
              <Box
                component={ListItemAvatar}
                minWidth={'auto !important'}
                marginRight={2}
              >
                <Box
                  component={Avatar}
                  bgcolor={theme.palette.secondary.main}
                  width={20}
                  height={20}
                >
                  <svg
                    width={12}
                    height={12}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Box>
              </Box>
              <ListItemText primary={item} />
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box marginTop={4}>
        <Button
          variant={'contained'}
          size={'large'}
          endIcon={
            <Box
              component={'svg'}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width={24}
              height={24}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </Box>
          }
        >
          Get started
        </Button>
      </Box>
    </Box>
  );

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <LeftSide />
      </Grid>
      <Grid item container alignItems={'center'} xs={12} md={6}>
        <RightSide />
      </Grid>
    </Grid>
  );
};

export default BrandHighlights;
