import { Box, Link, List, ListItem, Stack, Typography } from '@mui/material';
import React from 'react';
import BlogHero from '../BlogHero';

const image1 =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/blogImage1.png',
  image2 =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/blogImage2.png',
  image3 =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/blogImage3.png',
  image4 =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/blogImage4.png',
  image5 =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/blogImage5.png';

const BlogPage = () => {
  return (
    <Stack>
      <BlogHero />
      <Stack
        sx={(theme) => ({
          [theme.breakpoints.up('lg')]: {
            width: '800',
            mx: 'auto',
          },
        })}
      >
        <Stack
          spacing="20px"
          mt={{ lg: 6 }}
          mb={6}
          px={2}
          sx={(theme) => ({
            [theme.breakpoints.up('tablet')]: {
              width: '640px',
              mx: 'auto',
            },
          })}
        >
          <Typography
            color="text.primary"
            variant="h2"
            fontWeight={800}
            letterSpacing="-0.02em"
          >
            Intro
          </Typography>
          <Typography fontSize="18px" lineHeight="28px" color="text.secondary">
            This October, we will be releasing a brand new Media App experience.
            Below is a sneak peek into our process and a walkthrough of all of
            the new features to come.
          </Typography>
          <Typography fontSize="18px" lineHeight="28px" color="text.secondary">
            The first phase of the media app refresh launched on Wednesday,
            October 26th. Additional features will be released in upcoming
            months. Check out the overview video below:
          </Typography>
        </Stack>

        <Box component="img" src={image1} width="100%" mb={6} />

        <Stack
          spacing="20px"
          mb={6}
          px={2}
          sx={(theme) => ({
            [theme.breakpoints.up('tablet')]: {
              width: '640px',
              mx: 'auto',
            },
          })}
        >
          <Typography
            color="text.primary"
            variant="h2"
            fontWeight={800}
            letterSpacing="-0.02em"
          >
            TLDR
          </Typography>
          <Typography fontSize="18px" lineHeight="28px" color="text.secondary">
            The first phase of the media app refresh launched on Wednesday,
            October 26th. Additional features will be released in upcoming
            months. Check out the overview video below:
          </Typography>
          <List
            sx={{
              color: 'text.secondary',
              listStyleType: 'disc',
              fontSize: '18px',
              lineHeight: '28px',
              fontWeight: 500,
              pl: 2,
              '& .MuiListItem-root': {
                display: 'list-item',
              },
              mb: 6,
            }}
          >
            <ListItem>
              The new media app is coming your way on October 26th
            </ListItem>
            <ListItem>
              Features include:
              <ListItem>
                All Media tab (all in one view of all files) - October 26th
              </ListItem>
              <ListItem>Search for folders - October 26th</ListItem>
              <ListItem>Add alt text while uploading - October 26th</ListItem>
              <ListItem>New file preview modal - October 26th</ListItem>
              <ListItem>{`New "On the Fly" image editor - October 26th`}</ListItem>
              <ListItem>Quick copying - Upcoming release</ListItem>
              <ListItem>Sorting & Filtering - Upcoming release</ListItem>
              <ListItem>Select & Move Files - Upcoming</ListItem>
              <ListItem>Insights Tab - Upcoming release</ListItem>
            </ListItem>
          </List>
        </Stack>

        <Box component="img" src={image2} width="100%" mb={6} />

        <Stack
          spacing="20px"
          mb={6}
          px={2}
          sx={(theme) => ({
            [theme.breakpoints.up('tablet')]: {
              width: '640px',
              mx: 'auto',
            },
          })}
        >
          <Typography
            color="text.primary"
            variant="h2"
            fontWeight={800}
            letterSpacing="-0.02em"
          >
            Understanding where and how we can improve
          </Typography>
          <Typography fontSize="18px" lineHeight="28px" color="text.secondary">
            Before beginning to revamp our new Media app experience, it was
            important to us to understand what marketers & developers needed. We
            had multiple discussions with customers which helped us discover
            insights and feature requests, such as:
          </Typography>
          <Typography fontSize="18px" lineHeight="28px" color="text.secondary">
            The first phase of the media app refresh launched on Wednesday,
            October 26th. Additional features will be released in upcoming
            months. Check out the overview video below:
          </Typography>

          <List
            sx={{
              color: 'text.secondary',
              listStyleType: 'disc',
              fontSize: '18px',
              lineHeight: '28px',
              fontWeight: 500,
              pl: 2,
              '& .MuiListItem-root': {
                display: 'list-item',
              },
              mb: 6,
            }}
          >
            <ListItem>
              Reminders to enter image descriptions that can be used for
              alt-text & captions
            </ListItem>
            <ListItem>Search folders feature</ListItem>
            <ListItem>Sort & filter files and folders feature</ListItem>
            <ListItem>Select & move files feature</ListItem>
            <ListItem>Quick-copying file URLs feature</ListItem>
          </List>
        </Stack>

        <Box component="img" src={image3} width="100%" mb={6} />
        <Stack
          mb={6}
          px={2}
          sx={(theme) => ({
            [theme.breakpoints.up('tablet')]: {
              width: '640px',
              mx: 'auto',
            },
          })}
        >
          <Typography
            color="text.primary"
            variant="h2"
            fontWeight={800}
            letterSpacing="-0.02em"
            mb={6}
          >
            The New Media Experience
          </Typography>

          <Stack spacing="20px">
            <Typography
              color="text.primary"
              variant="h3"
              fontWeight={800}
              letterSpacing="-0.02em"
            >
              See all your files in one space
            </Typography>
            <Typography
              fontSize="18px"
              lineHeight="28px"
              color="text.secondary"
            >
              {`We will introduce an "all media" tab, that helps you see all files
              in your instance in one place in addition to seeing your files by
              folder. No more having to scan multiple folders to find the file
              you most recently uploaded.`}
            </Typography>
            <Typography
              fontSize="18px"
              lineHeight="28px"
              color="text.secondary"
            >
              Additionally, we redesigned how cards appear to easily identify
              the file type.
            </Typography>
          </Stack>
        </Stack>

        <Box component="img" src={image4} width="100%" mb={6} />
        <Stack
          mb={6}
          px={2}
          spacing="20px"
          sx={(theme) => ({
            [theme.breakpoints.up('tablet')]: {
              width: '640px',
              mx: 'auto',
            },
          })}
        >
          <Typography
            color="text.primary"
            variant="h3"
            fontWeight={800}
            letterSpacing="-0.02em"
          >
            Ensure alt-text is no longer an afterthought
          </Typography>

          <Typography fontSize="18px" lineHeight="28px" color="text.secondary">
            Alt-text is important for both accessibility and SEO. A critical
            area we noticed was users not remembering to add descriptions for
            files individually after they were uploaded. This meant that images
            would lack good descriptions and hence this would impact the
            alt-text experience as well.
          </Typography>
          <Typography fontSize="18px" lineHeight="28px" color="text.secondary">
            With the new experience, users can now enter descriptions which
            could be used as alt immediately while uploading files versus later.
          </Typography>
        </Stack>

        <Box component="img" src={image5} width="100%" mb={6} />
        <Stack
          mb={6}
          px={2}
          spacing="20px"
          sx={(theme) => ({
            [theme.breakpoints.up('tablet')]: {
              width: '640px',
              mx: 'auto',
            },
          })}
        >
          <Typography
            color="text.primary"
            variant="h3"
            fontWeight={800}
            letterSpacing="-0.02em"
          >
            What’s Next?
          </Typography>

          <Typography fontSize="18px" lineHeight="28px" color="text.secondary">
            Moving forward, our team is building new ways to enhance the way you
            collaborate with your team store, and organize files and media.
          </Typography>

          <Stack
            sx={(theme) => ({
              borderLeft: `4px solid ${theme.palette.primary.main}`,
            })}
          >
            <Typography pl={2} variant="h4" letterSpacing="-0.02em">
              “With an extremely efficient UI and a host of innovative features,
              Zesty.io has become the backbone of our customer engagement
              success, as the site has received over half a million customer
              visits in its first few months.”
            </Typography>
          </Stack>

          <Typography fontSize="18px" lineHeight="28px" color="text.secondary">
            We would love to incorporate your ideas and feedback in building the
            future of Zesty. We are actively listening and learning from each of
            you, so please share your thoughts with us over a{' '}
            <Link
              href="https://calendly.com/zesty-reviews/design-review?month=2023-03"
              color="info.main"
              underline="none<"
            >
              video call
            </Link>{' '}
            or this{' '}
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSd4D42GO8DXB5_o3u2bq3A8GwpTFPd80Un1kDpxL5xSgqECVQ/viewform"
              color="info.main"
              underline="none"
            >
              feedback form
            </Link>
            .
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default BlogPage;
