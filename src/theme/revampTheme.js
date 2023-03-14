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
        lg2: 1280,
      },
    },
    themeToggler,
  });
};

export default revampTheme;
