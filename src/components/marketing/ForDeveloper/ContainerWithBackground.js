/**
 * MUI Imports
 */
import { Box, Typography, Grid, Stack } from '@mui/material';

/**
 * Components Imports
 */
import Container from 'blocks/container/Container';
import MuiMarkdown from 'markdown-to-jsx';
import ZestyImage from 'blocks/Image/ZestyImage';
import DemoCta from 'components/cta/DemoCta';

const ContainerWithBackground = ({
  theme,
  eyebrow,
  titleAndDescription,
  primaryCta,
  primaryCtaLink,
  mainImage,
  isSmall,
  isLarge,
}) => {
  return (
    <Stack component="section">
      <Container sx={isSmall ? { p: 0 } : { py: 4 }}>
        <Box
          sx={{
            background: theme.palette.zesty.zestyDarkBlue,
            borderRadius: isSmall ? 0 : 5,
            px: isSmall ? 4 : 17,
            py: isSmall ? 10 : 15,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: isLarge ? 'column' : 'row',
            gap: 2,
            boxShadow: '4px 4px 31px rgba(73, 73, 73, 0.64)',
          }}
        >
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
              md={mainImage ? 6 : 12}
            >
              <Typography
                variant="h4"
                component="h3"
                sx={{
                  color: theme.palette.zesty.zestyWhite,
                  fontWeight: 'bold',
                }}
              >
                {eyebrow}
              </Typography>
              <MuiMarkdown
                overrides={{
                  h2: {
                    component: Typography,
                    props: {
                      component: 'h2',
                      variant: 'h3',
                      sx: {
                        color: theme.palette.zesty.zestyOrange,
                        fontWeight: 800,
                        mt: 2,
                      },
                    },
                  },
                  p: {
                    component: Typography,
                    props: {
                      component: 'p',
                      variant: 'h6',
                      sx: {
                        color: theme.palette.zesty.zestyWhite,
                        mt: 5,
                      },
                    },
                  },
                  span: {
                    component: Typography,
                    props: {
                      component: 'span',
                      variant: 'h6',
                      sx: {
                        color: theme.palette.zesty.zestyWhite,
                        mt: 5,
                      },
                    },
                  },
                  ul: {
                    component: Typography,
                    props: {
                      component: 'ul',
                      sx: {
                        mt: 5,
                        paddingInlineStart: 0,
                      },
                    },
                  },
                  li: {
                    component: Typography,
                    props: {
                      component: 'li',
                      sx: {
                        listStyle: 'none !important',
                        mb: 3,
                        '&:before': {
                          content: `"✓"`,
                          color: theme.palette.zesty.zestyOrange,
                          fontWeight: 800,
                          mr: 2,
                        },
                      },
                    },
                  },
                }}
              >
                {titleAndDescription}
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
            </Grid>
            {mainImage && (
              <Grid item sm={12} md={6}>
                <Box>
                  <ZestyImage
                    alt={eyebrow}
                    loading="eager"
                    style={{ width: '100%', maxWidth: '769', height: 'auto' }}
                    width={769}
                    height={389}
                    src={mainImage}
                  />
                </Box>
              </Grid>
            )}
          </Grid>
        </Box>
      </Container>
    </Stack>
  );
};

export default ContainerWithBackground;
