import React from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
// import { grey } from '@mui/material/colors';

const Index = ({ title, description, children }) => {
  return (
    <Grid
      item
      xs={12}
      px={4}
      py={3}
      // sx={{ borderBottom: `1px solid ${grey[200]}` }}
    >
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Stack direction="column" justifyContent="space-between">
          <Stack direction="row" alignItems="center" mb={1} spacing={1}>
            <Typography variant="h4">{title}</Typography>
            <HelpOutlineIcon color="disabled" />
          </Stack>
          <Stack>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </Stack>
        </Stack>
        <Stack
          ml={{ xs: 'none', md: 'auto' }}
          mt={{ xs: 1, md: 0 }}
          alignItems="center"
          direction="row"
          spacing={{ xs: 0, md: 1 }}
          flexWrap={{ xs: 'wrap', lg: 'nowrap' }}
        >
          {children}
        </Stack>
      </Stack>
    </Grid>
  );
};
export const AccountsHeader = React.memo(Index);

{
  /* <Stack>
        <Stack
          // direction={{ xs: 'column', md: 'row' }}
          direction="row"
          justifyContent="space-between"
          width={1}
        >
          <Stack direction="row" alignItems="center" mb={1} spacing={1}>
            <Typography variant="h4">{title}</Typography>
            <HelpOutlineIcon color="disabled" />
          </Stack>
          <Stack>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={2}>
          {children}
        </Stack>
      </Stack> */
}
