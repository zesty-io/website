/**
 * MUI Imports
 */

import { Box, Typography, Card, Button, Grid } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Container from 'blocks/container/Container';

const CaseStudies = ({ content, FillerContent, theme, isDarkMode }) => {
  return (
    <Box
      component="section"
      sx={{
        // background: `url(${content.case_studies_background.data[0].url})`,
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat',
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
              mt: 2,
            }}
          >
            {content.case_studies_header || FillerContent.description}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 5, mt: 10 }}>
          {content.g2_badges?.data.map((item, index) => (
            <Box
              data-aos-offset="200"
              data-aos="fade-up"
              data-aos-duration={`${500 * (index + 1)}`}
              key={index}
              sx={{ width: '100%', maxWidth: 171 }}
            >
              <Box
                sx={{ width: '100%' }}
                component="img"
                src={item.url}
                alt={item.type || ''}
              />
            </Box>
          ))}
        </Box>

        <Grid sx={{ mt: 8 }} container spacing={4}>
          {content.case_study_cards?.data.map((item, index) => (
            <Grid key={index} item sm={12} md={4}>
              <Card
                component="a"
                href={item.card_link.data[0].meta.web.uri}
                target="_blank"
                data-aos-offset="200"
                data-aos="fade-up"
                data-aos-duration={`${index + 1}000`}
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
                <Box
                  sx={{ width: '100%' }}
                  component="img"
                  src={item.image?.data[0].url}
                  alt={item.title}
                />

                <Box
                  sx={{
                    p: 2,
                    height: '100%',
                  }}
                >
                  <Box>
                    <Box sx={{ width: '100%', maxWidth: 150 }}>
                      <Box
                        sx={{ width: '100%' }}
                        component="img"
                        src={item.logo?.data[0].url}
                        alt={item.title}
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
