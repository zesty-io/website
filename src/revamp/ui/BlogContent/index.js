import { Stack, Typography, Grid, Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import BlogCard from '../BlogCard';
import { useTheme, useMediaQuery } from '@mui/material';
import FillerContent from 'components/globals/FillerContent';

const BlogContent = ({ title = '', articles, withPagination = false }) => {
  const theme = useTheme();
  const isLG = useMediaQuery(theme.breakpoints.up('lg'));
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
  const [postPerPage, _setPostPerPage] = useState(10);
  const indexOfLast = currentPage * postPerPage;
  const indexOfFirst = indexOfLast - postPerPage;
  const pageNum = [];
  const articlesList = !withPagination
    ? articles
    : articles.slice(indexOfFirst, indexOfLast);
  for (let i = 1; i <= Math.ceil(articles.length / postPerPage); i++) {
    pageNum.push(i);
  }
  const handlePageChange = (_event, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    if (articlesList?.length <= postPerPage) setCurrentPage(1);
  }, [articles]);

  return (
    <>
      <Stack
        id="scrollTop"
        sx={(theme) => ({
          [theme.breakpoints.up('xs')]: {
            px: 4,
            py: 6,
          },
          [theme.breakpoints.up('lg')]: {
            px: 14,
            py: 8,
            mx: 'auto',
            maxWidth: theme.maxWidth,
          },
        })}
      >
        <Typography
          mb={8}
          variant="h2"
          fontWeight={800}
          letterSpacing="-0.02em"
          display={title === '' ? 'none' : 'block'}
        >
          {title}
        </Typography>
        <Grid container rowSpacing={8} columnSpacing={6}>
          {articlesList.map((article, index) => (
            <Grid xs={12} lg={index === 0 ? 12 : 4} item key={index}>
              <BlogCard
                article={article.image || FillerContent.image}
                heading={article.title}
                description={article.description}
                author={article.author.name}
                authorImage={article.author.image}
                path={article.path}
                supportingText={article?.date}
                category={article?.category?.category}
                isBig={isLG && index === 0 ? true : false}
              />
            </Grid>
          ))}
        </Grid>
      </Stack>

      {withPagination && articlesList?.length ? (
        <Stack
          sx={(theme) => ({
            [theme.breakpoints.up('xs')]: {
              py: 3,
              mx: 'auto',
              maxWidth: theme.maxWidth,
            },
          })}
        >
          <Pagination
            onClick={() => scrollTo('searchArticle')}
            count={pageNum?.length}
            page={currentPage}
            onChange={handlePageChange}
            size={'large'}
            color="primary"
          />
        </Stack>
      ) : (
        ''
      )}
    </>
  );
};

export default BlogContent;
