/**
 * MUI Imports
 */
import { Box, Typography, Grid } from '@mui/material';
import Container from 'blocks/container/Container';
import ReactPlayer from 'react-player';

const VideosCard = ({
  theme,
  isMedium,
  isDarkMode,
  content,
  FillerContent,
}) => {
  const data = [
    {
      video: content.youtube_video_1 || '',
    },
    {
      video: content.youtube_video_2 || '',
    },
    {
      video: content.youtube_video_3 || '',
    },
  ];
  return (
    <Container sx={{ my: 10 }}>
      <Typography
        component="h2"
        variant="h4"
        sx={{ fontWeight: 'bold', mb: 2 }}
      >
        {content.section_header_3 || FillerContent.header}
      </Typography>
      <Grid container spacing={2}>
        {data.map((item) => (
          <Grid
            sx={{
              textDecoration: 'none',
            }}
            item
            xs={12}
            sm={6}
          >
            <Box
              sx={{
                mt: 10,
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                iframe: {
                  borderRadius: 5,
                },
              }}
            >
              <ReactPlayer
                width={1084}
                height={isMedium ? 450 : 537}
                url={item.video}
                muted={false}
                playing={false}
                loop={true}
                controls={true}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default VideosCard;
