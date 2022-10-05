import React from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { grey } from '@mui/material/colors';

const Index = ({ title, description, children }) => {
  return (
    <Grid
      item
      xs={12}
      px={4}
      py={3}
      sx={{ borderBottom: `1px solid ${grey[200]}` }}
    >
      <Stack>
        <Stack direction="row" justifyContent={'space-between'} width={1}>
          <Stack direction="row" alignItems={'center'} gap={0.5}>
            <Typography variant="h4">{title}</Typography>
            <HelpOutlineIcon color="disabled" />
          </Stack>
          <Stack direction={'row'} gap={2}>
            {children}
          </Stack>
        </Stack>
        <Stack pt={2}>
          <Typography variant="body2" color={'text.secondary'}>
            {description}
          </Typography>
        </Stack>
      </Stack>
    </Grid>
  );
};
export const AccountsHeader = React.memo(Index);
