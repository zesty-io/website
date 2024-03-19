/**
 * MUI Imports
 */
import { Box, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
/**
 * Components Imports
 */

/**
 * React Imports
 */
import { useContext, memo } from 'react';
import { LearningHubVideosContext } from './context/LearningHubVideosContext';
import VideoCard from './FeaturedCard';

const MainVideos = () => {
  const { entities, searchKey } = useContext(LearningHubVideosContext);

  const theme = useTheme();
  const isExtraSmall = useMediaQuery(theme.breakpoints.between('xs', 600));

  return (
    <>
      <Box
        sx={{
          pt: 10,
          px: 4,
          py: 4,
        }}
        component="section"
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: 1600,
            margin: 'auto',
            px: 0,
          }}
        >
          <Typography
            variant="h6"
            component="p"
            sx={{
              color: theme.palette.zesty.zestyLightText,
              mb: 2,
              textAlign: isExtraSmall ? 'center' : 'text-left',
            }}
          >
            {searchKey !== '' ? 'Results' : 'All Videos'}
          </Typography>
          <Grid container spacing={2}>
            {entities?.map((item, idx) => {
              return (
                <Grid key={idx} item xs={12} md={6} lg={4}>
                  <Box sx={{ textDecoration: 'none' }}>
                    <VideoCard {...item} />
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

export default memo(MainVideos);
