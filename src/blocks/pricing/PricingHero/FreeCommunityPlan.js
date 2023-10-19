// Mui Imports
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

// Components Import
import FeatureItem from './FeatureItem';

const FreeCommunityPlan = ({ data }) => {
  const features = [
    {
      feature: data?.content_records,
    },
    {
      feature: data?.users,
    },
    {
      feature: data?.features,
    },
    {
      feature: data?.domain,
    },
    {
      feature: data?.data_plan,
    },
    {
      feature: data?.feature1,
    },
  ];

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
              py: 2,
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
                  px: 2,
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
                target="_blank"
                component="a"
                href={data?.button_cta.data[0]?.external_link}
                fullWidth
                variant="contained"
                color="secondary"
                sx={{ mt: 2 }}
              >
                {data?.button_cta.data[0]?.button_text}
              </Button>
            </Box>
          </Grid>
          <Grid
            sx={{
              background: theme.palette.alternate.main,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              p: 4,
            }}
            item
            xs={12}
            md={6}
          >
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {features.slice(0, 3).map((item, idx) => (
                  <FeatureItem key={idx} item={item?.feature} />
                ))}
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {features.slice(3, 6).map((item, idx) => (
                  <FeatureItem key={idx} item={item?.feature} />
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default FreeCommunityPlan;
