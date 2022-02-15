/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { useTheme } from '@mui/material/styles';
import { colors } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import FixedLayout from 'layouts/Fixed';
import Container from 'components/Container';

const PageComponent = () => {
  const theme = useTheme();
  const renderCodeBlock = (code = '', language = 'javascript') => {
    return (
      <Box
        component={SyntaxHighlighter}
        language={language}
        style={vs2015}
        padding={`${theme.spacing(2)} !important`}
        borderRadius={2}
        margin={`${theme.spacing(0)} !important`}
      >
        {code}
      </Box>
    );
  };

  return (
    <FixedLayout>
      <Container>
        <Box marginBottom={4}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Page component
          </Typography>
          <Typography
            gutterBottom
            sx={{
              '& code': {
                background: colors.yellow[400],
                color: theme.palette.common.black,
              },
            }}
          >
            The "Page" component decraration is inside{' '}
            <code>src/components/Page.js</code>
          </Typography>
          <Typography
            gutterBottom
            sx={{
              '& code': {
                background: colors.yellow[400],
                color: theme.palette.common.black,
              },
            }}
          >
            The "Page" component is the bootstrap point of the whole app and the
            parent component of the views and pages.
          </Typography>
          <Typography
            sx={{
              marginBottom: 2,
              '& code': {
                background: colors.yellow[400],
                color: theme.palette.common.black,
              },
            }}
          >
            The declaration of the <code>useDarkMode</code> hook, the
            initialization of the <code>AOS</code> plugin and MUI's{' '}
            <code>ThemeProvider</code> are in the "Page" component.
          </Typography>
          <Box>
            {renderCodeBlock(`import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import getTheme from 'theme';
import AOS from 'aos';

export const useDarkMode = () => {

  ...
  [The hook logic]
  ...

  return [themeMode, themeToggler, mountedComponent];
};

export default function Page({ children }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    AOS.init({
      once: true,
      delay: 50,
      duration: 500,
      easing: 'ease-in-out',
    });
  }, []);

  const [themeMode, themeToggler, mountedComponent] = useDarkMode();

  useEffect(() => {
    AOS.refresh();
  }, [mountedComponent, themeMode]);

  return (
    <ThemeProvider theme={getTheme(themeMode, themeToggler)}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Paper elevation={0}>{children}</Paper>
    </ThemeProvider>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
};
`)}
          </Box>
        </Box>
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              marginBottom: 2,
            }}
          >
            Example of the use of the Page component
          </Typography>
          <Box>
            {renderCodeBlock(`import React from 'react';
...
[Other components import]
...

import Page from './components/Page';

const App = () => {
  return (
    <Page>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Page>
  );
};

export default App;`)}
          </Box>
        </Box>
      </Container>
    </FixedLayout>
  );
};

export default PageComponent;
