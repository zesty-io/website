import React, { useEffect, useState } from 'react';
import useFetch from 'components/hooks/useFetch';
import MuiMarkdown from 'mui-markdown';
import { Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import FillerContent from 'components/globals/FillerContent';

const SiteBanner = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [bannerContent, setBannerContent] = useState([]);

  let zestyURL = process.env.zesty.production
    ? process.env.zesty.production
    : process.env.zesty.stage;

  const { data: response } = useFetch(
    '/-/instant/7-b2aebef2c6-cf7jms.json',
    zestyURL,
  );

  useEffect(() => {
    setBannerContent(response);
  }, [response]);

  return (
    <>
      {bannerContent.length != 0 && (
        <Stack
          px={{ xs: 2 }}
          py={1.5}
          mb={1}
          justifyContent={'center'}
          justifyItems="center"
          textAlign={'center'}
          alignItems="center"
          sx={{ background: theme.palette.zesty.zestyBanner }}
          direction={isMobile ? 'column' : 'row'}
        >
          <Stack
            sx={{
              background: theme.palette.zesty.zestyOrange,
              borderRadius: '5px',
              px: 1,
              mr: 1,
            }}
          >
            <Typography variant="caption" color={'white'}>
              NEW
            </Typography>
          </Stack>
          {bannerContent.length != 0 && (
            <MuiMarkdown
              overrides={{
                p: {
                  component: Typography,
                  props: {
                    mt: isMobile ? 1 : 0,
                    variant: 'body1',
                    color: theme.palette.common.white,
                  },
                },
                a: {
                  component: Typography,
                  props: {
                    component: 'a',
                    variant: 'body1',
                    color: theme.palette.common.white,
                  },
                },
              }}
            >
              {bannerContent.data[0].content.banner_content ||
                FillerContent.description}
            </MuiMarkdown>
          )}
          {children}
        </Stack>
      )}
    </>
  );
};

export default SiteBanner;
