import React from 'react';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { grey } from '@mui/material/colors';

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
        borderColor: grey[200],
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
