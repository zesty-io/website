import { Avatar, Chip, Link, Stack, Typography } from '@mui/material';
import React from 'react';

const image =
  'https://storage.googleapis.com/assets.zesty.io/website/images/assets/zosh.svg';

const AuthorSection = ({
  authorImage = image,
  authorName = 'Zoshua Colah',
  authorDescription = 'Zoshua is a Senior Product Designer at Zesty.io, elevating the experiences people have in making content-rich experiences. Having spent over 5 years making intuitive product experiences, he understands the need for a CMS that works with you - not against you. In his free time, you can find Zosh either teaching, mentoring, or sharing UX resources.',
  authorLink,
  tags,
}) => {
  return (
    <Stack
      sx={(theme) => ({
        [theme.breakpoints.up('xs')]: {
          borderTop: `1px solid ${theme.palette.grey[100]}`,
          px: 2,
          py: 4,
        },
        [theme.breakpoints.up('tablet')]: {
          px: 4,
          py: 6,
        },
        [theme.breakpoints.up('lg')]: {
          width: '640px',
          mx: 'auto',
          py: 4,
          px: 0,
        },
      })}
    >
      <Stack mb={3}>
        <Link href={authorLink}>
          <Avatar
            src={authorImage}
            sx={(theme) => ({
              [theme.breakpoints.up('xs')]: {
                width: 64,
                height: 64,
                mb: 3,
              },
              [theme.breakpoints.up('lg')]: {
                width: 80,
                height: 80,
                mb: 4,
              },
            })}
          />
        </Link>

        <Typography
          color="text.primary"
          fontWeight={800}
          fontSize="16px"
          lineHeight="24px"
          textTransform="uppercase"
          letterSpacing="0.02em"
          mb={1}
        >
          By {authorName}
        </Typography>
        <Typography fontSize="18px" lineHeight="28px" color="text.secondary">
          {authorDescription}
        </Typography>
      </Stack>
      {tags?.length && (
        <Stack>
          <Typography
            color="text.primary"
            fontWeight={800}
            fontSize="16px"
            lineHeight="24px"
            textTransform="uppercase"
            letterSpacing="0.02em"
            mb="12px"
          >
            Explore More
          </Typography>
          <Stack direction="row" spacing="12px">
            {tags?.map((tag) => (
              <Link key={tag.name} href={tag.link} underline="none">
                <Chip
                  variant="outlined"
                  label={tag.name}
                  sx={{
                    borderRadius: '4px',
                    borderColor: 'grey.300',
                    color: 'text.primary',
                    cursor: 'pointer',
                  }}
                />
              </Link>
            ))}
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};

export default AuthorSection;
