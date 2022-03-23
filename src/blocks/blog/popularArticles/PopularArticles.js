import React, { useState } from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Pagination from '@mui/material/Pagination';

import FillerContent from 'components/FillerContent';

const PopularArticles = ({ articles = [], title, description, ctaBtn }) => {

  const theme = useTheme();

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 100,
    });

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
  const [postPerPage, _setPostPerPage] = useState(5);
  const indexOfLast = currentPage * postPerPage;
  const indexOfFirst = indexOfLast - postPerPage;
  const pageNum = [];
  const articlesList = articles.slice(indexOfFirst, indexOfLast);
  for (let i = 1; i <= Math.ceil(articles.length / postPerPage); i++) {
    pageNum.push(i);
  }
  const handlePageChange = (_event, value) => {
    setCurrentPage(value);
  };


  return (
    <Box>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
        marginBottom={4}
      >
        <Box id="scrollTop">
          <Typography fontWeight={700} variant={'h6'} gutterBottom>
            {title}
          </Typography>
          <Typography color={'text.secondary'}>{description}</Typography>
        </Box>
        <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
          {ctaBtn && (
            <Box
              component={Button}
              variant="outlined"
              size="large"
              marginLeft={2}
              color={theme.palette.zesty.zestyOrange}
              borderColor={theme.palette.zesty.zestyOrange}
              size="large"
              marginLeft={2}
              href={'customer-stories/'}
              sx={{
                '&:hover': {
                  borderColor: '#FF5D0A',
                  backgroundColor: '#FF5D0A',
                  color: 'white',
                },
              }}
            >
              {ctaBtn}
            </Box>
          )}
        </Box>
      </Box>
      <Grid container spacing={4}>
        {articlesList?.map((item, i) => (
          <Grid item xs={12} sm={i === 0 ? 12 : 6} md={i < 2 ? 6 : 4} key={i}>
            <Box
              component={'a'}
              href={item?.path}
              display={'block'}
              width={1}
              height={1}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width={1}
                height={1}
                boxShadow={4}
                display={'flex'}
                flexDirection={'column'}
                sx={{ backgroundImage: 'none' }}
              >
                <CardMedia
                  image={item?.image || FillerContent.image}
                  title={item?.title || FillerContent.header}
                  sx={{
                    height: { xs: 300, md: 360 },
                    position: 'relative',
                  }}
                >
                  <Box
                    component={'svg'}
                    viewBox="0 0 2880 480"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      color: theme.palette.background.paper,
                      transform: 'scale(2)',
                      height: 'auto',
                      width: 1,
                      transformOrigin: 'top center',
                    }}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z"
                      fill="currentColor"
                    />
                  </Box>
                </CardMedia>
                <Box component={CardContent} position={'relative'}>
                  <Typography variant={'h6'} gutterBottom>
                    {item?.title || FillerContent.header}
                  </Typography>
                  <Typography color="text.secondary">
                    {item?.description || FillerContent.description}
                  </Typography>
                </Box>
                <Box flexGrow={1} />
                <Box padding={2} display={'flex'} flexDirection={'column'}>
                  <Box marginBottom={2}>
                    <Divider />
                  </Box>
                  <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                  >
                    <Box display={'flex'} alignItems={'center'}>
                      <Avatar src={item.author.image} sx={{ marginRight: 1 }} />
                      <Typography color={'text.secondary'}>
                        {item.author.name}
                      </Typography>
                    </Box>
                    <Typography color={'text.secondary'}>
                      {item?.date || FillerContent.header}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
        {articles?.length >= 10 && (
          <Grid item container justifyContent={'center'} xs={12}>
            <Pagination
              onClick={() => scrollTo('scrollTop')}
              count={pageNum?.length}
              page={currentPage}
              onChange={handlePageChange}
              size={'large'}
              color="primary"
            />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default PopularArticles;
