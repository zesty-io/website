/**
 * MUI Imports
 */

import { Box, Typography, Grid } from '@mui/material';
import MuiMarkdown from 'mui-markdown';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

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
}) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sx'));
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  const isLarge = useMediaQuery(theme.breakpoints.down('lg'));
  const isExtraLarge = useMediaQuery(theme.breakpoints.down('xl'));
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Box
      component="section"
      sx={{
        mt: 5,
        background: theme.palette.zesty.zestyDarkBlueRadialGradient,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        height: '100%',
        height: isSmall ? 500 : isMedium ? 850 : isExtraLarge ? 550 : 399,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid sm={12} md={7}>
            <Box
              sx={{
                width: isExtraLarge ? '100%' : 950,
                mt: isExtraLarge ? 0 : -12.5,
              }}
            >
              <ZestyImage
                width={951}
                height={519}
                style={{ width: '100%', maxWidth: 951, height: 'auto' }}
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
            <Box sx={{ width: '100%', maxWidth: 501 }}>
              <MuiMarkdown
                overrides={{
                  span: {
                    component: Typography,
                    props: {
                      variant: 'h3',
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
                  fullWidth={isMedium}
                  href={secondary_cta_link || FillerContent.href}
                  text={secondary_cta_text || FillerContent.cta}
                  sx={{
                    color: theme.palette.common.white,
                    fontWeight: 'bold',
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
