import { alpha, createTheme } from '@mui/material/styles';
import { theme } from '@zesty-io/material';

const revampTheme = (mode, themeToggler) => {
  return createTheme({
    ...theme,
    palette: mode === 'light' ? theme.palette : '',
    breakpoints: {
      values: {
        ...theme.breakpoints.values,
        mobile: 375,
        tablet: 768,
        desktopWide: 1440,
      },
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            textTransform: 'none',
          },
        },
        variants: [
          {
            props: { size: 'extraLarge' },
            style: {
              padding: '11px 22px',
              letterSpacing: '.46px',
              fontSize: '15px',
              lineHeight: '26px',
            },
          },
        ],
      },
      MuiTab: {
        styleOverrides: {
          root: {
            color: alpha(theme.palette.grey[900], 0.4),
            '&.MuiButtonBase-root': {
              minHeight: '0 !important',
              padding: '8px',
              fontSize: '14px',
              lineHeight: '20px',
              fontWeight: '400',
              borderRadius: '8px',
              '& svg': {
                color: theme.palette.action.active,
              },
              '&:hover': {
                backgroundColor: theme.palette.grey[100],
              },
              '&.Mui-selected': {
                backgroundColor: theme.palette.deepOrange[50],
                color: theme.palette.primary.main,
                '& svg': {
                  color: theme.palette.primary.main,
                },
              },
            },
          },
        },
      },
    },
    maxWidth: 1440,
    themeToggler,
  });
};

export default revampTheme;
