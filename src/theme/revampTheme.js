import { alpha, createTheme } from '@mui/material/styles';
import { theme } from '@zesty-io/material';

const revampTheme = (mode) => {
  return createTheme({
    ...theme,
    palette:
      mode === 'light'
        ? theme.palette
        : {
            ...theme.palette,
            mode: 'dark',
            text: {
              ...theme.palette.text,
              primary: '#fff',
              secondary: '#fff',
            },
            background: {
              smokeWhite: '#FDFDFD',
              smokeWhiteLevel2: '#DFDFDF',
            },
          },
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
                color:
                  mode === 'dark' ? 'primary' : theme.palette.action.active,
              },
              '&:hover': {
                backgroundColor: theme.palette.grey[100],
                color: mode === 'dark' ? 'black' : 'text.secondary',
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
  });
};

export default revampTheme;
