import { useState, useEffect } from 'react';
import {
  Box,
  Stack,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from '@mui/material';
import { Search, AddRounded } from '@mui/icons-material';

import { NoRules } from './NoRules';
import { useZestyStore } from 'store';
import useDebounce from 'components/hooks/useDebounce';
import { GranularRole } from 'store/types';
import { ErrorMsg } from 'components/accounts/ui';

// const DUMMY_PERMISSIONS = [
//   {
//     ZUID: '32-c8c8b9fdfd-nq5nbl',
//     resourceZUID: '6-a1a600-k0b6f0',
//     name: 'Homepage model access',
//     create: true,
//     read: true,
//     update: true,
//     delete: false,
//     publish: false,
//     grant: false,
//     createdAt: '2024-10-09T04:34:59Z',
//     updatedAt: '2024-10-09T04:34:59Z',
//   },
//   {
//     ZUID: '32-c8c8b9fdfd-nq5nbl',
//     resourceZUID: '7-a1be38-1b42ht',
//     name: 'Homepage access',
//     create: true,
//     read: true,
//     update: true,
//     delete: false,
//     publish: false,
//     grant: false,
//     createdAt: '2024-10-09T04:16:36Z',
//     updatedAt: '2024-10-09T04:16:36Z',
//   },
//   {
//     ZUID: '32-c8c8b9fdfd-nq5nbl',
//     resourceZUID: '7-dcfacfcbe0-k13jqt',
//     name: 'Some random content item',
//     create: true,
//     read: true,
//     update: true,
//     delete: false,
//     publish: false,
//     grant: false,
//     createdAt: '2024-10-09T04:45:37Z',
//     updatedAt: '2024-10-09T04:45:37Z',
//   },
// ];

type PermissionsProps = {
  ZUID: string;
};
export const Permissions = ({ ZUID }: PermissionsProps) => {
  const { ZestyAPI } = useZestyStore((state: any) => state);
  const [filterKeyword, setFilterKeyword] = useState<string>('');
  const [permissions, setPermissions] = useState<GranularRole[]>([]);

  useEffect(() => {
    if (!ZUID) return;

    getPermissions(ZUID);
  }, [ZUID]);

  const debouncedFilterKeyword = useDebounce(
    filterKeyword,
    () => {
      getContentItems(debouncedFilterKeyword);
    },
    500,
  );

  // TODO: Move this to zustand
  const getContentItems = async (filterKeyword: string) => {
    const res = await ZestyAPI.searchItems(
      !!filterKeyword ? { q: filterKeyword } : {},
    );

    console.log(res);
  };

  const getPermissions = async (ZUID: string) => {
    const res = await ZestyAPI.getAllGranularRoles(ZUID);

    if (res.error) {
      ErrorMsg({ text: res.error });
      setPermissions([]);
    } else {
      console.log(res.data);
    }
  };

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" mb={2}>
        <Box>
          <Typography variant="h5" fontWeight={700}>
            Resource Permissions
          </Typography>
          <Typography variant="body3" fontWeight={600} color="text.secondary">
            Grant users access only to resources you specify
          </Typography>
        </Box>
        <Box>
          <TextField
            value={filterKeyword}
            onChange={(evt) => setFilterKeyword(evt.target.value)}
            size="small"
            placeholder="Filter Resources"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
          <Button variant="outlined" startIcon={<AddRounded />} sx={{ ml: 1 }}>
            Add Rule
          </Button>
        </Box>
      </Stack>
      {permissions?.length ? (
        <Typography>permissions table</Typography>
      ) : (
        <NoRules onAddRulesClick={() => console.log('Open add rules')} />
      )}
    </Box>
  );
};
