/**
 * MUI Imports
 */

import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import MuiMarkdown from 'mui-markdown';

/**
 * Components Imports
 */
import Container from 'blocks/container/Container';
import TryFreeButton from 'components/cta/TryFreeButton';
import DemoCta from 'components/cta/DemoCta';

const Bottom = ({
  content,
  FillerContent,
  theme,
  isMedium,
  isLarge,
  isSmall,
  isExtraLarge,
}) => {
  return (
    <Box
      component="section"
      sx={{
        background: `url(${content.bottom_cta_background?.data[0].url})`,
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
              <Box
                sx={{ width: '100%' }}
                component="img"
                src={content.bottom_cta_graphic?.data[0].url}
                alt=""
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
                        color: theme.palette.zesty.zestyOrange,
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
                        mt: 1,
                        color: theme.palette.common.white,
                      },
                    },
                  },
                }}
              >
                {content.bottom_cta_title_and_description ||
                  FillerContent.description}
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
                  text={content.footer_button_text_1 || FillerContent.cta}
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
                  href={content.footer_button_link_2?.data[0].meta.web.uri}
                  text={content.footer_button_text_2 || FillerContent.cta}
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
