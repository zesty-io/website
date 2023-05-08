import { Box, Button, Link, Stack, Typography } from '@mui/material';
import React from 'react';

const featureContent =
  'https://storage.googleapis.com/assets.zesty.io/website/images/assets/featureContent.jpg';

const FeatureTwoCTA = ({
  overline = 'SETUP, EASY-PEASY!',
  heading = 'Hassle-free setup with APIs that integrate with all frameworks',
  supportingText = ``,
  primaryBtn = 'Find a Partner',
  primaryBtnLink = '#',
  secondaryBtn = 'Talk to Sales',
  secondaryBtnLink = '#',
  image = featureContent,
  isImageRight = true,
  hasCTA = true,
}) => {
  return (
    <Stack>
      <Stack
        mb={{ xs: 3, tablet: 6 }}
        direction={{ xs: 'column', lg: 'row' }}
        justifyContent={{ desktopWide: 'center' }}
        sx={(theme) => ({
          [theme.breakpoints.up('xs')]: {
            maxWidth: theme.maxWidth,
            mx: 'auto',
            py: 4,
            px: 2,
          },
          [theme.breakpoints.up('tablet')]: {
            py: 6,
            px: 4,
          },
          [theme.breakpoints.up('lg')]: {
            py: 10,
            px: 14,
            gap: 8,
          },
        })}
      >
        <Stack
          mb={{ xs: 3, tablet: 6, lg: 0 }}
          sx={{ width: { lg: '456px', desktopWide: '576px' } }}
          py={{ desktopWide: 6 }}
          order={{ lg: isImageRight ? 0 : 1 }}
          justifyContent="center"
        >
          <Typography
            textTransform="uppercase"
            variant="body2"
            fontWeight={600}
            color="primary"
            mb="12px"
          >
            {overline}
          </Typography>
          <Typography
            color="text.primary"
            letterSpacing="-0.02em"
            fontWeight={800}
            variant="h2"
            mb="12px"
            sx={(theme) => ({
              [theme.breakpoints.up('tablet')]: {
                fontSize: '36px',
                lineHeight: '44px',
              },
            })}
          >
            {heading}
          </Typography>
          <Typography
            color="text.secondary"
            fontSize="18px"
            lineHeight="28px"
            mb={hasCTA ? 4 : 0}
          >
            {supportingText === '' ? (
              [
                `With Zesty you’re not constrained to using one kind of API. You can use any of our APIs (GraphQL, REST, GET, and Instant JSON) with any framework of your choice. And they all come with web-hooks and site generators. Check them out in our `,
                <Link href="/docs" color="info.main" underline="none">
                  documentation
                </Link>,
              ]
            ) : (
              <Box
                component="div"
                sx={(theme) => ({
                  '& a': {
                    color: theme.palette.info.main,
                    textDecoration: 'none',
                  },
                })}
                dangerouslySetInnerHTML={{ __html: supportingText }}
              />
            )}
          </Typography>
          {hasCTA && (
            <Stack direction="row" columnGap={2}>
              <Button
                href={primaryBtnLink}
                variant="contained"
                size="extraLarge"
              >
                {primaryBtn}
              </Button>
              <Button
                href={secondaryBtnLink}
                variant="outlined"
                size="extraLarge"
              >
                {secondaryBtn}
              </Button>
            </Stack>
          )}
        </Stack>
        <Stack
          mb={{
            xs: !isImageRight && 3,
            tablet: !isImageRight && 6,
            lg: !isImageRight && 0,
          }}
          order={{ lg: isImageRight ? 1 : 0 }}
          justifyContent="center"
        >
          <Box
            component="img"
            src={image}
            sx={(theme) => ({
              [theme.breakpoints.up('xs')]: {
                objectFit: 'contain',
                maxWidth: '100%',
                height: '100%',
              },
              // [theme.breakpoints.up('mobile')]: {
              //   maxWidth: '704px',
              //   height: '343px',
              // },
              [theme.breakpoints.up('tablet')]: {
                maxWidth: '100%',
                height: '420px',
              },
              [theme.breakpoints.up('lg')]: {
                width: '456px',
                height: '100%',
              },
              [theme.breakpoints.between(1201, 1439)]: {
                maxWidth: '100%',
                height: '100%',
              },
              [theme.breakpoints.up('desktopWide')]: {
                width: '576px',
                height: '420px',
              },
            })}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FeatureTwoCTA;
