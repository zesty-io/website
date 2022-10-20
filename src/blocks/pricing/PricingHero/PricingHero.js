// Mui Imports
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// Components Import
import FreeCommunityPlan from 'blocks/pricing/PricingHero/FreeCommunityPlan';
import PricingGrid from 'blocks/pricing/PricingHero/pricingGrid';
import Enterprise from './Enterprise';
import Container from 'blocks/container/Container';

const pricingHero = ({ title, subtitle, tiers = [] }) => {
  const theme = useTheme();

  const getPlanData = (plan) => {
    return tiers.filter((item) => item.name === plan)[0];
  };

  const freeCommunityPlanData = getPlanData('Free Community Plan');
  const pricingGridData = [
    getPlanData('Community Plus'),
    getPlanData('Start Up'),
    getPlanData('Business'),
    getPlanData('Business Plus'),
  ];

  const enterprise = getPlanData('Enterprise');

  return (
    <Container maxWidth={1400} sx={{ py: 10 }}>
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

        <Box sx={{ mt: 2 }}>
          <PricingGrid data={pricingGridData} />
        </Box>

        <Box sx={{ mt: 2 }}>
          <Enterprise data={enterprise} />
        </Box>
      </Box>
    </Container>
  );
};

export default pricingHero;
