/**
 * MUI Imports
 */
import { Box, Typography, Grid } from '@mui/material';
import MuiMarkdown from 'mui-markdown';

/**
 * Helpers Imports
 */
import FillerContent from 'components/globals/FillerContent';

/**
 * Components Imports
 */
import Container from 'blocks/container/Container';
import TryFreeButton from 'components/cta/TryFreeButton';
import DemoCta from 'components/cta/DemoCta';
import ZestyImage from 'blocks/Image/ZestyImage';

const Bottom = ({
  graphic,
  titleAndDescription,
  cta_text,
  secondary_cta_text,
  secondary_cta_link,
  theme,
  isSmall,
  isMedium,
  isLarge,
  isDarkMode,
}) => {
  return (
    <Box
      component="section"
      sx={{
        background:
          'linear-gradient(269.83deg, #06BBCF 0.13%, #C6E9ED 104.87%)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mt: isSmall ? 10 : 30,
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid sm={12} md={7}>
            <Box
              sx={{
                position: 'relative',
                minHeight: isSmall ? 300 : 415,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ZestyImage
                width={951}
                height={519}
                style={{
                  width: '100%',
                  height: 'auto',
                  position: isLarge ? 'inherit' : 'absolute',
                  bottom: 0,
                }}
                loading="lazy"
                src={`${graphic || ''}?width=951`}
                alt="zesty.io"
              />
            </Box>
          </Grid>
          <Grid
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
            sm={12}
            md={5}
          >
            <Box sx={{ width: '100%', maxWidth: 796, pb: isMedium ? 10 : 0 }}>
              <MuiMarkdown
                overrides={{
                  span: {
                    component: Typography,
                    props: {
                      variant: 'h4',
                      component: 'span',
                      sx: {
                        color: theme.palette.common.white,
                        fontWeight: 'inherit',
                        textAlign: 'inherit',
                      },
                    },
                  },
                  h2: {
                    component: Typography,
                    props: {
                      variant: 'h3',
                      component: 'h2',
                      sx: {
                        textAlign: isMedium ? 'center' : 'left',
                        color: theme.palette.common.white,
                        fontWeight: 'bold',
                      },
                    },
                  },
                  p: {
                    component: Typography,
                    props: {
                      variant: 'h6',
                      component: 'p',
                      sx: {
                        textAlign: isMedium ? 'center' : 'left',
                        mt: 1,
                        color: theme.palette.common.white,
                      },
                    },
                  },
                }}
              >
                {titleAndDescription || FillerContent.rich_text}
              </MuiMarkdown>

              <Box
                sx={{
                  mt: 4,
                  display: 'flex',
                  flexDirection: isMedium ? 'column' : 'row',
                  gap: 2,
                }}
              >
                <TryFreeButton
                  text={cta_text || FillerContent.cta}
                  variant="contained"
                  color="secondary"
                  fullWidth={isMedium}
                  sx={{
                    fontWeight: 'bold',
                    borderRadius: 1,
                  }}
                />
                <DemoCta
                  icon={false}
                  fullWidth={isMedium}
                  href={secondary_cta_link || FillerContent.href}
                  text={secondary_cta_text || FillerContent.cta}
                  sx={{
                    // width: '100%',
                    //         maxWidth: isMedium ? '100%' : 174,
                    fontWeight: 'bold',
                    color: theme.palette.zesty.zestyOrange,
                    background: theme.palette.common.white,
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Bottom;
