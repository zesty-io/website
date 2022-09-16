import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import FeatureItem from '../FeatureItem/FeatureItem';
import Container from 'blocks/container/Container';
import TryFreeButton from 'components/cta/TryFreeButton';
import FillerContent from 'components/globals/FillerContent';

const pricingHero = ({ title, subtitle, tiers = [] }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  // const [pricingOption, setPricingOption] = useState('annual');

  // const handleClick = (event, newPricingOption) => {
  //   setPricingOption(newPricingOption);
  // };

  console.log(tiers);
  const getPlanData = (plan) => {
    return tiers.filter((item) => item.name === plan)[0];
  };

  const freeCommunityPlanData = getPlanData('Free Community Plan');

  return (
    <Container sx={{ py: 10 }}>
      <Box>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 'bold',
            color: theme.palette.zesty.zestyDarkText,
            textAlign: 'center',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
          component="h2"
          sx={{
            color: theme.palette.zesty.zestyZambezi,
            textAlign: 'center',
          }}
        >
          {subtitle}
        </Typography>

        <Box sx={{ mt: 10 }}>
          <FreeCommunityPlan data={freeCommunityPlanData} />
        </Box>
      </Box>
    </Container>
  );
};

export default pricingHero;

const FreeCommunityPlan = ({ data }) => {
  console.log('communitty data', data);
  const theme = useTheme();
  return (
    <Box>
      <Card variant="outlined">
        <Grid sx={{ minHeight: 398 }} container>
          <Grid
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              px: 4,
            }}
            item
            xs={12}
            md={6}
          >
            <Typography
              sx={{
                textAlign: 'center',
                fontWeight: 'bold',
                color: theme.palette.zesty.zestyDarkText,
              }}
              variant="h4"
              component="h3"
            >
              {data.name}
            </Typography>
            <Typography sx={{ textAlign: 'center' }}>
              {data.description}
            </Typography>

            <Box sx={{ width: '100%', maxWidth: 400 }}>
              <Box
                sx={{
                  background: theme.palette.zesty.zestyLightOrange,

                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 2,
                  py: 1,
                  borderRadius: 2,
                  mt: 2,
                }}
              >
                <Typography
                  sx={{
                    color: theme.palette.zesty.zestyDarkText,
                    fontWeight: 'bold',
                  }}
                  variant="h3"
                  component="h4"
                >
                  ${data.annual_cost}
                </Typography>
                <Box>
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.zesty.zestyDarkText,
                      fontWeight: 'bold',
                    }}
                  >
                    {data.price}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: theme.palette.zesty.zestyZambezi }}
                  >
                    {data.users}
                  </Typography>
                </Box>
              </Box>

              <Button
                fullWidth
                variant="contained"
                color="secondary"
                sx={{ mt: 2 }}
              >
                Try Zesty Free
              </Button>
            </Box>
          </Grid>
          <Grid
            sx={{ background: theme.palette.alternate.main }}
            item
            xs={12}
            md={6}
          >
            Test
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};
