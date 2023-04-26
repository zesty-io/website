import {
  Chip,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

const BlogPageHeader = ({ title = 'Blog', handleSearch, tags = [] }) => {
  return (
    <Stack
      id="searchArticle"
      sx={(theme) => ({
        [theme.breakpoints.up('xs')]: {
          maxWidth: theme.maxWidth,
          mx: 'auto',
          pt: 4,
          px: 2,
        },
        [theme.breakpoints.up('tablet')]: {
          pt: 6,
          px: 4,
        },
        [theme.breakpoints.up('lg')]: {
          pt: 8,
          px: 14,
        },
      })}
    >
      <Stack width={{ tablet: '644px' }}>
        <Typography
          color="text.primary"
          fontWeight={800}
          fontSize="44px"
          lineHeight="48px"
          mb={3}
        >
          {title}
        </Typography>
        <TextField
          placeholder="Search an article"
          sx={{
            mb: 2,
            bgcolor: 'grey.50',
            borderRadius: '8px',
            '& fieldset': { border: 'none' },
          }}
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          onChange={(e) => handleSearch(e.target.value)}
        />

        <Stack gap={2} direction="row" flexWrap="wrap">
          {tags?.length
            ? tags.map((tag) => (
                <Link key={tag.name} href={tag.link} underline="none">
                  <Chip
                    variant="outlined"
                    label={tag.name}
                    sx={{
                      p: '4px',
                      borderRadius: '4px',
                      borderColor: 'grey.100',
                      color: 'text.secondary',
                      bgcolor: 'grey.100',
                      cursor: 'pointer',
                      '& span': {
                        p: '3px 6px',
                      },
                    }}
                  >
                    {tag.name}
                  </Chip>
                </Link>
              ))
            : ''}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default BlogPageHeader;
