/**
 * MUI Imports
 */
import { Box, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MuiMarkdown from 'mui-markdown';
import useMediaQuery from '@mui/material/useMediaQuery';

/**
 * Helpers Imports
 */
import FillerContent from 'components/globals/FillerContent';

/**
 * Components Imports
 */
import Filters from 'components/marketplace/landing/Filters';

const Hero = ({
  title,
  description,
  features_logos,
  hero_image,
  hero_image_mobile,
  marketEntityTypes,
  marketTags,
  marketEntities,
}) => {
  const theme = useTheme();

  const isMedium = useMediaQuery(theme.breakpoints.down('lg'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isExtraSmall = useMediaQuery(theme.breakpoints.between('xs', 500));

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
          src={hero_image?.data[0].url || FillerContent.logos[0].url}
        />

        <Box>
          <Box
            sx={{
              width: '100%',
              display: isTablet ? 'block' : 'none',
            }}
            component="img"
            src={hero_image_mobile?.data[0].url || FillerContent.logos[0].url}
          />
        </Box>

        <Box
          sx={{
            top: isExtraSmall ? '8%' : isTablet ? '8%' : '10%',
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

                  <MuiMarkdown
                    overrides={{
                      p: {
                        component: Typography,
                        props: {
                          variant: 'h6',
                          component: 'p',
                          sx: {
                            color: theme.palette.common.white,
                          },
                        },
                      },
                    }}
                  >
                    {description || FillerContent.description}
                  </MuiMarkdown>

                  <Box
                    sx={{
                      display: 'flex',

                      gap: 1,
                    }}
                  >
                    {features_logos?.data.map((item, idx) => (
                      <Box
                        component="a"
                        href={item.meta.web.uri}
                        key={idx}
                        sx={{
                          borderRadius: 1,
                          display: 'flex',
                          gap: 1,
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: isExtraSmall
                            ? 50
                            : isMobile
                            ? 70
                            : isTablet
                            ? 90
                            : isMedium
                            ? 65
                            : 90,
                          height: isExtraSmall
                            ? 50
                            : isMobile
                            ? 70
                            : isTablet
                            ? 90
                            : isMedium
                            ? 65
                            : 90,
                          background: theme.palette.common.white,
                        }}
                      >
                        <Box sx={{ p: 2 }}>
                          <Box
                            sx={{ width: '100%', height: '100%' }}
                            component="img"
                            src={
                              item.image?.data[0].url ||
                              FillerContent.logos[0].url
                            }
                          />
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Grid>
              <Grid item sm={12} md={5} lg={6}></Grid>
            </Grid>
          </Box>
        </Box>

        {/* Filters Component Entry */}
        <Filters
          marketEntities={marketEntities}
          marketTags={marketTags}
          marketEntityTypes={marketEntityTypes}
        />
      </Box>
    </>
  );
};

export default Hero;
