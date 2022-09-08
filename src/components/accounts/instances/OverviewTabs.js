import * as React from 'react';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
import { Button, Grid, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import dayjs from 'dayjs';

const FieldComponent = ({
  label = '',
  value = '',
  copyToClipboard = () => {},
  copy = true,
  settext = () => {},
  text = '',
}) => {
  const handleClick = () => {
    copyToClipboard(value);
    settext(value);
  };
  if (!copy) {
    return (
      <Box sx={{ width: '15rem' }}>
        <Typography variant="h6">{label}</Typography>
        <Box
          onClick={handleClick}
          sx={{
            padding: '.8rem 1rem',
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
        onClick={handleClick}
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
        <Button variant="text" color="secondary">
          {text === value ? (
            <CheckCircleOutlineIcon color="secondary" />
          ) : (
            <ContentCopyIcon color="secondary" />
          )}
        </Button>
      </Box>
    </Box>
  );
};

const OverviewContent = ({ instance }) => {
  const [text, settext] = React.useState('');
  const copyToClipboard = (data) => {
    navigator?.clipboard?.writeText(data);
  };
  return (
    <Box>
      <Grid container spacing={4} mb={4}>
        <Grid item xs={6}>
          <FieldComponent
            copyToClipboard={copyToClipboard}
            settext={settext}
            text={text}
            label={'Instance Zuid'}
            value={instance.ZUID}
          />
        </Grid>
        <Grid item xs={6}>
          <FieldComponent
            settext={settext}
            text={text}
            copyToClipboard={() => {}}
            label={'Created Date'}
            copy={false}
            value={dayjs(instance.createdAt).format('MMMM D, YYYY')}
          />
        </Grid>
        <Grid item xs={6}>
          <FieldComponent
            settext={settext}
            text={text}
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
            settext={settext}
            text={text}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export const OverviewTabs = ({ instance }) => {
  return (
    <Box
      sx={{
        width: '100%',
        typography: 'body1',
      }}
    >
      <OverviewContent instance={instance} />
    </Box>
  );
};
