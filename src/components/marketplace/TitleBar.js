import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import FillerContent from 'components/FillerContent';
import React from 'react';

export const TitleBar = ({ name, description }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box
      sx={{
        display: 'block',
        width: '100%',
        textAlign: 'center',
      }}
      paddingTop={4}
    >
      <Typography
        variant="p"
        component={'h1'}
        sx={{ color: theme.palette.primary.main }}
      >
        {name || FillerContent.name}
      </Typography>
      <Typography
        variant="p"
        component={'h3'}
        sx={{
          color: theme.palette.zesty.zestyLightGrey,
          fontWeight: '400',
        }}
        dangerouslySetInnerHTML={{
          __html: description || FillerContent.description,
        }}
      ></Typography>
    </Box>
  );
};
