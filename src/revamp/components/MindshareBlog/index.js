import { Stack, Typography } from '@mui/material';
import useDebounce from 'components/hooks/useDebounce';
import React, { useEffect, useState } from 'react';
import BlogContent from 'revamp/ui/BlogContent';
import BlogPageHeader from 'revamp/ui/BlogPageHeader';

const MindshareBlog = ({ tags, articles }) => {
  const [search, setSearch] = useState('');
  const [newArticles, setNewArticles] = useState([]);

  useEffect(() => {
    setNewArticles(articles);
  }, [articles]);

  const value = useDebounce(search, handleSearch);

  function handleSearch() {
    setNewArticles(
      articles?.filter((x) =>
        x.title.toLowerCase().includes(value.toLowerCase()),
      ),
    );
  }

  return (
    <>
      <BlogPageHeader tags={tags} handleSearch={setSearch} />

      <Stack
        sx={(theme) => ({
          mx: 'auto',
          maxWidth: theme.maxWidth,
        })}
      >
        {search === '' && newArticles?.length === 0 ? (
          <Typography textAlign="center" variant="h4" py={2}>
            Loading...
          </Typography>
        ) : newArticles?.length ? (
          <BlogContent articles={newArticles} withPagination />
        ) : (
          <Typography textAlign="center" variant="h4" py={2}>
            No articles found.
          </Typography>
        )}
      </Stack>
    </>
  );
};

export default MindshareBlog;
