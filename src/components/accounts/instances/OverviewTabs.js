import * as React from 'react';
import Box from '@mui/material/Box';
import {
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
        <Typography>{label}</Typography>
        <Box sx={{ color: 'GrayText' }}>
          <InfoIcon fontSize="small" color="inherit" />
        </Box>
      </Stack>
      <TextField
        sx={(theme) => ({
          bgcolor: theme.palette.mode === 'light' ? 'white' : 'transparent',
        })}
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
      sx={(theme) => ({
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        pt: 4,
        width: '100%',
        height: '100%',
        [theme.breakpoints.up('lg')]: {
          bgcolor: 'background.level2',
        },
      })}
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
    </Container>
  );
};
