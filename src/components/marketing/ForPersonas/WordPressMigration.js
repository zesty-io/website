/**
 * MUI Imports
 */
import { Box, Typography, Grid, Stack, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

/**
 * Helper Imports
 */
import FillerContent from 'components/globals/FillerContent';

/**
 * Components Imports
 */
import Container from 'blocks/container/Container';
import MuiMarkdown from 'markdown-to-jsx';
import ZestyImage from 'blocks/Image/ZestyImage';
import DemoCta from 'components/cta/DemoCta';

const WordPressMigration = ({
  eyebrow,
  titleAndDescription,
  primaryCta,
  primaryCtaLink,
  mainImage,
}) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack component="section" sx={{ py: 15 }}>
      <Container>
        <Grid
          justifyContent="center"
          alignItems="center"
          container
          spacing={3.5}
        >
          <Grid
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
            item
            sm={12}
            md={6}
          >
            <Stack>
              <MuiMarkdown
                options={{
                  overrides: {
                    h2: {
                      component: Typography,
                      props: {
                        component: 'h2',
                        variant: 'h3',
                        sx: {
                          color: theme.palette.zesty.zestyZambezi,
                          fontWeight: 700,
                        },
                      },
                    },
                    p: {
                      component: Typography,
                      props: {
                        component: 'p',
                        variant: 'h6',
                        sx: {
                          color: theme.palette.zesty.zestyZambezi,
                          mt: 5,
                        },
                      },
                    },
                  },
                }}
              >
                {titleAndDescription || FillerContent.header}
              </MuiMarkdown>
              {primaryCta && (
                <Box display={'flex'} sx={{ mt: isSmall ? 0 : 5 }}>
                  <DemoCta
                    href={primaryCtaLink}
                    text={primaryCta}
                    sx={{
                      mt: 4,
                      color: theme.palette.zesty.zestyOrange,
                      background: theme.palette.zesty.white,
                      '&:hover': {
                        background: theme.palette.zesty.zestyOrange,
                        color: theme.palette.zesty.white,
                      },
                    }}
                  />
                </Box>
              )}
            </Stack>
          </Grid>
          {mainImage && (
            <Grid item sm={12} md={6}>
              <Box>
                <ZestyImage
                  alt={eyebrow}
                  loading="eager"
                  style={{ width: '100%', maxWidth: '365', height: 'auto' }}
                  width={365}
                  // height={389}
                  src={mainImage || FillerContent.photos[0].src}
                />
              </Box>
            </Grid>
          )}
        </Grid>
      </Container>
    </Stack>
  );
};

export default WordPressMigration;
