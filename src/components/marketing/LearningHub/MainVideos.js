/**
 * MUI Imports
 */
import {
  Box,
  Grid,
  Pagination,
  Stack,
  ThemeProvider,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
/**
 * Components Imports
 */
import VideoCard from './FeaturedCard';
import { LearningHubVideosContext } from './context/LearningHubVideosContext';
/**
 * React Imports
 */
import { useContext, memo, useState, useEffect } from 'react';
import revampTheme from 'theme/revampTheme';

const MainVideos = ({ withPagination = false }) => {
  const { entities, searchKey } = useContext(LearningHubVideosContext);

  const theme = useTheme();
  const isExtraSmall = useMediaQuery(theme.breakpoints.between('xs', 600));
  const scrollTo = (id) => {
    setTimeout(() => {
      const element = document.querySelector(`#${id}`);
      if (!element) {
        return;
      }

      window.scrollTo({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth',
      });
    });
  };

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(9);
  const indexOfLast = currentPage * postPerPage;
  const indexOfFirst = indexOfLast - postPerPage;
  const pageNum = [];
  const videoList = !withPagination
    ? entities
    : entities.slice(indexOfFirst, indexOfLast);
  for (let i = 1; i <= Math.ceil(entities.length / postPerPage); i++) {
    pageNum.push(i);
  }
  const handlePageChange = (_event, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    if (videoList?.length <= postPerPage) setCurrentPage(1);
  }, [entities]);

  return (
    <>
      <Box
        id="scrollTop"
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
            {videoList?.map((item, idx) => {
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

      {withPagination && videoList?.length ? (
        <Stack
          sx={(theme) => ({
            [theme.breakpoints.up('xs')]: {
              py: 3,
              mx: 'auto',
              maxWidth: theme.maxWidth,
              alignItems: 'center',
            },
          })}
        >
          <ThemeProvider theme={() => revampTheme(theme.palette.mode)}>
            <Pagination
              onClick={() => scrollTo('scrollTop')}
              count={pageNum?.length}
              page={currentPage}
              onChange={handlePageChange}
              size={'large'}
              color="primary"
            />
          </ThemeProvider>
        </Stack>
      ) : (
        ''
      )}
    </>
  );
};

export default memo(MainVideos);
