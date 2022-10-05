import { useState } from 'react';
import Box from '@mui/material/Box';
import {
  Container,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import InfoIcon from '@mui/icons-material/Info';
import { grey } from '@mui/material/colors';

const FieldComponent = ({ label = '', value = '', copy = true }) => {
  const [isCopied, setIsCopied] = useState(false);
  const copyToClipboard = (text) => {
    navigator?.clipboard?.writeText(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 300);
  };

  if (!copy) {
    return (
      <Box sx={{ width: '15rem' }}>
        <Typography variant="text.body2">{label}</Typography>
        <Box
          onClick={() => copyToClipboard(value)}
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
          '& fieldset': {
            border: `1px solid ${grey[200]}`,
            borderRadius: '8px',
          },
        })}
        value={value}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => {
                  copyToClipboard(value);
                }}
                edge="end"
              >
                {isCopied ? (
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

export const OverviewTabs = ({ instance }) => {
  return (
    <Container
      sx={(theme) => ({
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        py: 4,
        width: '100%',
        height: '100%',
        [theme.breakpoints.up('lg')]: {
          bgcolor: theme.palette.grey[50],
        },
      })}
    >
      <FieldComponent label="Instance ZUID" value={instance.ZUID} />
      <FieldComponent label="Numeric ID" value={instance.ID} />
      <FieldComponent label="Hash ID" value={instance.randomHashID} />
    </Container>
  );
};
