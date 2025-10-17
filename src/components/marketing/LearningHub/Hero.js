/**
 * MUI Imports
 */
import { Box, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

/**
 * Helpers Imports
 */
import FillerContent from 'components/globals/FillerContent';
/**
 * Components Imports
 */
import Filters from 'components/marketing/LearningHub/Filters';

const Hero = ({
  title,
  description,
  heroImage,
  monbileHeroImage,
  featuredCards = [],
  tags,
}) => {
  const theme = useTheme();

  const isMedium = useMediaQuery(theme.breakpoints.down('lg'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isExtraSmall = useMediaQuery(theme.breakpoints.between('xs', 500));

  const filterProps = {
    featuredCards,
    tags,
  };

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          minHeight: 560,
          pb: 5,
          display: 'flex',
          flexDirection: 'column',
          background: theme.palette.background.level3,
        }}
        component="header"
      >
        <Box
          sx={{
            flexShrink: 0,
            minHeight: isMedium ? 460 : 560,
            display: isTablet ? 'none' : 'block',
          }}
          component="img"
          src={heroImage?.data[0]?.url || FillerContent.logos[0].url}
        />

        <Box>
          <Box
            sx={{
              width: '100%',
              display: isTablet ? 'block' : 'none',
            }}
            component="img"
            src={monbileHeroImage?.data[0].url || FillerContent.logos[0].url}
          />
        </Box>

        <Box
          sx={{
            top: isExtraSmall ? '4%' : isTablet ? '8%' : '10%',
            position: 'absolute',
            width: '100%',
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: 1600,
              margin: 'auto',
              px: isTablet ? 2 : 4,
            }}
          >
            <Grid container>
              <Grid item sm={12} md={7} lg={6}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: isMobile ? 1 : isTablet ? 2 : isMedium ? 1 : 3,
                  }}
                >
                  <Typography
                    component="h1"
                    variant="h3"
                    sx={{
                      fontWeight: 'bold',
                      color: theme.palette.common.white,
                    }}
                  >
                    {title || FillerContent.header}
                  </Typography>

                  <Typography
                    component="p"
                    variant="h6"
                    sx={{
                      color: theme.palette.common.white,
                    }}
                  >
                    {description || FillerContent.description}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Filters {...filterProps} />
      </Box>
    </>
  );
};

export default Hero;
