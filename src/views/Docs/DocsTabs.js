import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Tab,
  Tabs,
} from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const fallbackOptions = [{ label: 'no data', value: 'no data' }];

export default function BasicSelect({
  options = fallbackOptions,
  setValue = () => {},
}) {
  const [localValue, setlocalValue] = useState('');
  const handleChange = (event) => {
    setlocalValue(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={localValue}
          label="Age"
          onChange={handleChange}
        >
          {options.map((e) => {
            return (
              <MenuItem
                value={e.value}
                onClick={() => {
                  setValue(e.data);
                  console.log(e, 5555555555);
                }}
              >
                {e.label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}

export const DocsTabs = React.memo(
  ({
    data = {},
    setvalue = () => {},
    value,
    tabs = [],
    setDropdownResponse,
  }) => {
    const handleChange = (_, newValue) => {
      setvalue(newValue);
    };

    const router = useRouter();
    const currentURL = router.asPath;

    const isTourTabVisible = currentURL.includes('/docs/parsley');
    const options = data.response.map((e) => {
      return { label: e.name, value: e.name, data: e };
    });
    return (
      <Stack
        sx={{
          direction: 'row',
          width: '100%',
          marginBottom: 0,
          bgcolor: '',
          display: 'flex',
        }}
      >
        <Stack>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="Tabs"
            indicatorColor="secondary"
            textColor="secondary"
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '.MuiTabs-scrollButtons.Mui-disabled': {
                opacity: 0.3,
              },
              mb: -0.5,
            }}
          >
            {tabs.map(
              (e, i) =>
                // Only render the 'Tour' tab if isTourTabVisible is true
                (e.label !== 'Tour' || isTourTabVisible) && (
                  <Tab
                    key={i}
                    color="secondary"
                    label={e.label}
                    value={e.value}
                  />
                ),
            )}
            <Stack bgcolor={'#fff'}>
              <BasicSelect setValue={setDropdownResponse} options={options} />
            </Stack>
          </Tabs>
        </Stack>
      </Stack>
    );
  },
);
