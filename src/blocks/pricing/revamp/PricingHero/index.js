import { Typography, useTheme } from '@mui/material';

import Container from 'blocks/container/Container';

const PricingHero = ({ title, subtitle, tiers = [] }) => {
  const theme = useTheme();

  return (
    <Container
      sx={{
        py: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography
        variant="h6"
        component="h2"
        sx={{
          color: theme.palette.zesty.zestyZambezi,
          textAlign: 'center',
          fontSize: '18px',
        }}
      >
        {subtitle}
      </Typography>
      <Typography
        sx={{
          maxWidth: { lg: '900px', md: '700px', sm: '500px', xs: '300px' },
          fontSize: { lg: '66px', md: '56px', sm: '46px', xs: '36px' },
          fontWeight: 'bold',
          color: theme.palette.zesty.zestyDarkText,
          textAlign: 'center',
          lineHeight: '1.2',
        }}
      >
        {title}
      </Typography>
    </Container>
  );
};

export default PricingHero;
