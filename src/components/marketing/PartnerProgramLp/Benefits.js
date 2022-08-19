import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
/**
 * MUI Imports
 */
import { Box, Typography, Button, Grid } from '@mui/material';
import Divider from '@mui/material/Divider';
import Container from 'blocks/container/Container';
import MuiMarkdown from 'mui-markdown';
import { useTheme, alpha } from '@mui/material/styles';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

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
            overrides={{
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
                }}
                item
                sm={12}
                md={6}
                order={isMedium ? 1 : index % 2}
              >
                <Box sx={{ width: '100%', maxWidth: 700 }}>
                  <Box
                    sx={{ width: '100%' }}
                    component="img"
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
                <Box>
                  <MuiMarkdown
                    overrides={{
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
                    }}
                  >
                    {item.description}
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
