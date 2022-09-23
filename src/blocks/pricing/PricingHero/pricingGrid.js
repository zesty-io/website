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

const pricingGrid = ({ data }) => {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  const isLarge = useMediaQuery(theme.breakpoints.down('lg'));
  console.log(data);

  return (
    <>
      <Box>
        <Grid container spacing={2}>
          {data.map((item, idx) => (
            <Grid key={idx} item xs={12} md={6} lg={3}>
              <Card
                sx={{
                  py: 4,
                  px: 2,
                  minHeight: isMedium ? 500 : isLarge ? 650 : 750,
                  position: 'relative',
                }}
                variant="outlined"
              >
                {item?.popular && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '100%',
                      maxWidth: 150,
                      height: 20,
                      background: theme.palette.zesty.zestyOrange,
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                    }}
                  >
                    <Typography
                      sx={{
                        color: theme.palette.common.white,
                        textAlign: 'center',
                        fontSize: 12,
                        fontWeight: 'bold',
                        mt: 0.2,
                      }}
                    >
                      Most Popular
                    </Typography>
                  </Box>
                )}
                <Box sx={{ mt: 2 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: theme.palette.zesty.zestyDarkText,
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}
                  >
                    {item?.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.zesty.zestyZambezi,
                      textAlign: 'center',
                    }}
                  >
                    {item?.description}
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    variant="h4"
                    sx={{
                      mt: 2,
                      fontWeight: 'bold',
                      color: theme.palette.zesty.zestyDarkText,
                      textAlign: 'center',
                    }}
                  >
                    {item?.annual_cost}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.zesty.zestyZambezi,
                      textAlign: 'center',
                    }}
                  >
                    {item?.content_records}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.zesty.zestyZambezi,
                      textAlign: 'center',
                    }}
                  >
                    {item?.users}
                  </Typography>
                </Box>

                <Button
                  target="_blank"
                  component="a"
                  variant="contained"
                  color="secondary"
                  sx={{
                    mt: 2,
                    background:
                      idx === 3
                        ? theme.palette.zesty.zestyOrange
                        : theme.palette.zesty.zestyDarkText,
                  }}
                  href={
                    item?.button_cta?.data[0].external_link ||
                    FillerContent.href
                  }
                  fullWidth
                >
                  {item?.button_cta?.data[0].button_text || FillerContent.cta}
                </Button>

                <Box
                  sx={{
                    mt: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                  }}
                >
                  <FeatureItem item={item?.features} />
                  <FeatureItem item={item?.domain} />
                  <FeatureItem item={item?.data_plan} />
                  <Box sx={{ my: 1 }}>
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.zesty.zestyZambezi,
                        fontWeight: 'bold',
                      }}
                    >
                      Features Included
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.zesty.zestyZambezi,
                      }}
                    >
                      {item?.includes_header}
                    </Typography>
                  </Box>
                  {/* {console.log(
                    item.features_included.data.map((item) => item.title),
                  )} */}
                  {item.features_included.data.map((item) => (
                    <FeatureItem item={item.title} />
                  ))}
                  {/* <FeatureItem item={item?.support} />
                  <FeatureItem item={item?.feature1} />
                  <FeatureItem item={item?.feature2} />
                  <FeatureItem item={item?.feature3} />
                  <FeatureItem item={item?.feature4} />
                  <FeatureItem item={item?.feature5} /> */}
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default pricingGrid;
