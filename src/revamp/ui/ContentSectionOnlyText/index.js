import { Link, Stack, Typography } from '@mui/material';
import React from 'react';

const ContentSectionOnlyText = ({
  overline = 'SETUP, EASY-PEASY!',
  heading = 'Hassle-free setup with APIs that integrate with all frameworks',
  supportingText = ``,
}) => {
  return (
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
          px: 14,
          py: 8,
        },
        [theme.breakpoints.up('xl')]: {
          maxWidth: theme.maxWidth,
          mx: 'auto',
        },
      })}
    >
      <Stack
        mb={{ xs: 3, tablet: 6 }}
        mx="auto"
        width={{ lg: '624px' }}
        textAlign="center"
      >
        <Typography variant="body2" color="primary" fontWeight={600} mb="12px">
          {overline}
        </Typography>
        <Typography
          color="text.primary"
          variant="h2"
          sx={(theme) => ({
            [theme.breakpoints.up('xs')]: {
              letterSpacing: '-0.02em',
              fontWeight: 800,
              mb: '12px',
            },
            [theme.breakpoints.up('tablet')]: {
              fontSize: '36px',
              lineHeight: '44px',
            },
          })}
        >
          {heading}
        </Typography>
        <Typography color="text.secondary" fontSize="18px" lineHeight="28px">
          {supportingText === '' ? (
            [
              `With Zesty you’re not constrained to using one kind of API. You can use any of our APIs (GraphQL, REST, GET, and Instant JSON) with any framework of your choice. And they all come with web-hooks and site generators. Check them out in our `,
              <Link href="/docs" color="info.main" underline="none">
                documentation
              </Link>,
            ]
          ) : (
            <div dangerouslySetInnerHTML={{ __html: supportingText }} />
          )}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ContentSectionOnlyText;
