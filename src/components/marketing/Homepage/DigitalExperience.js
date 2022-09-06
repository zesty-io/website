/**
 * MUI Imports
 */

import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import MuiMarkdown from 'mui-markdown';
import Container from 'blocks/container/Container';
import ZestyImage from 'blocks/Image/ZestyImage';
/**
 * Static Assets Imports
 */

const DigitalExperience = ({ content, FillerContent, theme }) => {
  return (
    <Box
      sx={{
        background: theme.palette.zesty.zestyGray99,
        mt: 10,
        py: 10,
        position: 'relative',
        overflow: 'hidden',
      }}
      component="section"
    >
      {/* <Box
        sx={{ position: 'absolute', right: 0 }}
        component="img"
        src={content.bracket_background?.data[0].url}
      /> */}

      <Container>
        <MuiMarkdown
          overrides={{
            span: {
              component: Typography,
              props: {
                variant: 'h3',
                component: 'span',
                sx: {
                  fontWeight: 'bold',
                  textAlign: 'center',
                  textDecoration: 'underline',
                  textDecorationColor: theme.palette.zesty.zestyOrange,
                  textUnderlinePosition: 'under',
                  color: 'inherit',
                },
              },
            },
            h2: {
              component: Typography,
              props: {
                variant: 'h3',
                component: 'h2',
                sx: {
                  width: '100%',
                  maxWidth: 700,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  color: theme.palette.zesty.zestyDarkText,
                  margin: 'auto',
                },
              },
            },
            p: {
              component: Typography,
              props: {
                variant: 'h6',
                component: 'p',
                sx: {
                  pt: 4,
                  width: '100%',
                  maxWidth: 700,
                  lineHeight: 1.2,
                  textAlign: 'center',
                  color: theme.palette.zesty.zestyZambezi,
                  margin: 'auto',
                },
              },
            },
          }}
        >
          {content.product_title_and_description}
        </MuiMarkdown>

        <Box>
          <Grid
            sx={{
              mt: 10,
              position: 'relative',
            }}
            spacing={2}
            container
          >
            {content.product_options?.data.map((item, index) => (
              <Grid
                key={index}
                sx={{
                  width: '100%',
                }}
                item
                sm={12}
                md={4}
              >
                <Box
                  data-aos-offset="200"
                  data-aos="fade-up"
                  data-aos-duration={`${500 * (index + 1)}`}
                >
                  <Card
                    component="a"
                    href={item.link?.data[0].meta.web.uri || FillerContent.href}
                    target="_blank"
                    sx={{
                      width: '100%',
                      minHeight: 450,
                      p: 2,
                      maxWidth: 426,
                      margin: 'auto',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textDecoration: 'none',
                    }}
                  >
                    <CardContent>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <ZestyImage
                          width={294}
                          height={179}
                          options={{ width: 294, height: 179 }}
                          style={{ width: '100%', maxWidth: 294 }}
                          alt={item.product_name}
                          loading="lazy"
                          src={item.graphic?.data[0].url}
                        />
                      </Box>

                      <Box sx={{ textAlign: 'center', mt: 4 }}>
                        <Typography
                          component="p"
                          variant="h6"
                          sx={{
                            fontWeight: 'bold',
                            color: theme.palette.zesty.zestyOrange,
                          }}
                        >
                          {item.product_name || FillerContent.description}
                        </Typography>
                        <Typography
                          component="p"
                          variant="h6"
                          sx={{
                            mt: 4,
                            lineHeight: 1.2,
                            color: theme.palette.zesty.zestyZambezi,
                          }}
                        >
                          {item.product_description ||
                            FillerContent.description}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default DigitalExperience;
