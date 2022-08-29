import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { grey } from '@mui/material/colors';

const tabList = [
  { label: 'News', value: 'news' },
  { label: 'Releases', value: 'releases' },
  { label: 'Updates', value: 'updates' },
  { label: 'Status', value: 'status' },
];
export const OverviewTabs = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const panelStyle = {
    border: `1px solid ${grey[300]}`,
    borderRadius: '5px',
    marginTop: '1rem',
  };
  return (
    <Box
      sx={{
        width: '100%',
        typography: 'body1',
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {tabList.map((e) => {
              return <Tab label={e.label} value={e.value} />;
            })}
          </TabList>
        </Box>
        <TabPanel value="news" sx={panelStyle}>
          News
        </TabPanel>
        <TabPanel value="releases" sx={panelStyle}>
          Releases
        </TabPanel>
        <TabPanel value="updates" sx={panelStyle}>
          Updates
        </TabPanel>
        <TabPanel value="status" sx={panelStyle}>
          Status
        </TabPanel>
      </TabContext>
    </Box>
  );
};
