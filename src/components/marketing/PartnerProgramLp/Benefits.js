import React from 'react';

/**
 * MUI Imports
 */
import { Box, Typography, Grid, Container } from '@mui/material';
import MuiMarkdown from 'markdown-to-jsx';
import ZestyImage from 'blocks/Image/ZestyImage';

const Benefits = ({ theme, isMedium, isDarkMode, content, FillerContent }) => {
  const data = [
    {
      graphic:
        content.open_text_area_graphic?.data[0].url ||
        FillerContent.photos[0].src,
      description: content.open_text_area || FillerContent.description,
    },
    {
      graphic:
        content.open_text_area_2_graphic?.data[0].url ||
        FillerContent.photos[0].src,
      description: content.open_text_area_2 || FillerContent.description,
    },
    {
      graphic:
        content.open_text_area_3_graphic?.data[0].url ||
        FillerContent.photos[0].src,
      description: content.open_text_area_3 || FillerContent.description,
    },
    {
      graphic:
        content.open_text_area_4_graphic?.data[0].url ||
        FillerContent.photos[0].src,
      description: content.open_text_area_4 || FillerContent.description,
    },
  ];

  return (
    <Container sx={{ py: 15 }}>
      <Box>
        <Box>
          <MuiMarkdown
            options={{
              overrides: {
                h2: {
                  component: Typography,
                  props: {
                    variant: 'h4',
                    component: 'h2',
                    sx: {
                      textAlign: 'center',
                      fontWeight: 'bold',
                      color: theme.palette.zesty.zestyZambezi,
                    },
                  },
                },
              },
            }}
          >
            {content.benefits_header || FillerContent.description}
          </MuiMarkdown>
        </Box>

        <Box sx={{ mt: 2 }}>
          {data.map((item, index) => (
            <Grid sx={{ mt: 2, py: 2 }} key={index} container spacing={2}>
              <Grid
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                item
                sm={12}
                md={6}
                order={isMedium ? 1 : index % 2}
              >
                <Box>
                  <ZestyImage
                    style={{ width: '100%', maxWidth: 500, height: 'auto' }}
                    width={700}
                    height={500}
                    src={item.graphic}
                    alt={''}
                  />
                </Box>
              </Grid>
              <Grid
                sx={{ display: 'flex', alignItems: 'center' }}
                item
                sm={12}
                md={6}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <MuiMarkdown
                    options={{
                      overrides: {
                        h3: {
                          component: Typography,
                          props: {
                            variant: 'h4',
                            component: 'h2',
                            sx: {
                              fontWeight: 'bold',
                              color: theme.palette.zesty.zestyZambezi,
                            },
                          },
                        },
                        p: {
                          component: Typography,
                          props: {
                            variant: 'h6',
                            component: 'p',
                            sx: {
                              lineHeight: 1.2,
                              mt: 2,
                              color: theme.palette.zesty.zestyZambezi,
                            },
                          },
                        },
                      },
                    }}
                  >
                    {item.description.replace('&rsquo;', "'")}
                  </MuiMarkdown>
                </Box>
              </Grid>
            </Grid>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Benefits;
