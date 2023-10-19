import {
  Chip,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

const BlogPageHeader = ({ title = 'Blog', handleSearch, tags = [] }) => {
  const theme = useTheme();
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
          sx={(theme) => ({
            mb: 2,
            bgcolor: theme.palette.mode === 'light' ? 'grey.50' : 'transparent',
            borderRadius: '8px',
            '& fieldset': {
              border: theme.palette.mode === 'light' ? 'none' : 'grey.50',
            },
          })}
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon
                  style={{
                    fill: theme.palette.mode === 'dark' && '#fff',
                  }}
                />
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
                    sx={(theme) => ({
                      p: '4px',
                      borderRadius: '4px',
                      borderColor: 'grey.100',
                      color: 'text.secondary',
                      bgcolor:
                        theme.palette.mode === 'light'
                          ? 'grey.100'
                          : 'transparent',
                      cursor: 'pointer',
                      '& span': {
                        p: '3px 6px',
                      },
                    })}
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
