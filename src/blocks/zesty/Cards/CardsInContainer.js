/**
 * MUI Imports
 */
import {
  Box,
  Typography,
  Card,
  Grid,
  useTheme,
  useMediaQuery,
} from '@mui/material';

import Container from 'blocks/container/Container';

/**
 * Helpers Imports
 */
import FillerContent from 'components/globals/FillerContent';
import MuiMarkdown from 'markdown-to-jsx';
import ZestyImage from 'blocks/Image/ZestyImage';

const CardsInContainer = ({
  title,
  data = FillerContent.featuresCards,
  imageWidth = 78,
  imageHeight,
  itemTitleColor,
  isFullWidthSection = true,
  backgroundColor,
  marginTop = 10,
  marginBottom = 0,
}) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const titleColor = itemTitleColor
    ? itemTitleColor
    : theme.palette.zesty.zestyZambezi;

  // check if features_header richtext if not convert it to richtext format for consistency
  const htmlCheck = new RegExp('<("[^"]*"|\'[^\']*\'|[^\'">])*>');
  const isRichText = htmlCheck.test(title);

  return (
    <Box
      component="section"
      sx={{
        mt: marginTop,
        mb: marginBottom,
        background:
          isFullWidthSection && backgroundColor
            ? backgroundColor
            : theme.palette.zesty.zestyWhite,
      }}
    >
      <Container
        sx={
          !isFullWidthSection && {
            background: theme.palette.zesty.zestyWhite,
            borderRadius: isMobile ? 0 : 5,
          }
        }
      >
        <Box sx={{ py: 10 }}>
          {title && (
            <MuiMarkdown
              options={{
                overrides: {
                  h2: {
                    component: Typography,
                    props: {
                      component: 'h2',
                      variant: 'h4',
                      sx: {
                        color: theme.palette.zesty.zestyZambezi,
                        fontWeight: 'bold',
                        textAlign: 'center',
                      },
                    },
                  },
                  span: {
                    component: Typography,
                    props: {
                      component: isRichText ? 'span' : 'h2',
                      variant: 'h4',
                      sx: {
                        color: theme.palette.zesty.zestyZambezi,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        textDecoration: isRichText && 'underline',
                        textDecorationColor:
                          isRichText && theme.palette.zesty.zestyOrange,
                        textUnderlinePosition: isRichText && 'under',
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
                        textAlign: 'center',
                        width: '100%',
                        maxWidth: 700,
                        margin: 'auto',
                        mt: 2,
                      },
                    },
                  },
                },
              }}
            >
              {title || FillerContent.header}
            </MuiMarkdown>
          )}
          <Grid
            sx={{
              mt: title && 5,
              display: 'flex',
              flexWrap: 'wrap',
              justifyItems: 'center',
              justifyContent: 'center',
            }}
            container
            spacing={5}
          >
            {data?.map((item, index) => (
              <Grid
                key={index}
                item
                sm={12}
                md={4}
                sx={{ display: 'table', width: '100%' }}
              >
                <Card
                  component={item.url && 'a'}
                  target={item.url && '_blank'}
                  href={item.url}
                  sx={{
                    py: 5,
                    px: 2,
                    textDecoration: 'none',
                    margin: 'auto',
                    position: 'relative',
                    textDecoration: 'none',
                    borderLeft: `7px solid ${item.borderColor}`,
                    display: 'table-cell',
                  }}
                >
                  <Box
                    sx={{
                      textAlign: 'center',
                    }}
                  >
                    <ZestyImage
                      height={imageHeight}
                      style={{ width: '100', maxWidth: imageWidth }}
                      alt={item.title || ''}
                      loading="lazy"
                      src={item.icon_image || FillerContent.photos[0].src}
                    />
                  </Box>
                  <Box sx={{ mt: 5, textAlign: 'center' }}>
                    <MuiMarkdown
                      options={{
                        overrides: {
                          h3: {
                            component: Typography,
                            props: {
                              component: 'h3',
                              variant: 'h5',
                              sx: {
                                color: theme.palette.zesty.zestyZambezi,
                                fontWeight: 'bold',
                              },
                            },
                          },
                          span: {
                            component: Typography,
                            props: {
                              component: 'h3',
                              variant: 'h5',
                              sx: {
                                color: titleColor,
                                fontWeight: 'bold',
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
                                width: '100%',
                                maxWidth: 700,
                                margin: 'auto',
                                mt: 2,
                              },
                            },
                          },
                        },
                      }}
                    >
                      {item.title || FillerContent.header}
                    </MuiMarkdown>
                    {item.content && (
                      <MuiMarkdown
                        options={{
                          overrides: {
                            p: {
                              component: Typography,
                              props: {
                                variant: 'h6',
                                component: 'p',
                                sx: {
                                  textAlign: 'center',
                                  color: theme.palette.zesty.zestyZambezi,
                                  mt: 2,
                                },
                              },
                            },
                          },
                        }}
                      >
                        {item.content || FillerContent.description}
                      </MuiMarkdown>
                    )}
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default CardsInContainer;
