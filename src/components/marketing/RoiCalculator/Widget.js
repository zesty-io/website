/**
 *  MUI Imports
 */
import { Box, Typography, Container } from '@mui/material';
import MuiMarkdown from 'mui-markdown';

function Widget({ content, FillerContent, theme }) {
  return (
    <Box
      sx={{
        py: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      component="section"
    >
      <Container>
        <MuiMarkdown
          overrides={{
            h3: {
              component: Typography,
              props: {
                component: 'h3',
                variant: 'h4',
                sx: {
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: theme.palette.zesty.zestyZambezi,
                },
              },
            },
            p: {
              component: Typography,
              props: {
                component: 'p',
                variant: 'h6',
                sx: {
                  textAlign: 'center',
                  mt: 2,
                  color: theme.palette.zesty.zestyZambezi,
                },
              },
            },
          }}
        >
          {content.widget_title_and_description || FillerContent.header}
        </MuiMarkdown>
      </Container>
    </Box>
  );
}

export default Widget;
