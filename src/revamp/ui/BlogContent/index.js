import { Stack, Typography, Grid, Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import BlogCard from '../BlogCard';
import { useTheme, useMediaQuery } from '@mui/material';
import FillerContent from 'components/globals/FillerContent';

const BlogContent = ({ title = '', articles, withPagination = false }) => {
  // checks for related articles data else return nothing
  if (articles != null) {
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
                {/* 
                  articleList can be fetched either from all articles end point or related articles from content object.

                  If no data to a single article item, filler data will be prioritized
                 */}
                <BlogCard
                  article={
                    article?.hero_image?.data[0]?.url ||
                    article.image ||
                    FillerContent.image
                  }
                  heading={article.title}
                  description={article.description}
                  author={article.author.name || article.author?.data[0].name}
                  authorImage={
                    article.author.image ||
                    article?.author?.data[0].headshot?.data[0].url
                  }
                  path={article.path || article.meta.web.uri}
                  supportingText={article?.date}
                  category={
                    article?.category?.category ||
                    article?.category?.data[0].category
                  }
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
  } else {
    return <></>;
  }
};

export default BlogContent;
