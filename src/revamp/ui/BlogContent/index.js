import { Stack, Typography, Grid } from '@mui/material';
import React from 'react';
import BlogCard from '../BlogCard';
import { useTheme, useMediaQuery } from '@mui/material';
import FillerContent from 'components/globals/FillerContent';

const BlogContent = ({ title = 'Related Articles', articles }) => {
  const theme = useTheme();
  const isLG = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <Stack
      sx={(theme) => ({
        [theme.breakpoints.up('xs')]: {
          px: 4,
          py: 6,
        },
        [theme.breakpoints.up('lg')]: {
          maxWidth: '976px',
          mx: 'auto',
        },
        [theme.breakpoints.up('desktopWide')]: {
          maxWidth: '1216px',
        },
      })}
    >
      <Typography mb={8} variant="h2" fontWeight={800} letterSpacing="-0.02em">
        {title}
      </Typography>
      <Grid container rowSpacing={8} columnSpacing={6}>
        {articles.map((article, index) => (
          <Grid lg={index === 0 ? 12 : 4} item key={index}>
            <BlogCard
              article={article.image || FillerContent.image}
              heading={article.title}
              description={article.description}
              author={article.author.name}
              authorImage={article.author.image}
              path={article.path}
              supportingText={article?.date}
              isBig={isLG && index === 0 ? true : false}
            />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default BlogContent;
