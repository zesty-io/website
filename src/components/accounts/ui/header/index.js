import React from 'react';
import { Stack, Typography } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const Index = ({ title, description, children }) => {
  return (
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
        <Typography variant="body2" color={'black'}>
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
};
export const AccountsHeader = React.memo(Index);
