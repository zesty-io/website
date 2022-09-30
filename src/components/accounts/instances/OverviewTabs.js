import * as React from 'react';
import Box from '@mui/material/Box';
import {
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import dayjs from 'dayjs';
import InfoIcon from '@mui/icons-material/Info';
import CachedIcon from '@mui/icons-material/Cached';
import { grey } from '@mui/material/colors';

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
        <Typography variant="text.body2">{label}</Typography>
        <Box
          onClick={handleClick}
          sx={{
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
    <Stack sx={{ width: 1 }} spacing={0.5}>
      <Stack direction={'row'} textAlign="center" spacing={0.5}>
        <Typography variant="text.body2">{label}</Typography>
        <Box sx={{ color: 'GrayText' }}>
          <InfoIcon fontSize="small" color="inherit" />
        </Box>
      </Stack>
      <TextField
        sx={{
          background: '#fff',
        }}
        value={value}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClick}
                edge="end"
              >
                {text === value ? (
                  <CheckCircleOutlineIcon color="inherit" />
                ) : (
                  <ContentCopyIcon color="inherit" />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
      ></TextField>
    </Stack>
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

export const OverviewTabs = ({ instance, handleClearCache }) => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        pt: 4,
        background: '#F2F4F7',
        width: '100%',
        height: '100%',
      }}
    >
      <FieldComponent
        // copyToClipboard={copyToClipboard}
        // settext={settext}
        // text={text}
        label={'Instance ZUID'}
        value={instance.ZUID}
      />
      <FieldComponent
        // copyToClipboard={copyToClipboard}
        // settext={settext}
        // text={text}
        label={'Numeric ID'}
        value={instance.ID}
      />
      <FieldComponent
        // copyToClipboard={copyToClipboard}
        // settext={settext}
        // text={text}
        label={'Hash ID'}
        value={instance.randomHashID}
      />
      <Button
        variant="contained"
        fullWidth
        color="grey"
        sx={{ border: `1px solid ${grey[400]}` }}
        onClick={handleClearCache}
      >
        <CachedIcon sx={{ color: 'GrayText' }} />
        <Typography ml={0.5}>Clear Cache</Typography>
      </Button>
    </Container>
  );
};
