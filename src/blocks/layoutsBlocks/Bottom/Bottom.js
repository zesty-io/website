/**
 * MUI Imports
 */

import { Box, Typography, Grid } from '@mui/material';
import MuiMarkdown from 'markdown-to-jsx';

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
import DemoCta from 'components/cta/DemoCta';
import ZestyImage from 'blocks/Image/ZestyImage';

const Bottom = ({
  image,
  title_and_descritpion,
  primary_cta_text = 'Try Free',
  primary_cta_link = '/join/',
  secondary_cta_text,
  secondary_cta_link,
  backgroundColor,
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
        background: backgroundColor
          ? backgroundColor
          : theme.palette.zesty.zestyDarkBlueRadialGradient,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid item sm={12} md={7}>
            <Box
              sx={{
                position: 'relative',
                minHeight: isMedium ? 400 : 519,
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
                  bottom: isLarge ? 0 : -37,
                }}
                loading="lazy"
                src={`${image?.data[0].url || FillerContent.image}?width=951`}
                alt="zesty.io"
              />
            </Box>
          </Grid>
          <Grid
            item
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
            sm={12}
            md={5}
          >
            <Box sx={{ width: '100%', maxWidth: 501, pb: isMedium ? 10 : 0 }}>
              <MuiMarkdown
                options={{
                  overrides: {
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
                        variant: 'h4',
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
                  },
                }}
              >
                {title_and_descritpion || FillerContent.headerAndDescription}
              </MuiMarkdown>

              <Box
                sx={{
                  mt: 4,
                  display: 'flex',
                  flexDirection: isMedium ? 'column' : 'row',
                  gap: 2,
                }}
              >
              <DemoCta
                  icon={false}
                  target="_self"
                  variant="contained"
                  color="secondary"
                  text={primary_cta_text}
                  href={primary_cta_link}
              />
                {secondary_cta_text && 
                <DemoCta
                  fullWidth={isMedium}
                  href={secondary_cta_link || FillerContent.href}
                  text={secondary_cta_text || FillerContent.cta}
                  sx={{
                    color: theme.palette.common.white,
                    fontWeight: 'bold',
                  }}
                />}
                
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Bottom;