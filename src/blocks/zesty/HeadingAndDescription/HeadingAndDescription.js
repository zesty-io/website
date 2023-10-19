/**
 * MUI Imports
 */

import { Box, Typography } from '@mui/material';
import MuiMarkdown from 'markdown-to-jsx';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

/**
 * Helpers Imports
 */
import FillerContent from 'components/globals/FillerContent';
/**
 * Components Imports
 */
import Container from 'blocks/container/Container';
import DemoCta from 'components/cta/DemoCta';

const HeadingAndDescription = ({ heading, marginTop = 0 }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        mt: marginTop,
      }}
    >
      <Container>
        <Box sx={{ px: !isSmall && 15 }}>
          <MuiMarkdown
            options={{
              overrides: {
                span: {
                  component: Typography,
                  props: {
                    component: 'span',
                    sx: {
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                      color: theme.palette.zesty.zestyOrange,
                    },
                  },
                },
                h1: {
                  component: Typography,
                  props: {
                    component: 'h1',
                    variant: 'h3',
                    sx: {
                      textAlign: 'center',
                      color: theme.palette.zesty.zestyZambezi,
                      fontWeight: 'bold',
                    },
                  },
                },
                h2: {
                  component: Typography,
                  props: {
                    component: 'h2',
                    variant: 'h4',
                    sx: {
                      textAlign: 'center',
                      color: theme.palette.zesty.zestyZambezi,
                      fontWeight: 'bold',
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
              },
            }}
          >
            {heading || FillerContent.headerAndDescription}
          </MuiMarkdown>
        </Box>
      </Container>
    </Box>
  );
};

export default HeadingAndDescription;
