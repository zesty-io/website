import Card from '@mui/material/Card';
import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Stack } from '@mui/material';
import { grey } from '@mui/material/colors';

export const AOverviewCards = ({
  title,
  logo,
  mainData,
  footerTitle,
  chip,
}) => {
  return (
    <Card
      sx={{
        p: 1,
        minWidth: 275,
        border: `1px solid ${grey[100]}`,
        borderRadius: '8px',
      }}
    >
      <CardContent>
        <Stack direction={'row'} justifyContent={'space-between'}>
          <Typography
            sx={{ fontSize: 14 }}
            color="text.secondary"
            variant="h6"
            gutterBottom
          >
            {title}
          </Typography>
          <Box>{logo}</Box>
        </Stack>
        <Typography variant="h2" component="div" py={2}>
          {mainData}
        </Typography>
        <Stack
          direction={'row'}
          spacing={1}
          alignItems={'center'}
          textAlign="center"
        >
          {chip}
          <Typography variant="body3" sx={{}} color="">
            {footerTitle}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};
