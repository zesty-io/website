import { Stack, Tab, Tabs } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

export const DocsTabs = React.memo(
  ({ setvalue = () => {}, value, tabs = [] }) => {
    const handleChange = (_, newValue) => {
      console.log(newValue);
      // setvalue(newValue);
    };

    const router = useRouter();
    const currentURL = router.asPath;

    const isTourTabVisible = currentURL.includes('/docs/parsley');
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
          {/* {tabs.map((e, i) => {
            return (
              <Tab key={i} color="secondary" label={e.label} value={e.value} />
            );
          })} */}
        </Tabs>
      </Stack>
    );
  },
);
