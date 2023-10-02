import { Box, Button, Stack, Typography } from '@mui/material';

import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import React from 'react';

const listItems = [
  'Tortor interdum condimentum nunc molestie quam',
  'Tortor interdum condimentum nunc molestie quam',
  'Tortor interdum condimentum nunc molestie quam',
];

const TabSection = ({
  header = 'Digital Asset Management made easy',
  lists = listItems,
  primaryBtn = 'Free Consultation',
  primaryBtnLink = '/demo',
  image = 'https://kfg6bckb.media.zestyio.com/schema.png',
}) => {
  const theme = useTheme();
  const isLG = useMediaQuery(theme.breakpoints.up('lg'));
  const isTablet = useMediaQuery(theme.breakpoints.up('tablet'));

  return (
    <Stack borderRadius="16px" bgcolor="grey.900">
      <Stack
        direction={isLG ? 'row' : 'column'}
        columnGap={!isLG ? 1 : 0}
        justifyContent="center"
        sx={(theme) => ({
          [theme.breakpoints.up('xs')]: {
            p: 4,
          },
          [theme.breakpoints.up('tablet')]: {
            p: 6,
          },
          [theme.breakpoints.up('lg')]: {
            py: 10,
            px: 8,
          },
        })}
      >
        <Stack order={isLG ? 2 : 1}>
          <Box
            component="img"
            loading="lazy"
            alt="zesty-image"
            src={image}
            sx={(theme) => ({
              [theme.breakpoints.up('xs')]: {
                objectFit: 'contain',
                width: '279px',
                height: '200px',
                mb: 3,
              },
              [theme.breakpoints.up('mobile')]: {
                width: '100%',
                height: '100%',
              },
              [theme.breakpoints.up('tablet')]: {
                // width: '608px',
                // height: '420px',
                mb: 6,
              },
              [theme.breakpoints.up('lg')]: {
                width: '540px',
                height: '420px',
                mb: 0,
              },
              [theme.breakpoints.up('desktopWide')]: {
                width: '780px',
                height: '420px',
              },
            })}
          />
        </Stack>

        <Stack order={isLG ? 1 : 2} justifyContent="center" mr={isLG ? 8 : 0}>
          <Typography
            variant="h2"
            fontWeight={800}
            color="white"
            mb={3}
            letterSpacing="-0.02em"
            sx={(theme) => ({
              [theme.breakpoints.up('lg')]: {
                fontSize: '44px',
                lineHeight: '48px',
              },
            })}
          >
            {header}
          </Typography>
          <Stack rowGap="16px" mb={4}>
            {lists.map((list) => (
              <Stack direction="row" columnGap="12px" key={list}>
                <CheckRoundedIcon color="success" />
                <Typography color="white">{list}</Typography>
              </Stack>
            ))}
          </Stack>
          <Stack direction="row" spacing="12px">
            <Button
              variant="contained"
              size={isTablet ? 'extraLarge' : 'medium'}
              color="primary"
              href={primaryBtnLink}
            >
              {primaryBtn}
            </Button>
            {/* <Button
              variant="outlined"
              size={isTablet ? 'extraLarge' : 'medium'}
              href={secondaryBtnLink}
            >
              {secondaryBtn}
            </Button> */}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TabSection;
