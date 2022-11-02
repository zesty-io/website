/**
 * Mui Imports
 */

import { Box, Grid, Typography, Container } from '@mui/material';
import MuiMarkdown from 'markdown-to-jsx';

/**
 * Local Assets Imports
 */
import MiddelBackground from '../../../../public/assets/images/dxp-enterprise/middle-background.svg';
const WhyZesty = ({ content, FillerContent, theme, isMedium }) => {
  const whyZestyData = [
    {
      text: content.why_zesty_1 || FillerContent.description,
      image:
        content.why_zesty_graphic_1.data[0]?.url || FillerContent.photos[0].url,
    },
    {
      text: content.why_zesty_2 || FillerContent.description,
      image:
        content.why_zesty_graphic_2.data[0]?.url || FillerContent.photos[0].url,
    },
    {
      text: content.why_zesty_3 || FillerContent.description,
      image:
        content.why_zesty_graphic_3.data[0]?.url || FillerContent.photos[0].url,
    },
    {
      text: content.why_zesty_4 || FillerContent.description,
      image:
        content.why_zesty_graphic_4.data[0]?.url || FillerContent.photos[0].url,
    },
  ];

  return (
    <Box
      sx={{
        backgroundImage: `url(${MiddelBackground.src})`,
        backgroundRepeat: 'no-repeat',

        py: 15,
      }}
      component="section"
    >
      <Container>
        <Box>
          <Typography
            component="h2"
            variant="h3"
            sx={{
              color: theme.palette.zesty.zestyZambezi,
              fontWeight: 'bold',
              textAlign: ' center',
            }}
          >
            {content.why_zesty_title || FillerContent.header}
          </Typography>
        </Box>

        <Box sx={{ mt: 5 }}>
          {whyZestyData.map((item) => (
            <Grid sx={{ my: 5 }} container spacing={2}>
              <Grid
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                item
                sm={12}
                md={6}
              >
                <MuiMarkdown
                  options={{
                    overrides: {
                      h3: {
                        component: Typography,
                        props: {
                          variant: 'h4',
                          component: 'h3',
                          color: theme.palette.zesty.zestyZambezi,
                          textAlign: isMedium ? 'center' : 'text-left',
                          fontWeight: 'bold',
                        },
                      },
                      p: {
                        component: Typography,
                        props: {
                          variant: 'h5',
                          mt: 1,
                          component: 'p',
                          color: theme.palette.zesty.zestyZambezi,
                          textAlign: isMedium ? 'center' : 'text-left',
                        },
                      },
                    },
                  }}
                >
                  {item.text}
                </MuiMarkdown>
              </Grid>
              <Grid
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                item
                sm={12}
                md={6}
              >
                <Box>
                  <Box
                    sx={{ width: '100%', maxWidth: 599 }}
                    component="img"
                    src={item.image}
                  />
                </Box>
              </Grid>
            </Grid>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default WhyZesty;
