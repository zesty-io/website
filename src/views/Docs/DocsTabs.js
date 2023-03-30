import { Stack, Tab, Tabs } from '@mui/material';
import React from 'react';

export const DocsTabs = React.memo(
  ({ setvalue = () => {}, value, tabs = [] }) => {
    const handleChange = (_, newValue) => {
      setvalue(newValue);
    };

    return (
      <Stack sx={{ width: '100%', marginBottom: 0, bgcolor: '' }}>
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
          {tabs.map((e, i) => {
            return (
              <Tab key={i} color="secondary" label={e.label} value={e.value} />
            );
          })}
        </Tabs>
      </Stack>
    );
  },
);
