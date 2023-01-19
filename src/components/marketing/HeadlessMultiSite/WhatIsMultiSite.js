/**
 * MUI Imports
 */
import { Box, Typography, Container } from '@mui/material';
import MuiMarkdown from 'markdown-to-jsx';
import { useTheme } from '@mui/material/styles';

/**
 * Helpers Imports
 */
import FillerContent from 'components/globals/FillerContent';

const WhatIsMultiSite = ({ content }) => {
  const theme = useTheme();

  return (
    <Box component="section" sx={{ mt: 10 }}>
      <Container>
        <Box>
          <MuiMarkdown
            options={{
              overrides: {
                h2: {
                  component: Typography,
                  props: {
                    component: 'h2',
                    variant: 'h4',
                    sx: {
                      color: theme.palette.zesty.zestyZambezi,
                      fontWeight: 'bold',
                      textAlign: 'center',
                    },
                  },
                },
                p: {
                  component: Typography,
                  props: {
                    component: 'p',
                    variant: 'h6',
                    sx: {
                      color: theme.palette.zesty.zestyZambezi,
                      width: '100%',
                      margin: 'auto',
                      textAlign: 'center',
                      mt: 2,
                    },
                  },
                },
              },
            }}
          >
            {content || FillerContent.header}
          </MuiMarkdown>
        </Box>
      </Container>
    </Box>
  );
};

export default WhatIsMultiSite;
