import React from 'react';
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

import Container from 'components/Container';
import FillerContent from 'components/FillerContent';

const VerticallyAlignedBlogCardsWithShapedImage = ({
  title,
  description,
  ctaBtn,
  articles = [],
  searchQuery,
  authors = [],
}) => {

  const theme = useTheme();

  return (
    <Container paddingTop={'0 !important'}>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
        marginBottom={4}
      >
        <Box>
          <Typography fontWeight={700} variant={'h6'} gutterBottom>
            {title || FillerContent.header}
          </Typography>
          <Typography color={'text.secondary'}>
            {description || FillerContent.description}
          </Typography>
        </Box>
        <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
          <Box
            component={Button}
            variant="outlined"
            color="primary"
            size="large"
            marginLeft={2}
          >
            {ctaBtn || FillerContent.cta}
          </Box>
        </Box>
      </Box>
      <Grid container spacing={4}>
        {articles
          .filter((post) => {
            if (searchQuery === '') {
              return post;
            } else if (
              post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              post.description.toLowerCase().includes(searchQuery.toLowerCase())
            ) {
              return post;
            }
          })
          .map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Box
                component={'a'}
                href={item?.uri || FillerContent.href}
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
                    image={item?.hero_image || FillerContent.image}
                    title={item?.meta_title || 'Card Image'}
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
                      {item.title || FillerContent.header}
                    </Typography>
                    <Typography color="text.secondary">
                      {item.description || FillerContent.description}
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
                        <Avatar
                          src={
                            authors.find((el) => el.authorZUID === item.author)
                              ?.authorImage || FillerContent.image
                          }
                          sx={{ marginRight: 1 }}
                        />
                        <Typography color={'text.secondary'}>
                          {authors.find((el) => el.authorZUID === item.author)
                            ?.authorName || FillerContent.image}
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
      </Grid>
    </Container>
  );
};

export default VerticallyAlignedBlogCardsWithShapedImage;
