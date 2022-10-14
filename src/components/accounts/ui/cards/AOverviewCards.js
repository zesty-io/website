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
        minWidth: 275,
        padding: '16px',
        border: `1px solid ${grey[200]}`,
        borderRadius: '8px',
        boxShadow: 0,
      }}
    >
      <CardContent
        sx={{
          gap: '8px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Stack direction={'row'} justifyContent={'space-between'}>
          {!loading ? (
            <Typography color="text.secondary" variant="h6" gutterBottom>
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
        <Typography variant="h2" color={'text.primary'} noWrap>
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
