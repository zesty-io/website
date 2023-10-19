import { Stack, Box, Typography, Avatar, Link } from '@mui/material';
import React, { useState } from 'react';

const image =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/zosh.svg',
  articleFrame =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/articleFrame.jpg';

const BlogCard = ({
  article = articleFrame,
  category = 'product',
  heading = 'Announcing the New Schema App Experience',
  description = 'An overview of the redesign and new features introduced into our new Schema app experience.',
  authorImage = image,
  author = 'Loki Bright',
  supportingText = 'Oct 19, 2021 • 5min read',
  isBig = false,
  path,
}) => {
  const [isOver, setIsOver] = useState(false);
  return (
    <Stack
      component={Link}
      href={path}
      underline="none"
      direction={isBig ? 'row' : 'column'}
      gap={isBig ? 4 : 3}
      onMouseOver={() => setIsOver(true)}
      onMouseLeave={() => setIsOver(false)}
      height="100%"
      sx={{
        '&:hover img': {
          transform: 'scale(1.03)',
        },
      }}
    >
      <Stack order={isBig ? 1 : 0}>
        <Stack borderRadius="6px" overflow="hidden">
          <Box
            id="hi"
            component="img"
            width={{ xs: '100%', lg: isBig ? '695px' : '100%' }}
            height={{ xs: '100%', lg: isBig ? '391px' : '216px' }}
            src={article}
            sx={{
              objectFit: 'cover',
              transition: 'transform 0.25s',
              transform: 'scale(1)',
            }}
          />
        </Stack>
      </Stack>
      <Stack
        order={isBig ? 0 : 1}
        justifyContent={isBig && 'center'}
        width={{
          xs: '100%',
          desktopWide: isBig ? '489px' : '100%',
        }}
        height="100%"
      >
        <Stack spacing={isBig ? 2 : 1} mb={3}>
          <Typography
            color="text.secondary"
            fontSize="12px"
            lineHeight="18px"
            fontWeight={600}
            letterSpacing=".15px"
            textTransform="uppercase"
          >
            {category}
          </Typography>
          <Typography
            variant={isBig ? 'h2' : 'h4'}
            fontWeight={800}
            letterSpacing="-0.02em"
            sx={(theme) => ({
              color: isOver ? theme.palette.primary.main : 'text.primary',
            })}
          >
            {heading}
          </Typography>
          <Typography color="text.secondary">{description}</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" mt={isBig ? 0 : 'auto'}>
          <Avatar
            src={authorImage}
            sx={{ width: 48, height: 48, mr: '12px' }}
          />
          <Stack>
            <Typography variant="body2" color="text.primary">
              {author}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {supportingText}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default BlogCard;
