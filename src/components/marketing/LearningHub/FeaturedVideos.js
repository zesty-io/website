/**
 * MUI Imports
 */
import { Box, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
/**
 * Components Imports
 */
import VideoCard from './FeaturedCard';
import WistiaVideoCard from './FeaturedWistiaCard';
import WistiaChannelCard from './FeaturedWistiaChannelCard';

/**
 * React Imports
 */
import { useContext } from 'react';
import { LearningHubVideosContext } from './context/LearningHubVideosContext';

const FeaturedVideos = ({ title, featuredVideos = [] }) => {
  const { searchKey, selectedTags } = useContext(LearningHubVideosContext);

  /************************************************
   * Theme Settings
   */

  const theme = useTheme();
  const isExtraSmall = useMediaQuery(theme.breakpoints.between('xs', 600));

  return (
    <>
      <Box
        hidden={searchKey !== '' || selectedTags !== '' ? true : false}
        sx={{
          px: 4,
        }}
        component="section"
      >
        <Box sx={{ width: '100%', maxWidth: 1600, margin: 'auto' }}>
          <Typography
            variant="h6"
            component="p"
            sx={{
              color: theme.palette.zesty.zestyLightText,
              mb: 2,
              textAlign: isExtraSmall ? 'center' : 'text-left',
            }}
          >
            {title}
          </Typography>
          <Grid container spacing={2}>
            {featuredVideos?.map((item, idx) => {
              return (
                <Grid key={idx} item xs={12} md={6} lg={4}>
                  <Box sx={{ textDecoration: 'none' }}>
                    {item?.youtube_link ? (
                      <VideoCard {...item} />
                    ) : item.wistia_video_id ? (
                      <WistiaVideoCard {...item} />
                    ) : (
                      <WistiaChannelCard {...item} />
                    )}
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default FeaturedVideos;
