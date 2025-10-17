import { useState } from 'react';

import {
  ToggleButtonGroup,
  ToggleButton,
  Container,
  Grid,
  Button,
  useTheme,
} from '@mui/material';

import { PricingTierCard } from './PricingTierCard';

export const PricingTierCards = ({ pricingTiers }) => {
  const theme = useTheme();

  const [billingCycle, setBillingCycle] = useState('yearly');

  const handleBillingChange = (event, newBillingCycle) => {
    setBillingCycle(newBillingCycle);
  };

  const scrollToPricingTable = () => {
    const element = document.getElementById('pricing-table');
    if (element) {
      const rect = element.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      window.scrollTo({
        top: rect.top + scrollTop - 50,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Container
      maxWidth={'xl'}
      sx={{
        py: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ToggleButtonGroup
        value={billingCycle}
        exclusive
        onChange={handleBillingChange}
        aria-label="billing cycle"
      >
        <ToggleButton
          disabled={billingCycle === 'yearly'}
          value="yearly"
          aria-label="yearly"
          sx={{
            '&.Mui-selected': {
              backgroundColor: theme.palette.zesty.zestyOrange,
              color: 'white',
              '&:hover': {
                backgroundColor: theme.palette.zesty.zestyOrange,
              },
            },
          }}
        >
          Yearly
        </ToggleButton>
        <ToggleButton
          disabled={billingCycle === 'monthly'}
          value="monthly"
          aria-label="monthly"
          sx={{
            '&.Mui-selected': {
              backgroundColor: theme.palette.zesty.zestyOrange,
              color: 'white',
              '&:hover': {
                backgroundColor: theme.palette.zesty.zestyOrange,
              },
            },
          }}
        >
          Monthly
        </ToggleButton>
      </ToggleButtonGroup>
      <Grid container maxWidth={'1260px'} sx={{ py: { md: 10, sm: 5, xs: 5 } }}>
        {pricingTiers.map((tier, index) => (
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            key={tier.title}
            sx={{
              transform: {
                xs: 'scale(1)',
                sm: 'scale(1)',
                md: tier.title === 'Growth' ? 'scale(1.05)' : 'scale(1)',
              },
              zIndex: {
                xs: 0,
                sm: 0,
                md: tier.title === 'Growth' ? 1 : 0,
              },
              pb: { xs: 5, sm: 5, md: 0 },
            }}
          >
            <PricingTierCard tier={tier} />
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        color="secondary"
        onClick={scrollToPricingTable}
      >
        Compare plans
      </Button>
    </Container>
  );
};
