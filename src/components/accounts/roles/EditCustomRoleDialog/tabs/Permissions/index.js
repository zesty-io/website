import { useState } from 'react';
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

export const Permissions = () => {
  const [filterKeyword, setFilterKeyword] = useState('');

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
      <NoRules onAddRulesClick={() => console.log('Open add rules')} />
    </Box>
  );
};
