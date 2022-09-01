import React from 'react';
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { OverviewTabs } from 'components/accounts';

export const Overview = ({ instance, userInfo, blueprint }) => {
  return (
    <>
      <TextField
        label="Search"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <SearchOutlinedIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
        fullWidth
        color="secondary"
        onChange={(e) => console.log(e.target.value)}
      />
      <Box paddingY={2}>
        <Typography variant="h4">Welcome {userInfo?.firstName}</Typography>
        <Typography variant="h6">Catch up on the latest Zesty news</Typography>
      </Box>
      <Box position={'relative'}>
        <Button
          variant="contained"
          href="https://accounts.zesty.io/instances/create"
          sx={{
            position: 'absolute',
            right: 0,
            top: 0,
            zIndex: '1000',
          }}
        >
          Create Instance
        </Button>
        <OverviewTabs instance={instance} blueprint={blueprint} />
      </Box>
    </>
  );
};
