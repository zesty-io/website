import React from 'react';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export const AccountsThemeToggler = () => {
  const theme = useTheme();
  const { themeToggler } = theme;
  const { mode } = theme.palette;

  return (
    <Button
      variant={'outlined'}
      onClick={() => themeToggler()}
      aria-label="Dark mode toggler"
      color={mode === 'light' ? 'primary' : 'secondary'}
      sx={{
        borderRadius: 1,
        minWidth: 'auto',
        padding: 0.7,
        borderColor: alpha(theme.palette.divider, 0.2),
      }}
    >
      {mode === 'light' ? (
        <DarkModeIcon fontSize="small" color="disabled" />
      ) : (
        <LightModeIcon fontSize="small" />
      )}
    </Button>
  );
};
