/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import FillerContent from 'components/FillerContent';


const SidebarArticles = ({latestArticles}) => {



  const theme = useTheme();
  return (
    <Box component={Card} variant={'outlined'} padding={2}>
      <Typography
        variant="h6"
        data-aos={'fade-up'}
        sx={{
          fontWeight: 700,
          marginBottom: 2,
        }}
      >
        Latest Articles
      </Typography>
      <Grid container spacing={2}>
        {latestArticles.map((item, i) => (
          <Grid key={i} item xs={12}>
            <Box
              component={Card}
              width={1}
              height={1}
              boxShadow={0}
              borderRadius={0}
              display={'flex'}
              flexDirection={{ xs: 'column', md: 'row' }}
              sx={{ backgroundImage: 'none', bgcolor: 'transparent' }}
            >
              <Box
                sx={{
                  width: { xs: 1, md: '50%' },
                  '& .lazy-load-image-loaded': {
                    height: 1,
                    display: 'flex !important',
                  },
                }}
              >
                <Box
                  component={LazyLoadImage}
                  height={1}
                  width={1}
                  src={item?.hero_image?.data[0]?.url || FillerContent.image}
                  alt={item.title}
                  effect="blur"
                  sx={{
                    objectFit: 'cover',
                    maxHeight: 120,
                    borderRadius: 2,
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0.7)'
                        : 'none',
                  }}
                />
              </Box>
              <CardContent
                sx={{ padding: 1, '&:last-child': { paddingBottom: 1 } }}
              >
                <Typography fontWeight={700}>{item.title || FillerContent.header}</Typography>
                <Box marginY={1 / 4}>
                  <Typography
                    variant={'caption'}
                    color={'text.secondary'}
                    component={'i'}
                  >
                    {item.author?.data[0]?.name || FillerContent.header} - {item.date}
                  </Typography>
                </Box>
                <Button href={item?.meta?.web?.uri || FillerContent.href} size={'small'}>Read More</Button>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SidebarArticles;
