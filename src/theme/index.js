import { responsiveFontSizes } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import shadows from './shadows';
import { light, dark } from './palette';
import {
  light as lightAccounts,
  dark as darkAccounts,
} from './paletteAccounts';
import { theme } from '@zesty-io/material';

const getTheme = (mode, themeToggler) =>
  responsiveFontSizes(
    createTheme({
      ...theme,
      palette: mode === 'light' ? light : dark,
      shadows: shadows(mode),
      typography: {
        fontFamily: '"Mulish", sans-serif',
        button: {
          textTransform: 'none',
          fontWeight: 'medium',
        },
      },
      zIndex: {
        appBar: 1000,
        drawer: 1300,
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
          xl2: 2500,
        },
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              fontWeight: 600,
              borderRadius: 5,
              paddingTop: 10,
              paddingBottom: 10,
            },
            containedSecondary: mode === 'light' ? { color: 'white' } : {},
          },
        },
        MuiInputBase: {
          styleOverrides: {
            root: {
              borderRadius: 5,
            },
          },
        },
        MuiOutlinedInput: {
          styleOverrides: {
            root: {
              borderRadius: 5,
            },
            input: {
              borderRadius: 5,
            },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 8,
            },
          },
        },
      },
      themeToggler,
    }),
  );

export const getThemeAccounts = (mode, themeToggler) =>
  responsiveFontSizes(
    createTheme({
      ...theme,
      palette: mode === 'light' ? lightAccounts : darkAccounts,
      shadows: shadows(mode),
      typography: {
        fontFamily: '"Mulish", sans-serif',
        button: {
          textTransform: 'none',
          fontWeight: 'medium',
        },
      },
      zIndex: {
        appBar: 1000,
        drawer: 1300,
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
          xl2: 2500,
        },
      },
      themeToggler,
    }),
  );

export default getTheme;
