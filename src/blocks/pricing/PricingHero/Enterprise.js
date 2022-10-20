// Mui Imports
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';

// Components Import
import FeatureItem from './FeatureItem';
import FillerContent from 'components/globals/FillerContent';

const Enterprise = ({ data }) => {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  const isLarge = useMediaQuery(theme.breakpoints.down('lg'));
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
      feature: data?.support,
    },
    {
      feature: data?.feature2,
    },
    {
      feature: data?.feature3,
    },
    {
      feature: data?.feature4,
    },
    {
      feature: data?.feature5,
    },
    {
      feature: data?.feature1,
    },
  ];

  return (
    <Box>
      <Card
        variant="outlined"
        sx={{ background: theme.palette.zesty.zestyPurple }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            px: 4,
            py: 5,
          }}
          item
          xs={12}
          md={6}
        >
          <Typography
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              color: theme.palette.common.white,
            }}
            variant="h4"
            component="h3"
          >
            {data.name}
          </Typography>
          <Typography
            sx={{ textAlign: 'center', color: theme.palette.common.white }}
          >
            {data.description}
          </Typography>

          <Typography
            variant="h4"
            sx={{
              mt: 2,
              fontWeight: 'bold',
              color: theme.palette.common.white,
              textAlign: 'center',
            }}
          >
            {data?.price}
          </Typography>

          <Box sx={{ width: '100%', maxWidth: 400 }}>
            <Button
              target="_blank"
              component="a"
              href={data.button_cta.data[0].external_link || FillerContent.href}
              fullWidth
              variant="contained"
              color="secondary"
              sx={{ mt: 2 }}
            >
              {data?.button_cta.data[0]?.button_text || FillerContent.cta}
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: 4,
          }}
          item
          xs={12}
          md={6}
        >
          <Grid
            sx={{
              width: '100%',
              maxWidth: isLarge ? 600 : 1080,
              ml: isMedium ? 0 : isLarge ? 10 : 0,
            }}
            container
          >
            <Grid item xs={12} sm={6} lg={3}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                }}
              >
                {features.slice(0, 3).map((item, idx) => (
                  <FeatureItem key={idx} item={item?.feature} white />
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {features.slice(3, 6).map((item, idx) => (
                  <FeatureItem key={idx} item={item?.feature} white />
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {features.slice(6, 9).map((item, idx) => (
                  <FeatureItem key={idx} item={item?.feature} white />
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {features.slice(9, 12).map((item, idx) => (
                  <FeatureItem key={idx} item={item?.feature} white />
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Box>
  );
};

export default Enterprise;
