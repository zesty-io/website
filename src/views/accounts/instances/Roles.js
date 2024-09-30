// import { memo } from 'react';
import {
  // useTheme,
  Box,
  Typography,
  Button,
  TextField,
  Stack,
  InputAdornment,
} from '@mui/material';
import { Search, AddRounded } from '@mui/icons-material';
import { AccountsHeader } from 'components/accounts';

export const Roles = ({ hasPermission }) => {
  // const theme = useTheme();

  return (
    <Box>
      <AccountsHeader
        title="Roles & Permissions"
        description="Manage your roles and their permissions"
        info="Lorem ipsum sit dolor"
      >
        {hasPermission && (
          <Stack gap={2} direction="row">
            <TextField
              size="small"
              placeholder="Search Roles"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search color="disabled" />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              size="small"
              color="primary"
              variant="contained"
              startIcon={<AddRounded />}
            >
              Create Custom Role
            </Button>
          </Stack>
        )}
      </AccountsHeader>
      <Typography>Roles page</Typography>
    </Box>
  );
};

// export const Roles = memo(Index);
