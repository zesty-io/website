import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import getTheme from 'theme';
import AOS from 'aos';
import { theme } from '@zesty-io/material';
import { isProtectedRoute } from 'lib/protectedRouteGetServerSideProps';
import useIsLoggedIn from 'components/hooks/useIsLoggedIn';

function canUseDOM() {
  return !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  );
}

export const useDarkMode = () => {
  // set the initial theme from localstorage or 'light'
  const [themeMode, setTheme] = useState(
    window.localStorage.getItem('themeMode') || 'light',
  );

  const [mountedComponent, setMountedComponent] = useState(false);

  const setMode = (mode) => {
    try {
      window.localStorage.setItem('themeMode', mode);
    } catch {
      /* do nothing */
    }

    setTheme(mode);
  };

  const themeToggler = () => {
    themeMode === 'light' ? setMode('dark') : setMode('light');
  };

  useEffect(() => {
    try {
      const localTheme = window.localStorage.getItem('themeMode');
      localTheme ? setTheme(localTheme) : setMode('light');
    } catch {
      setMode('light');
    }

    setMountedComponent(true);
  }, []);

  return [themeMode, themeToggler, mountedComponent];
};

export default function Page({ children }) {
  //check if client can access the DOM
  if (!canUseDOM()) {
    return null;
  }

  const isLoggedIn = useIsLoggedIn();
  const isAccounts = isProtectedRoute(window.location.pathname);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    AOS.init({
      once: true,
      delay: 0,
      duration: 800,
      offset: 0,
      easing: 'ease-in-out',
    });
  }, []);

  const [themeMode, themeToggler, mountedComponent] = useDarkMode();

  useEffect(() => {
    AOS.refresh();
  }, [mountedComponent, themeMode]);

  return (
    <ThemeProvider
      // only apply zesty/material in accounts paths
      theme={
        isAccounts && isLoggedIn ? theme : getTheme(themeMode, themeToggler)
      }
    >
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Paper elevation={0}>{children}</Paper>
    </ThemeProvider>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
};
