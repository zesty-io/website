/**
 * MUI Imports
 */
import { Box, Grid, Card, Typography, Container } from '@mui/material';
import MuiMarkdown from 'mui-markdown';

/**
 * Components Imports
 */

const CaseStudies = ({
  theme,
  // isMedium,
  content,
  FillerContent,
}) => {
  return (
    <Box component="section">
      <Container sx={{ height: '100%', py: 10 }}>
        <MuiMarkdown
          overrides={{
            span: {
              component: Typography,
              props: {
                component: 'span',
                variant: 'h4',
                sx: {
                  textAlign: 'center',
                  color: theme.palette.zesty.zestyDarkText,
                  fontWeight: 'inherit',
                },
              },
            },
            p: {
              component: Typography,

              props: {
                component: 'h2',
                variant: 'h4',
                sx: {
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: theme.palette.zesty.zestyDarkText,
                },
              },
            },
          }}
        >
          {content.case_studies_header || FillerContent.description}
        </MuiMarkdown>

        <Grid sx={{ mt: 5 }} container spacing={2}>
          {content.case_studies?.data.map((item, index) => (
            <Grid key={index} item xs={12} md={4}>
              <Card
                component="a"
                href={item.card_link.data[0].meta.web.uri || FillerContent.href}
                sx={{
                  minHeight: 450,
                  textDecoration: 'none',
                  display: 'block',
                }}
              >
                <Box
                  sx={{ width: '100%' }}
                  component="img"
                  src={`${item.image.data[0].url}?width=482`}
                />

                <Box sx={{ px: 2, py: 4 }}>
                  <Typography
                    component="p"
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      color: theme.palette.zesty.zestyZambezi,
                    }}
                  >
                    {item.title || FillerContent.description}
                  </Typography>
                  <Typography
                    component="p"
                    variant="caption1"
                    sx={{
                      lineHeight: 1.2,
                      mt: 2,
                      color: theme.palette.zesty.zestyZambezi,
                    }}
                  >
                    {item.summary || FillerContent.description}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    px: 4,
                    mb: 2,
                  }}
                >
                  <Typography
                    target={'_blank'}
                    href={
                      item.card_link.data[0].meta.web.uri || FillerContent.href
                    }
                    component="a"
                    variant="caption1"
                    sx={{
                      lineHeight: 1.2,
                      mt: 2,
                      textDecoration: 'none',
                      color: theme.palette.zesty.zestyOrange,
                      fontWeight: 'bold',
                    }}
                  >
                    {item.cta || FillerContent.description}
                  </Typography>
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
