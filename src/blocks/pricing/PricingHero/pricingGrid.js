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

  const pricingGridData = data.filter((item) => item != undefined);

  


  return (
    <>
      <Box>
        <Grid container spacing={2}>
          {pricingGridData.map((item, idx) => {
            const isCustom = item?.name.toLowerCase() === 'enterprise'
            return (
              <Grid
              key={idx}
              item
              xs={12}
              md={pricingGridData.length === 3 ? 4 : 6}
              lg={pricingGridData.length === 3 ? 4 : 3}
            >
              <Card
                sx={{
                  background: isCustom ? theme.palette.zesty.zestyPurple : '',
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
                      color: isCustom ? theme.palette.common.white :  theme.palette.zesty.zestyDarkText,
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}
                  >
                    {item?.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      minHeight: isMedium ? 0 : isLarge ? 75 : 0,
                      color:  isCustom ? theme.palette.common.white : theme.palette.zesty.zestyZambezi,
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
                      color: isCustom ? theme.palette.common.white : theme.palette.zesty.zestyDarkText,
                      textAlign: 'center',
                    }}
                  >
                    {item?.annual_cost}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color:  isCustom ? theme.palette.common.white : theme.palette.zesty.zestyZambezi,
                      textAlign: 'center',
                    }}
                  >
                    {item?.content_records}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color:  isCustom ? theme.palette.common.white : theme.palette.zesty.zestyZambezi,
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
                      idx === 2
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
                  <FeatureItem white={isCustom} item={item?.features} />
                  <FeatureItem white={isCustom} item={item?.domain} />
                  <FeatureItem white={isCustom} item={item?.data_plan} />
                  <Box sx={{ my: 1 }}>
                    <Typography
                      variant="body1"
                      sx={{
                        color:  isCustom ? theme.palette.common.white : theme.palette.zesty.zestyZambezi,
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

                  {item?.features_included?.data.map((item, index) => (
                    <FeatureItem white={isCustom} key={index} item={item.title} />
                  ))}
                </Box>
              </Card>
            </Grid>
            )
          })}
        </Grid>
      </Box>
    </>
  );
};

export default pricingGrid;
