import { Avatar, Grid, Stack, Typography } from '@mui/material';
import React from 'react';

const image =
  'https://storage.googleapis.com/assets.zesty.io/website/images/assets/zosh.svg';

const sampleTestimonails = [
  {
    text: `Quis neque, eu et ipsum amet, vel et. Varius integer enim
            pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas
            nibh.`,
    authorImage:
      'https://storage.googleapis.com/assets.zesty.io/website/images/assets/zosh.svg',
    author: 'Loki Bright',
    supportingText: 'Founder, Bitcoin (BTC)',
  },
  {
    text: `Quis neque, eu et ipsum amet, vel et. Varius integer enim
            pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas
            nibh.`,
    authorImage:
      'https://storage.googleapis.com/assets.zesty.io/website/images/assets/zosh.svg',
    author: 'Loki Bright',
    supportingText: 'Founder, Bitcoin (BTC)',
  },
  {
    text: `Quis neque, eu et ipsum amet, vel et. Varius integer enim
            pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas
            nibh.`,
    authorImage:
      'https://storage.googleapis.com/assets.zesty.io/website/images/assets/zosh.svg',
    author: 'Loki Bright',
    supportingText: 'Founder, Bitcoin (BTC)',
  },
];

const Grid3Testimonials = ({ testimoninals = sampleTestimonails }) => {
  return (
    <Grid
      container
      spacing={{ xs: '20px', tablet: 4 }}
      sx={(theme) => ({
        [theme.breakpoints.up('xs')]: {
          py: 4,
          px: 2,
        },
        [theme.breakpoints.up('tablet')]: {
          py: 6,
          px: 4,
        },
        [theme.breakpoints.up('lg')]: {
          py: 8,
          px: 14,
        },
      })}
    >
      {testimoninals?.map((testimonial, index) => (
        <Grid key={index} item xs={12} tablet={6} lg={4}>
          <Stack
            p={3}
            sx={{
              boxShadow:
                '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px -1px rgba(16, 24, 40, 0.1)',
              borderRadius: '6px',
            }}
          >
            <Typography
              color="text.primary"
              fontSize="18px"
              lineHeight="28px"
              mb="20px"
            >
              {testimonial.text}
            </Typography>
            <Stack direction="row" gap="12px">
              <Avatar
                src={testimonial.authorImage}
                sx={(theme) => ({
                  [theme.breakpoints.up('xs')]: {
                    width: 40,
                    height: 40,
                  },
                })}
              />
              <Stack>
                <Typography
                  variant="body2"
                  fontWeight={500}
                  color="text.primary"
                >
                  {testimonial.author}
                </Typography>
                <Typography
                  fontSize="14px"
                  lineHeight="20px"
                  color="text.secondary"
                >
                  {testimonial.supportingText}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};

export default Grid3Testimonials;
