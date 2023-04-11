import {
  alpha,
  Avatar,
  Box,
  IconButton,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import React from 'react';

const image =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/zosh.svg',
  articleFrame =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/articleFrame.jpg';

const BlogHero = ({
  overline = 'PRODUCT ANNOUNCMENT',
  heading = 'Announcing the New Zesty Media App Experience',
  author = 'Zoshua Colah',
  authorLink,
  authorImage = image,
  supportingText = 'October 20, 2021',
  articleImage = articleFrame,
  categoryLink,
}) => {
  return (
    <Stack>
      <Stack
        sx={(theme) => ({
          [theme.breakpoints.up('xs')]: {
            px: 2,
            py: 4,
          },
          [theme.breakpoints.up('tablet')]: {
            px: 4,
            py: 6,
          },
          [theme.breakpoints.up('lg')]: {
            px: 31,
            py: 6,
          },
          [theme.breakpoints.up('desktopWide')]: {
            px: 46,
            py: 6,
          },
          [theme.breakpoints.up('xl')]: {
            maxWidth: theme.maxWidth,
            mx: 'auto',
          },
        })}
      >
        <Link
          fontWeight={700}
          color="text.secondary"
          underline="none"
          href={categoryLink}
          fontSize="14px"
          lineHeight="20px"
          mb={(theme) => ({
            xs: 1,
            lg: '12px',
            cursor: 'pointer',
            textTransform: 'uppercase',
            '&:hover': {
              color: theme.palette.primary.main,
            },
          })}
        >
          {overline}
        </Link>
        <Typography
          variant="h2"
          color="text.primary"
          letterSpacing="-0.02em"
          fontWeight={800}
          mb={3}
          sx={(theme) => ({
            [theme.breakpoints.up('lg')]: {
              fontSize: '44px',
              lineHeight: '48px',
              mb: 4,
            },
          })}
        >
          {heading}
        </Typography>
        <Stack direction="row" alignItems="center">
          <Link href={authorLink}>
            <Avatar
              src={authorImage}
              sx={{ width: 48, height: 48, mr: '12px' }}
            />
          </Link>

          <Stack>
            <Link
              variant="body2"
              fontWeight={500}
              color="text.primary"
              underline="none"
              href={authorLink}
              sx={{ cursor: 'pointer' }}
            >
              {author}
            </Link>
            <Link
              variant="body2"
              color="text.secondary"
              underline="none"
              href={authorLink}
              sx={{ cursor: 'pointer' }}
            >
              {supportingText}
            </Link>
          </Stack>
          <IconButton sx={{ marginLeft: 'auto' }}>
            <ShareRoundedIcon
              sx={(theme) => ({
                fill:
                  theme.palette.mode === 'light'
                    ? alpha(theme.palette.grey[900], 0.4)
                    : 'white',
              })}
            />
          </IconButton>
        </Stack>
      </Stack>
      <Box
        component="img"
        src={articleImage}
        sx={(theme) => ({
          [theme.breakpoints.up('xs')]: {
            objectFit: 'contain',
            width: '100%',
            height: '100%',
          },
          [theme.breakpoints.up('xl')]: {
            maxWidth: theme.maxWidth,
            mx: 'auto',
          },
        })}
      />
    </Stack>
  );
};

export default BlogHero;
