import {
  Box,
  FormControl,
  MenuItem,
  Select,
  Stack,
  Tab,
  Tabs,
} from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const fallbackOptions = [{ label: 'no data', value: 'no data' }];

export default function BasicSelect({
  options = fallbackOptions,
  setValue = () => {},
}) {
  const [localValue, setlocalValue] = useState(options[0]?.label);
  const handleChange = (event) => {
    setlocalValue(event.target.value);
  };

  const selectStyles = {
    background: 'transparent !important',
    color: 'white',
    width: '100%',
  };
  useEffect(() => {
    if (!localValue) {
      setlocalValue(options[0]?.label);
    }
  }, [options, localValue]);

  return (
    <Box sx={{ width: 200, alignItems: 'center', mr: 2 }}>
      <FormControl fullWidth>
        <Select
          color="secondary"
          size="small"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={localValue}
          onChange={handleChange}
          style={selectStyles}
          variant="outlined"
        >
          {options.map((e) => {
            return (
              <MenuItem
                value={e.value}
                onClick={() => {
                  setValue(e.data);
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
  ({ setvalue = () => {}, value, tabs = [], setDropdownResponse, options }) => {
    const handleChange = (_, newValue) => {
      setvalue(newValue);
    };

    const router = useRouter();
    const currentURL = router.asPath;

    const isTourTabVisible = currentURL.includes('/docs/parsley');
    return (
      <Stack
        sx={{
          direction: 'row',
          width: '100%',
          marginBottom: 0,
          bgcolor: '',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
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
          </Tabs>
        </Stack>

        {options?.length > 0 && (
          <Stack>
            <BasicSelect setValue={setDropdownResponse} options={options} />
          </Stack>
        )}
      </Stack>
    );
  },
);
