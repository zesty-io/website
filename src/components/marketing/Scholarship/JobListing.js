/**
 * MUI Imports
 */
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Grid, Container, Typography, Button } from '@mui/material';
import MuiMarkdown from 'mui-markdown';
import FillerContent from 'components/globals/FillerContent';
import ZohoFormEmbed from 'components/cta/ZohoFormEmbed';

const JobListing = ({
  page_title,
  eyebrow_content,
  page_content,
  application_header,
  application_content,
}) => {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Box sx={{ py: 10 }} component="section">
        <Container>
          <Grid sx={{ mb: 4 }} container>
            <Grid item sm={12} md={6}>
              <Typography
                sx={{
                  color: theme.palette.zesty.zestyZambezi,
                  fontWeight: 'bold',
                }}
                component="h1"
                variant="h4"
              >
                {page_title || FillerContent.description}
              </Typography>
              <Typography
                sx={{ color: theme.palette.zesty.zestyZambezi, mt: 2 }}
                component="p"
                variant="h6"
              >
                {eyebrow_content || FillerContent.description}
              </Typography>
            </Grid>

            <Grid
              sx={{
                display: 'flex',
                justifyContent: isMedium ? 'flex-start' : 'flex-end',
                alignItems: 'center',
                mt: isMedium ? 2 : 0,
              }}
              item
              sm={12}
              md={6}
            >
              <Button
                component="a"
                href="#form"
                variant="contained"
                color="primary"
              >
                Apply Now
              </Button>
            </Grid>
          </Grid>
          <Box
            component="hr"
            sx={{
              border: 'none',
              borderTop: `1px solid rgba(0, 0, 0, 0.12)}`,
              display: 'block',
            }}
          />
          {/* Page Content */}

          <Box sx={{ pt: 4 }}>
            <MuiMarkdown
              overrides={{
                h2: {
                  component: Typography,
                  props: {
                    variant: 'h5',
                    component: 'h2',
                    sx: {
                      fontWeight: 'bold',
                      py: 2,
                    },
                  },
                },
                p: {
                  component: Typography,
                  props: {
                    variant: 'body1',
                    component: 'h2',
                  },
                },
              }}
            >
              {page_content || FillerContent.header}
            </MuiMarkdown>
          </Box>
        </Container>

        {/* Form */}
        <Box sx={{ background: theme.palette.alternate.main, py: 10 }}>
          <Container>
            <Typography
              sx={{
                fontWeight: 'bold',
                textAlign: 'center',
                color: theme.palette.zesty.zestyZambezi,
              }}
              variant="h4"
              component="h3"
            >
              {application_header || FillerContent.header}
            </Typography>
            <Typography
              sx={{
                textAlign: 'center',
                color: theme.palette.zesty.zestyZambezi,
                mt: 2,
              }}
              variant="body1"
              component="p"
            >
              {application_content || FillerContent.description}
            </Typography>

            <Box id="form" sx={{ mt: 4 }}>
              <ZohoFormEmbed
                formURL="https://survey.zesty.io/zs/fVCzTn"
                height="3800px"
                width={1920}
              />
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default JobListing;
