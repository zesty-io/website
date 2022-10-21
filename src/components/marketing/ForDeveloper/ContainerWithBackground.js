/**
 * MUI Imports
 */
import { Box, Typography, Grid, Button } from '@mui/material';

/**
 * Components Imports
 */
import Container from 'blocks/container/Container';
import MuiMarkdown from 'mui-markdown';
import ZestyImage from 'blocks/Image/ZestyImage';

const ContainerWithBackground = ({
  theme,
  eyebrow,
  titleAndDescription,
  primaryCta,
  primaryCtaLink,
  mainImage,
  isSmall,
  isMedium,
  isLarge,
}) => {
  return (
    <Box component="section">
      <Container sx={isSmall ? { px: 0, py: 7 } : { py: 7 }}>
        <Box
          sx={{
            background: theme.palette.zesty.zestyDarkBlue,
            borderRadius: isSmall ? 0 : 5,
            p: 4,
            py: isSmall ? 8 : 15,
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
              md={6}
            >
              <Box>
                <Box>
                  <Typography
                    variant="h4"
                    component="h2"
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
                          component: 'h1',
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
                    }}
                  >
                    {titleAndDescription}
                  </MuiMarkdown>
                </Box>
              </Box>
              <Box
                sx={{
                  mt: 4,
                  display: 'flex',
                  flexDirection: isMedium ? 'column' : 'row',
                  gap: 2,
                }}
              ></Box>
              <Box display={'flex'} sx={{ mt: isSmall ? 0 : 5 }}>
                <Button
                  sx={{
                    border: `1px solid ${theme.palette.common.white}`,
                    color: theme.palette.common.zestyOrange,
                    background: theme.palette.zesty.white,
                    '&:hover': {
                      background: theme.palette.zesty.zestyOrange,
                      color: theme.palette.zesty.white,
                      border: `1px solid ${theme.palette.zesty.zestyOrange}`,
                    },
                  }}
                  color="secondary"
                  variant="outlined"
                  size={'large'}
                  href={primaryCtaLink}
                  target="_blank"
                  endIcon={
                    <Box
                      component={'svg'}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width={24}
                      height={24}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </Box>
                  }
                >
                  {primaryCta}
                </Button>
              </Box>
            </Grid>
            <Grid item sm={12} md={6}>
              <Box>
                <ZestyImage
                  alt="hero image"
                  loading="eager"
                  style={{ width: '100%', maxWidth: '769', height: 'auto' }}
                  width={769}
                  height={389}
                  src={mainImage}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ContainerWithBackground;
