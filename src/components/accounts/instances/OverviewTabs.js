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
import { gravatarImg } from 'utils';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import dayjs from 'dayjs';
import Skeleton from '@mui/material/Skeleton';

const FieldComponent = ({ label = '', value = '', copy = true, loading }) => {
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
      {!loading ? (
        <Stack direction={'row'} textAlign="center" spacing={0.5}>
          <Typography variant="body2" mr={0.5}>
            {label}
          </Typography>
          <InfoIcon fontSize="small" color="disabled" />
        </Stack>
      ) : (
        <Skeleton variant="text" sx={{ fontSize: '14px' }} width={120} />
      )}
      {!loading ? (
        <TextField
          disabled
          sx={(theme) => ({
            borderRadius: '8px',
            bgcolor: theme.palette.mode === 'light' ? 'white' : 'transparent',
            '& .MuiInputBase-input.Mui-disabled': {
              WebkitTextFillColor:
                theme.palette.mode === 'light' ? 'black' : 'white',
            },
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
      ) : (
        <Skeleton variant="rectangular" height={45} />
      )}
    </Stack>
  );
};

const DetailsComp = ({ header, img, title, subtitle, loading }) => {
  return (
    <Stack spacing={1}>
      <Typography variant="body2" color="text.primary">
        {!loading ? (
          header
        ) : (
          <Skeleton variant="text" sx={{ fontSize: '14px' }} width={70} />
        )}
      </Typography>
      <Stack direction={'row'} gap={2} alignItems="center">
        {!loading ? (
          img
        ) : (
          <Skeleton variant="circular" width={40} height={40} />
        )}
        <Stack>
          <Typography variant="body2" color="text.primary">
            {!loading ? (
              title
            ) : (
              <Skeleton variant="text" sx={{ fontSize: '14px' }} width={120} />
            )}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {!loading ? (
              subtitle
            ) : (
              <Skeleton variant="text" sx={{ fontSize: '14px' }} width={70} />
            )}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export const OverviewTabs = ({
  instance,
  instanceUserWithRoles = [],
  loading,
}) => {
  const websiteCreator = instanceUserWithRoles?.find(
    (e) => e?.ZUID === instance?.createdByUserZUID,
  );
  const name = `${websiteCreator?.firstName || '-'} ${
    websiteCreator?.lastName || ''
  }`;
  const role = websiteCreator?.role?.name;

  const userImg = (
    <img
      height={40}
      width={40}
      src={gravatarImg(websiteCreator)}
      alt="Zesty User"
      style={{ borderRadius: '50%' }}
    />
  );
  const details1Props = {
    header: 'Created By',
    img: userImg,
    title: name,
    subtitle: role,
    loading,
  };

  const details2Props = {
    header: 'Created On',
    img: <CalendarTodayIcon color="disabled" sx={{ mx: 1 }} />,
    title: dayjs(instance?.createdAt).format('MMM DD, YYYY'),
    subtitle: dayjs(instance?.createdAt).format('ddd, h:mm A UTC ZZ'),
    loading,
  };
  return (
    <Container
      sx={(theme) => ({
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        py: 1,
        width: '100%',
        height: '100%',
        [theme.breakpoints.up('lg')]: {
          bgcolor:
            theme.palette.mode === 'light'
              ? theme.palette.grey[50]
              : 'transparent',
        },
      })}
    >
      <FieldComponent
        loading={loading}
        label="Instance ZUID"
        value={instance.ZUID}
      />
      <FieldComponent
        loading={loading}
        label="Numeric ID"
        value={instance.ID}
      />
      <FieldComponent
        loading={loading}
        label="Hash ID"
        value={instance.randomHashID}
      />

      <DetailsComp {...details1Props} />
      <DetailsComp {...details2Props} />
    </Container>
  );
};
