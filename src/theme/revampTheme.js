import { createTheme } from '@mui/material/styles';

import { theme } from '@zesty-io/material';
const revampTheme = () => {
  return createTheme({
    ...theme,
    breakpoints: {
      values: {
        ...theme.breakpoints.values,
        sm2: 786,
        lg2: 1280,
      },
    },
  });
};

export default revampTheme;
