/**
 * MUI Imports
 */
import { Box, Card, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const VideoCard = ({ title, youtube_link, published_date }) => {
  const theme = useTheme();

  const formatDate = (date) => {
    date = new Date(date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  function convertToNoCookie(url) {
    if (!url) return;
    // Replace "www.youtube.com" with "www.youtube-nocookie.com"
    // Also remove the "/embed/" part
    return url.replace(
      'www.youtube.com/embed/',
      'www.youtube-nocookie.com/embed/',
    );
  }

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
            width: '100%',
            height: '100%',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '56.25%',
          }}
        >
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen="allowfullscreen"
            src={convertToNoCookie(youtube_link)}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: '100%',
              border: 'none',
            }}
          ></iframe>
        </Box>
      </Card>

      <Typography
        mt={1}
        component="h4"
        variant="body1"
        sx={{ fontWeight: 'bold' }}
      >
        {title}
      </Typography>
      <Typography component="p" variant="subtitle2">
        {formatDate(published_date)}
      </Typography>
    </Box>
  );
};

export default VideoCard;
