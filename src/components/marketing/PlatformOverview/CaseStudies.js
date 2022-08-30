/**
 * MUI Imports
 */
import { Box, Grid, Card, Typography, Container } from '@mui/material';
import MuiMarkdown from 'mui-markdown';

/**
 * Components Imports
 */

const CaseStudies = ({ theme, isMedium, content, FillerContent }) => {
  return (
    <Box component="section">
      <Container sx={{ height: '100%' }}>
        <MuiMarkdown
          overrides={{
            span: {
              component: Typography,
              props: {
                component: 'span',
                variant: 'h4',
                sx: {
                  textAlign: 'center',
                  color: theme.palette.zesty.zestyOrange,
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

        <Grid container spacing={2}>
          {content.case_studies?.data.map((item, index) => (
            <Grid key={index} item sm={12} md={4}>
              <Card>
                <Box
                  sx={{ width: '100%' }}
                  component="img"
                  src={`${item.image.data[0].url}?width=482`}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CaseStudies;
