import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { grey } from '@mui/material/colors';
import { Button, Grid, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import dayjs from 'dayjs';
import Image from 'next/image';

const tabList = [
  { label: 'Overview', value: 'overview' },
  { label: 'Status', value: 'status' },
];
const FieldComponent = ({
  label = '',
  value = '',
  copyToClipboard = () => {},
  copy = true,
}) => {
  if (!copy) {
    return (
      <Box sx={{ width: '15rem' }}>
        <Typography variant="h6">{label}</Typography>
        <Box
          onClick={() => copyToClipboard(value)}
          sx={{
            padding: '.8rem 1rem',
            cursor: 'pointer',
            borderRadius: '5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {value}
        </Box>
      </Box>
    );
  }
  return (
    <Box sx={{ width: '18rem' }}>
      <Typography variant="h6">{label}</Typography>
      <Box
        onClick={() => copyToClipboard(value)}
        sx={{
          background: grey[300],
          padding: '.8rem 1rem',
          cursor: 'pointer',
          borderRadius: '5px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {value}
        <Button variant="text">
          <ContentCopyIcon color="secondary" />
        </Button>
      </Box>
    </Box>
  );
};

const BlueprintContent = ({ blueprint }) => {
  return (
    <Box
      sx={{
        border: `1px solid ${grey[300]}`,
        borderRadius: '5px',
      }}
      padding={4}
    >
      <Box display={'flex'} justifyContent={'space-between'}>
        <Typography variant="h4">Blueprint</Typography>
        <Button variant="contained" color="secondary">
          Change Blueprint
        </Button>
      </Box>
      <Box display={'block'} justifyContent="center" justifyItems={'center'}>
        <Image
          src={blueprint.coverImage}
          alt={''}
          layout="responsive"
          height={200}
          width={600}
        />
      </Box>
      <Box>
        <Typography variant="h6">{blueprint.name}</Typography>
        <Typography variant="p">{blueprint.description}</Typography>
      </Box>
    </Box>
  );
};
const OverviewContent = ({ instance, blueprint }) => {
  const copyToClipboard = (data) => {
    navigator?.clipboard?.writeText(data);
  };
  return (
    <Box>
      <Grid container spacing={4} mb={4}>
        <Grid item xs={6}>
          <FieldComponent
            copyToClipboard={copyToClipboard}
            label={'Instance Zuid'}
            value={instance.ZUID}
          />
        </Grid>
        <Grid item xs={6}>
          <FieldComponent
            copyToClipboard={() => {}}
            label={'Created Date'}
            copy={false}
            value={dayjs(instance.createdAt).format('MMMM D, YYYY')}
          />
        </Grid>
        <Grid item xs={6}>
          <FieldComponent
            copyToClipboard={copyToClipboard}
            label={'Numeric Id'}
            value={instance.ID}
          />
        </Grid>
        <Grid item xs={6}>
          <FieldComponent
            copyToClipboard={copyToClipboard}
            label={'Hash Id'}
            value={instance.randomHashID}
          />
        </Grid>
      </Grid>

      <BlueprintContent blueprint={blueprint} />
    </Box>
  );
};

const StatusContent = () => {
  const url = 'https://status.zesty.io/';
  function openInNewTab(url) {
    window.open(url, '_blank')?.focus();
  }
  React.useEffect(() => {
    openInNewTab(url);
  }, []);

  return <a href={url}>Status of Zesty.io</a>;
};

export const OverviewTabs = ({ instance, blueprint }) => {
  const [value, setValue] = React.useState('overview');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const panelStyle = {
    border: `1px solid ${grey[300]}`,
    borderRadius: '5px',
    marginTop: '2rem',
    marginBottom: '2rem',
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
        <TabPanel value="overview" sx={panelStyle} tabIndex={0}>
          <OverviewContent instance={instance} blueprint={blueprint} />
        </TabPanel>
        <TabPanel value="status" sx={panelStyle}>
          <StatusContent />
        </TabPanel>
      </TabContext>
    </Box>
  );
};
