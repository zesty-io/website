/**
 * MUI Imports
 */
import { Box, Card, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useEffect } from 'react';

const WistiaVideoCard = ({
  title,
  wistia_video_id,
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
    const script1 = document.createElement('script');
    script1.src = `https://fast.wistia.com/embed/medias/${wistia_video_id}.jsonp`;
    script1.async = true;

    const script2 = document.createElement('script');
    script2.src = 'https://fast.wistia.com/assets/external/E-v1.js';
    script2.async = true;

    document.body.appendChild(script1);
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, [wistia_video_id]);

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
            className={`wistia_embed wistia_async_${wistia_video_id} popover=true videoFoam=true`}
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

export default WistiaVideoCard;
