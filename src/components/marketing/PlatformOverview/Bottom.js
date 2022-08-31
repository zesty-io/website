/**
 * MUI Imports
 */

import { Box, Typography, Grid } from '@mui/material';
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
  isSmall,
  isExtraLarge,
}) => {
  return (
    <Box
      component="section"
      sx={{
        mt: 10,
        py: 5,
        background: `url(${content.background_orange?.data[1].url})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid item sm={12} md={6}>
            <Box sx={{}}>
              <Box
                sx={{ width: '100%' }}
                component="img"
                src={`${content.footer_graphic?.data[0].url}?width=708`}
                alt=""
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
            md={6}
          >
            <Box sx={{ width: '100%' }}>
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
                {content.footer_description || FillerContent.description}
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
                  text={content.cta_right_text || FillerContent.cta}
                  variant="contained"
                  target="_blank"
                  color="secondary"
                  fullWidth={isMedium}
                  sx={{
                    fontWeight: 'bold',
                    borderRadius: 1,
                  }}
                />
                <DemoCta
                  fullWidth={isMedium}
                  target="_blank"
                  href={content.cta_right_url?.data[0].meta.web.uri}
                  text={'Request a demo' || FillerContent.cta}
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
