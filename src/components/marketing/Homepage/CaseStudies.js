/**
 * MUI Imports
 */

import { Box, Typography, Card, Button, Grid } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Container from 'blocks/container/Container';
import MuiMarkdown from 'mui-markdown';
import ZestyImage from 'blocks/Image/ZestyImage';

const CaseStudies = ({ content, FillerContent, theme, isDarkMode }) => {
  return (
    <Box
      component="section"
      sx={{
        background: isDarkMode
          ? theme.palette.zesty.zestyDarkBlue
          : theme.palette.zesty.zestyWhite,
        py: 10,
        mt: 10,
      }}
    >
      <Container>
        <Box>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              color: isDarkMode
                ? theme.palette.common.white
                : theme.palette.zesty.zestyDarkText,
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            {content.case_studies_eyebrow || FillerContent.description}
          </Typography>
          <Typography
            variant="h4"
            component="p"
            sx={{
              color: isDarkMode
                ? theme.palette.common.white
                : theme.palette.zesty.zestyDarkText,
              textAlign: 'center',
            }}
          >
            {content.case_studies_header || FillerContent.description}
          </Typography>
        </Box>

        <Box sx={{ mt: 8 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <MuiMarkdown
                overrides={{
                  h2: {
                    component: Typography,
                    props: {
                      variant: 'h3',
                      component: 'h2',
                      sx: {
                        color: theme.palette.zesty.zestyDarkText,
                        fontWeight: 'bold',
                        textAlign: 'center',
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
                        textAlign: 'center',
                        lineHeight: 1.2,
                        mt: 2,
                      },
                    },
                  },
                }}
              >
                {content.case_study_card_1 || FillerContent.rich_text}
              </MuiMarkdown>
            </Grid>
            <Grid item xs={12} md={4}>
              <MuiMarkdown
                overrides={{
                  h2: {
                    component: Typography,
                    props: {
                      variant: 'h3',
                      component: 'h2',
                      sx: {
                        color: theme.palette.zesty.zestyDarkText,
                        fontWeight: 'bold',
                        textAlign: 'center',
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
                        textAlign: 'center',
                        lineHeight: 1.2,
                        mt: 2,
                      },
                    },
                  },
                }}
              >
                {content.case_study_card_2 || FillerContent.rich_text}
              </MuiMarkdown>
            </Grid>
            <Grid item xs={12} md={4}>
              <MuiMarkdown
                overrides={{
                  h2: {
                    component: Typography,
                    props: {
                      variant: 'h3',
                      component: 'h2',
                      sx: {
                        color: theme.palette.zesty.zestyDarkText,
                        fontWeight: 'bold',
                        textAlign: 'center',
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
                        textAlign: 'center',
                        lineHeight: 1.2,
                        mt: 2,
                      },
                    },
                  },
                }}
              >
                {content.case_study_card_3 || FillerContent.rich_text}
              </MuiMarkdown>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 5, mt: 10 }}>
          {content?.g2_badges?.data.map((item, index) => (
            <Box key={index} sx={{ width: '100%', maxWidth: 171 }}>
              <ZestyImage
                width={171}
                height={192}
                loading="lazy"
                style={{ width: '100%', height: 'auto' }}
                src={item.url || FillerContent.photos[0].src}
                alt={item.type || ''}
              />
            </Box>
          ))}
        </Box>

        <Grid sx={{ mt: 8 }} container spacing={4}>
          {content?.case_study_cards?.data.map((item, index) => (
            <Grid key={index} item sm={12} md={4}>
              <Card
                component="a"
                href={item.card_link.data[0].meta.web.uri || FillerContent.href}
                target="_blank"
                sx={{
                  width: '100%',
                  maxWidth: 482,
                  minHeight: 484,
                  borderRadius: 5,
                  margin: 'auto',
                  position: 'relative',
                  display: 'block',
                  textDecoration: 'none',
                }}
              >
                <ZestyImage
                  width={482}
                  height={233}
                  style={{ width: '100%', maxWidth: 482, height: 'auto' }}
                  loading="lazy"
                  src={item.image?.data[0].url || FillerContent.photos[0].src}
                  alt={item.title || ''}
                />

                <Box
                  sx={{
                    p: 2,
                    height: '100%',
                  }}
                >
                  <Box>
                    <Box sx={{ width: '100%', maxWidth: 150 }}>
                      <ZestyImage
                        width={194}
                        height={60}
                        style={{ width: '100%', maxWidth: 194, height: 'auto' }}
                        component="img"
                        loading="lazy"
                        src={
                          item.logo?.data[0].url || FillerContent.photos[0].src
                        }
                        alt={item.title || ''}
                      />
                    </Box>

                    <Box>
                      <Typography
                        component="p"
                        variant="body1"
                        sx={{ color: theme.palette.zesty.zestyZambezi, mt: 2 }}
                      >
                        {item.summary || FillerContent.description}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ position: 'absolute', bottom: 10, right: 20 }}>
                    <Button
                      sx={{
                        color: theme.palette.zesty.zestyOrange,
                        fontWeight: 'bold',
                        '&:hover': {
                          background: 'transparent',
                        },
                      }}
                      component="a"
                      href={
                        item.card_link?.data[0].meta.web.uri ||
                        FillerContent.cta
                      }
                      target="_blank"
                    >
                      {item.cta || 'Learn more'}
                      <ArrowRightAltIcon sx={{ ml: 1 }} />
                    </Button>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CaseStudies;
