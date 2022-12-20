import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import getTheme, { getThemeAccounts } from 'theme';
import AOS from 'aos';
import { isProtectedRoute } from 'lib/accounts/protectedRouteGetServerSideProps';
import useIsLoggedIn from 'components/hooks/useIsLoggedIn';
import usePeriodicVerify from 'components/hooks/usePeriodicVerify';
import { useZestyStore } from 'store';
import { useFetchWrapper } from 'components/hooks/useFetchWrapper';

export const useDarkMode = () => {
  const [themeMode, setThemeMode] = useState('light');

  const themeToggler = () => {
    const theme = themeMode === 'light' ? 'dark' : 'light';
    window.localStorage.setItem('themeMode', theme);
    setThemeMode(theme);
  };

  useEffect(() => {
    window.localStorage.setItem(
      'themeMode',
      window.localStorage.getItem('themeMode') || themeMode,
    );
    setThemeMode(window.localStorage.getItem('themeMode'));
  }, []);

  return [themeMode, themeToggler];
};

export default function Page({ children }) {
  const [pathname, setPathname] = useState('');
  const isLoggedIn = useIsLoggedIn();
  const isAccounts = isProtectedRoute(pathname);
  const [themeMode, themeToggler] = useDarkMode();

  const { setuserInfo, setloading } = useZestyStore((state) => state);
  const { userInfo, loading } = useFetchWrapper(isLoggedIn);

  // this will run to if the user is logged in to keep the session alive!
  usePeriodicVerify(isLoggedIn);

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  useEffect(() => {
    setuserInfo(userInfo.data);
  }, [userInfo]);

  useEffect(() => {
    setloading(loading);
  }, [loading]);

  useEffect(() => {
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

  useEffect(() => {
    AOS.refresh();
  }, [themeMode]);

  return (
    <ThemeProvider
      // only apply zesty/material in accounts paths
      theme={
        (isAccounts && isLoggedIn) || (isLoggedIn && pathname === '/')
          ? getThemeAccounts(themeMode, themeToggler)
          : getTheme(themeMode, themeToggler)
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
