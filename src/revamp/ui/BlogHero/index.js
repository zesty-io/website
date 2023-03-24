import {
  alpha,
  Avatar,
  Box,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import authorImage from 'revamp/assets/zosh.svg';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import articleFrame from 'revamp/assets/articleFrame.jpg';
import React from 'react';

const BlogHero = ({
  overline = 'PRODUCT ANNOUNCMENT',
  heading = 'Announcing the New Zesty Media App Experience',
  author = 'Zoshua Colah',
  image = authorImage.src,
  supportingText = 'October 20, 2021',
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
        <Typography
          variant="body2"
          fontWeight={700}
          color="text.secondary"
          mb={1}
        >
          {overline}
        </Typography>
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
          <Avatar src={image} sx={{ width: 48, height: 48, mr: '12px' }} />
          <Stack>
            <Typography variant="body2" fontWeight={500} color="text.primary">
              {author}
            </Typography>
            <Typography color="text.secondary" variant="body2">
              {supportingText}
            </Typography>
          </Stack>
          <IconButton sx={{ marginLeft: 'auto' }}>
            <ShareRoundedIcon
              color="red"
              sx={(theme) => ({
                fill: alpha(theme.palette.grey[900], 0.4),
              })}
            />
          </IconButton>
        </Stack>
      </Stack>
      <Box
        component="img"
        src={articleFrame.src}
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
