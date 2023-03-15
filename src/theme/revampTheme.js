import { createTheme } from '@mui/material/styles';
import { theme } from '@zesty-io/material';

const revampTheme = (mode, themeToggler) => {
  return createTheme({
    ...theme,
    palette: mode === 'light' ? theme.palette : '',
    breakpoints: {
      values: {
        ...theme.breakpoints.values,
        sm2: 768,
        lg2: 1440,
      },
    },
    components: {
      MuiButton: {
        variants: [
          {
            props: { size: 'extraLarge' },
            style: { padding: '11px 22px' },
          },
        ],
      },
    },
    themeToggler,
  });
};

export default revampTheme;
