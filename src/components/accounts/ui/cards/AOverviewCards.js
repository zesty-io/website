import Card from '@mui/material/Card';
import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Skeleton, Stack } from '@mui/material';
import { grey } from '@mui/material/colors';

export const AOverviewCards = ({
  title,
  logo,
  mainData,
  footerTitle,
  chip,
  loading,
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
          {!loading ? (
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              variant="h6"
              gutterBottom
            >
              {title}
            </Typography>
          ) : (
            <Skeleton variant="text" height={40} width={190} />
          )}
          <Box>
            {!loading ? (
              logo
            ) : (
              <Skeleton variant="circular" height={40} width={40} />
            )}
          </Box>
        </Stack>
        <Typography variant="h2" component="div" color={'text.primary'} py={2}>
          {!loading ? mainData : <Skeleton variant="rectangular" height={70} />}
        </Typography>
        {!loading ? (
          <Stack
            visibility={'hidden'}
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
        ) : (
          <Skeleton variant="text" height={40} />
        )}
      </CardContent>
    </Card>
  );
};
