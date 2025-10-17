/**
 * MUI Imports
 */
import { Box, Card, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useEffect } from 'react';

const WistiaChannelCard = ({
  title,
  wistia_channel_id,
  published_date,
  video_length,
}) => {
  const theme = useTheme();

  const formatDate = (date) => {
    date = new Date(date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://fast.wistia.com/assets/external/channel.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Box sx={{ textDecoration: 'none' }}>
      <Card
        sx={{
          '&:hover': {
            border: `1px solid ${theme.palette.zesty.zestyOrange}`,
          },
          margin: 'auto',
          width: '100%',
          minHeight: 280,
          background: '#000',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border:
            theme.palette.mode === 'light' &&
            `1px solid ${theme.palette.common.grey}`,
        }}
      >
        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '56.25%',
            height: '100%',
            width: '100%',
          }}
        >
          <Box
            className={`wistia_channel wistia_async_${wistia_channel_id} mode=popover`}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          />
        </Box>
      </Card>

      <Typography component="h4" variant="body1" sx={{ fontWeight: 'bold' }}>
        {title}
      </Typography>
      {video_length && (
        <Typography component="p" variant="subtitle2">
          {video_length}
        </Typography>
      )}
      <Typography component="p" variant="subtitle2">
        {formatDate(published_date)}
      </Typography>
    </Box>
  );
};

export default WistiaChannelCard;
