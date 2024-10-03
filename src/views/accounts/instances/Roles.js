import {
  Button,
  TextField,
  Stack,
  InputAdornment,
  ThemeProvider,
  CircularProgress,
  Typography,
} from '@mui/material';
import { Search, AddRounded } from '@mui/icons-material';

import { useRoles } from 'store/roles';
import { AccountsHeader } from 'components/accounts';
import { NoPermission } from 'components/globals/NoPermission';
import { theme } from '@zesty-io/material';

export const Roles = ({ isLoading, hasPermission }) => {
  const { usersWithRoles } = useRoles((state) => state);

  if (isLoading) {
    return (
      <ThemeProvider theme={theme}>
        <Stack height="100%">
          <AccountsHeader
            title="Roles & Permissions"
            description="Manage your roles and their permissions"
            info="Lorem ipsum sit dolor"
          ></AccountsHeader>
          <Stack
            ml={1}
            mr={3}
            bgcolor="grey.50"
            flex={1}
            borderRadius={2}
            alignItems="center"
            justifyContent="center"
          >
            <CircularProgress />
          </Stack>
        </Stack>
      </ThemeProvider>
    );
  }

  if (!hasPermission) {
    return (
      <ThemeProvider theme={theme}>
        <Stack height="100%">
          <AccountsHeader
            title="Roles & Permissions"
            description="Manage your roles and their permissions"
            info="Lorem ipsum sit dolor"
          ></AccountsHeader>
          <Stack
            ml={1}
            mr={3}
            bgcolor="grey.50"
            flex={1}
            borderRadius={2}
            alignItems="center"
            justifyContent="center"
          >
            <NoPermission users={usersWithRoles} />
          </Stack>
        </Stack>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Stack height="100%">
        <AccountsHeader
          title="Roles & Permissions"
          description="Manage your roles and their permissions"
          info="Lorem ipsum sit dolor"
        >
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
        </AccountsHeader>
        <Stack
          ml={1}
          mr={3}
          bgcolor="grey.50"
          flex={1}
          borderRadius={2}
          alignItems="center"
          justifyContent="center"
        >
          <Typography>Roles page</Typography>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
};
