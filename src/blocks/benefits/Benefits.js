/**
 * Mui Imports
 */
import { Box, Grid, Typography, Container, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

/**
 * Helper Imports
 */
import FillerContent from 'components/globals/FillerContent';

/**
 * Components Imports
 */
import MuiMarkdown from 'markdown-to-jsx';
import ZestyImage from 'blocks/Image/ZestyImage';

/**
 *
 * @param {string} header - string header and description (wysiwyg_basic)
 * @param {string} headerColor - header title color default is zestyZambezi
 * @param {array} data - array items that is needed to loop through list
 *
 */

const Benefits = ({
  header,
  headerColor,
  headerBackgroundColor,
  headerTextAlign = 'center',
  data,
  marginTop = 15,
}) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        py: isSmall ? 5 : marginTop,
      }}
      component="section"
    >
      <Box
        sx={{
          background:
            isDarkMode && headerBackgroundColor
              ? theme.palette.background.dark
              : headerBackgroundColor,
          py: headerBackgroundColor && 10,
          textAlign: headerTextAlign,
        }}
      >
        <Container>
          {header && (
            <MuiMarkdown
              options={{
                overrides: {
                  h2: {
                    component: Typography,
                    props: {
                      component: 'h2',
                      variant: 'h4',
                      sx: {
                        color: headerColor
                          ? headerColor
                          : theme.palette.zesty.zestyZambezi,
                        fontWeight: 'bold',
                        textAlign: headerTextAlign,
                      },
                    },
                  },
                  span: {
                    component: Typography,
                    props: {
                      component: 'h2',
                      variant: 'h4',
                      sx: {
                        color: headerColor
                          ? headerColor
                          : theme.palette.zesty.zestyZambezi,
                        fontWeight: 'bold',
                        textAlign: headerTextAlign,
                      },
                    },
                  },
                  p: {
                    component: Typography,
                    props: {
                      mt: 2,
                      component: 'p',
                      variant: 'h6',
                      sx: {
                        color: theme.palette.zesty.zestyZambezi,
                        textAlign: headerTextAlign,
                      },
                    },
                  },
                },
              }}
            >
              {header || FillerContent.header}
            </MuiMarkdown>
          )}
        </Container>
      </Box>
      <Container>
        <Box sx={{ mt: 5 }}>
          {data?.map((item, i) => (
            <Grid key={i} sx={{ my: isSmall ? 5 : 10 }} container spacing={3}>
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
                {item?.header && (
                  <Typography
                    component="h3"
                    variant="h5"
                    color={
                      isDarkMode
                        ? theme.palette.zesty.zestyWhite
                        : theme.palette.zesty.zestyOrange
                    }
                    sx={{
                      fontWeight: 'bold',
                      textAlign: isMedium ? 'center' : 'left',
                    }}
                  >
                    {item?.header || FillerContent.header}
                  </Typography>
                )}
                <MuiMarkdown
                  options={{
                    overrides: {
                      h2: {
                        component: Typography,
                        props: {
                          component: 'h2',
                          variant: 'h4',
                          sx: {
                            color: headerColor
                              ? headerColor
                              : theme.palette.zesty.zestyZambezi,
                            fontWeight: 'bold',
                            textAlign: isMedium ? 'center' : 'left',
                          },
                        },
                      },
                      h3: {
                        component: Typography,
                        props: {
                          component: 'h3',
                          variant: 'h5',
                          sx: {
                            color: headerColor
                              ? headerColor
                              : theme.palette.zesty.zestyZambezi,
                            fontWeight: 'bold',
                            textAlign: isMedium ? 'center' : 'left',
                          },
                        },
                      },
                      span: {
                        component: Typography,
                        props: {
                          component: 'h2',
                          variant: 'h3',
                          sx: {
                            color: headerColor
                              ? headerColor
                              : theme.palette.zesty.zestyZambezi,
                            fontWeight: 'bold',
                            textAlign: ' center',
                          },
                        },
                      },
                      p: {
                        component: Typography,
                        props: {
                          mt: 2,
                          component: 'p',
                          variant: 'h6',
                          sx: {
                            color: theme.palette.zesty.zestyZambezi,
                            textAlign: isMedium ? 'center' : 'left',
                            mt: 3,
                          },
                        },
                      },
                    },
                  }}
                >
                  {item?.content || FillerContent.description}
                </MuiMarkdown>
              </Grid>
              <Grid
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: '0 auto',
                }}
                item
                sm={12}
                md={6}
              >
                <ZestyImage
                  alt={item?.header || FillerContent.description}
                  loading="lazy"
                  style={{
                    width: '100%',
                    maxWidth: '500',
                  }}
                  width={500}
                  src={item?.icon_image || FillerContent.photos[0].src}
                />
              </Grid>
            </Grid>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Benefits;
