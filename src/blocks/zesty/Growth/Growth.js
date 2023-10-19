/**
 * MUI Imports
 */

import { Box, Typography, Card } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

/**
 * Helpers Imports
 */
import FillerContent from 'components/globals/FillerContent';
import MuiMarkdown from 'markdown-to-jsx';

/**
 * Components Imports
 */
import Container from 'blocks/container/Container';
import ZestyImage from 'blocks/Image/ZestyImage';

const Growth = ({
  background,
  titleAndDescription,
  cards = FillerContent.growth,
  cardWidth = 664,
  iconWidth = 153,
  isIconOnTop = false,
  marginTop = 0,
}) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isExtraLarge = useMediaQuery(theme.breakpoints.down('xl'));
  const flexOrder = ['flex-end', 'center', 'flex-start'];
  const cardMarginTop = [-10.3, -41, -52.5];

  return (
    <Box component={'section'} sx={{ py: 15, position: 'relative', mt: marginTop }}>
      <Container sx={{ position: 'relative' }}>
        <ZestyImage
          style={{
            display: isExtraLarge && 'none',
            left: -100,
            top: -100,
            position: 'absolute',
            width: '100%',
            maxWidth: 1400,
          }}
          loading="lazy"
          src={
            'https://kfg6bckb.media.zestyio.com/Zesty-growth.svg' || background
          }
          alt="timeline guide"
        />
        <Box
          sx={{
            width: '100%',
            maxWidth: isExtraLarge ? '100%' : 639,
            textAlign: isExtraLarge ? 'center' : 'left',
          }}
        >
          <MuiMarkdown
            options={{
              overrides: {
                h2: {
                  component: Typography,
                  props: {
                    variant: 'h4',
                    component: 'h2',
                    sx: {
                      color: theme.palette.zesty.zestyZambezi,
                      fontWeight: 'bold',
                    },
                  },
                },
                span: {
                  component: Typography,
                  props: {
                    variant: 'h4',
                    component: 'h2',
                    sx: {
                      color: theme.palette.zesty.zestyZambezi,
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
                      color: theme.palette.zesty.zestyZambezi,
                      lineHeight: 1.2,
                      mt: 2,
                    },
                  },
                },
              },
            }}
          >
            {titleAndDescription || FillerContent.headerAndDescription}
          </MuiMarkdown>
        </Box>

        <Box
          sx={{
            mt: 4,
            display: isExtraLarge ? 'flex' : 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 4,
          }}
        >
          {cards?.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                justifyContent: isExtraLarge ? 'center' : flexOrder[index],
                py: 2,
                position: 'relative ',
                mt: isIconOnTop && !isSmall ? cardMarginTop[index] : 0
              }}
            >
              <Card
                sx={{
                  p: 4,
                  width: '100%',
                  maxWidth: cardWidth,
                  minHeight: 193,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 2,
                  flexDirection: isIconOnTop ? 'column' : 'row'
                }}
              >
                <Box sx={{ width: '100%', maxWidth: iconWidth }}>
                  <ZestyImage
                    width={157}
                    height={147}
                    style={{ width: '100%', height: 'auto' }}
                    loading="lazy"
                    src={
                      item.icon_image?.data[0].url ||
                      FillerContent.photos[0].src
                    }
                    l
                    alt={item.feature_name || ''}
                  />
                </Box>
                <Box>
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
                              color: theme.palette.zesty.zestyZambezi,
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
                    {item.feature_name || FillerContent.header}
                  </MuiMarkdown>
                  {item.content && (
                    <MuiMarkdown
                      options={{
                        overrides: {
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
                          span: {
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
                      {item.content || FillerContent.header}
                    </MuiMarkdown>
                  )}
                </Box>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Growth;
