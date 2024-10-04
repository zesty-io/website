import {
  Button,
  TextField,
  Stack,
  InputAdornment,
  ThemeProvider,
  CircularProgress,
} from '@mui/material';
import { Search, AddRounded } from '@mui/icons-material';
import { theme } from '@zesty-io/material';

import { useRoles } from 'store/roles';
import { AccountsHeader } from 'components/accounts';
import { NoPermission } from 'components/globals/NoPermission';
import { BaseRoles } from 'components/accounts/roles/BaseRoles';
import { NoCustomRoles } from 'components/accounts/roles/NoCustomRoles';
import { CustomRoles } from 'components/accounts/roles/CustomRoles';

export const Roles = ({ isLoading, hasPermission }) => {
  const { usersWithRoles, customRoles } = useRoles((state) => state);

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
            mx={4}
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
            mx={4}
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
        <Stack gap={2} mx={4}>
          {customRoles?.length ? <CustomRoles /> : <NoCustomRoles />}
          <BaseRoles />
        </Stack>
      </Stack>
    </ThemeProvider>
  );
};
