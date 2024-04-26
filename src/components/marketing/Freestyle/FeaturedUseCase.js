/**
 * MUI Imports
 */
import { Box, Typography, Card, Grid, Stack } from '@mui/material';

/**
 * Helpers Imports
 */
import FillerContent from 'components/globals/FillerContent';
import MuiMarkdown from 'markdown-to-jsx';
import ZestyImage from 'blocks/Image/ZestyImage';

const FeaturedUseCase = ({
  title,
  data = FillerContent.featuresCards,
  imageWidth = 78,
  imageHeight,
  itemTitleColor,
}) => {
  const titleColor = itemTitleColor ? itemTitleColor : '#5b5b5b';

  return (
    <Stack bgcolor="#eff5ff">
      <Stack
        sx={(theme) => ({
          [theme.breakpoints.up('xs')]: {
            maxWidth: theme.maxWidth,
            mx: 'auto',
            py: 4,
            px: 2,
          },
          [theme.breakpoints.up('tablet')]: {
            py: 6,
            px: 4,
          },
          [theme.breakpoints.up('lg')]: {
            flexDirection: 'row',
            py: 0,
            px: 14,
            gap: 8,
          },
          [theme.breakpoints.up('desktopWide')]: {
            gap: 15,
          },
        })}
      >
        <Box sx={{ py: 10 }}>
          {title && (
            <MuiMarkdown
              options={{
                overrides: {
                  span: {
                    component: Typography,
                    props: {
                      component: 'h2',
                      variant: 'h2',
                      color: 'text.secondary',
                      sx: {
                        fontWeight: 'bold',
                        textAlign: 'center',
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
                    // borderLeft: `7px solid ${item.borderColor}`,
                    display: 'table-cell',
                    borderRadius: 2,
                    boxShadow: '0px 3px 6px 0px rgba(140, 152, 164, 0.25)',
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
                              variant: 'h4',
                              sx: {
                                color: '#5b5b5b',
                                fontWeight: 'bold',
                              },
                            },
                          },
                          span: {
                            component: Typography,
                            props: {
                              component: 'h3',
                              variant: 'h4',
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
                              variant: 'h4',
                              sx: {
                                color: '#5b5b5b',
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
                                  color: '#5b5b5b',
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
      </Stack>
    </Stack>
  );
};

export default FeaturedUseCase;
