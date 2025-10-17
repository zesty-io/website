import { Container, Stack, Typography } from '@mui/material';
import { CtaWithInputField } from 'blocks/cta';
import useDebounce from 'components/hooks/useDebounce';
import React, { memo, useEffect, useState } from 'react';
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
      <Container position="relative" zIndex={3}>
        <CtaWithInputField
          title={'Subscribe to the zestiest newsletter in the industry'}
          description={
            'Get the latest from the Zesty team, from whitepapers to product updates.'
          }
          cta={'Subscribe'}
        />
      </Container>
    </>
  );
};

export default memo(MindshareBlog);
